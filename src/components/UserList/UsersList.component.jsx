import React, { Suspense, useEffect, useReducer, useState } from "react"
import { Loader } from "../Content/Loader.jsx"
import { initialListState, listReducer, loadUsersAction } from "./listReducer.js"

const LazyCard = React.lazy(() => import("./Card.jsx"))

export const UsersList = ({createdUser}) => {
    const [{users, total, next}, dispatch] = useReducer(listReducer, initialListState)
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)

    const loadUsers = (users ,url) => {
        setLoading(true)
        fetch(url)
        .then(r => r.json())
        .then(r => {
            dispatch(
                loadUsersAction(
                    [...users, ...r.users],
                    r.total_users, 
                    r.links.next_url
                )
            )
        })
        .catch((r) => {
            setError(r.message)
        })
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        loadUsers([],"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6")
    }, [createdUser])

    const renderCards = () => {
        
        return users.map((user) => 
            (<li key={user.id}>
                <Suspense fallback={<Loader />}>
                    <LazyCard {...user}/>
                </Suspense>
            </li>)
        )
    }

    const loadMore = () => {
        loadUsers(users ,next)
    }

    return (
        <section className="userList" id="list">
            <h1 className="userList__title">Working with GET request</h1>
            <ul className="userList__inner">
                {renderCards()}
            </ul>
           {isLoading && <Loader /> }
           {error && <p className="error">{error}</p> }
           {users.length !== total &&
            <button className="userList__loader" onClick={loadMore}>Show more</button>
            }
        </section>
    )
}