import React, { useState } from "react"
import { Form } from "../Form/Form.component.jsx"
import { UsersList } from "../UserList/UsersList.component.jsx" 

export const Content = () => {
    const [createdUser, setCreatedUser] = useState(0)
    return (
        <>
            <UsersList createdUser={createdUser}/>
            <Form callback={setCreatedUser}/>
        </>
    )
}