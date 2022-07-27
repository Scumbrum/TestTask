import React, { useEffect, useState } from "react"
import { Form } from "../Form/Form.component.jsx"
import { UsersList } from "../UserList/UsersList.component.jsx" 

export const Content = () => {
    const [createdUser, setCreatedUser] = useState(0)
    const [previewImage, setPreviewImage] = useState([null, null])
    useEffect(() => {
        const images = [null, null]
        import("../../media/preview-large.webp")
        .then(r => {
            images[0] = r.default
            setPreviewImage([...images])
        })
        import("../../media/preview-small.webp")
        .then(r => {
            images[1] = r.default
            setPreviewImage([...images])
        })
    }, [])
    const srcSet = `
        ${previewImage[1]} 748w,
        ${previewImage[0]} 1024w,
    `
    return (
        <main>
            <section className="preview">
                {previewImage[1] && previewImage[0] &&
                    <img srcSet={srcSet} alt="main-image" className="preview__image"/>
                }
                <div className="preview__content">
                    <h1>Test assignment for front-end developer</h1>
                    <p className="preview__description">
                        What defines a good front-end developer is one that
                        has skilled knowledge of HTML, CSS, JS with a vast
                        understanding of User design thinking as they'll be
                        building web interfaces with accessibility in mind.
                        They should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </p>
                    <a href="#form" type="button" className="preview__button">
                        Sign up
                    </a>
                </div>
            </section>
            <UsersList createdUser={createdUser}/>
            <Form callback={setCreatedUser}/>
        </main>
    )
}