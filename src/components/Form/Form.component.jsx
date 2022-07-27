import React, { useEffect, useState } from "react"
import successImage from "../../media/success-image.jpg";
import { useForm } from "../../hooks/useForm.js"
import { Loader } from "../Content/Loader.jsx"
import { getToken, sendRegisterRequest, validation } from "./formService.js"
import { Input } from "./Input.jsx"
import { Radio } from "./Radio.jsx"
import { Uploader } from "./Uploader.jsx"

export const Form = ({callback}) => {
    const [positions, setPositions] = useState([])
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({})

    const {
        changeHandler,
        errors,
        formValid,
        state
    } = useForm(
        {
            position: 0,
            name: "",
            email: "",
            phone: "",
            photo: {}
        },
        validation
    )

    useEffect(() => {
        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
        .then(r => r.json())
        .then(r => setPositions(r.positions))
    }, [])

    const renderRadio = () => {
        return positions.map(position => (
            <Radio
                {...position}
                typeName = "position"
                onChange = {
                    (value) =>
                    changeHandler(
                        (state, value) => ({...state, position: value}),
                        value
                    )
                }
                key={position.id}/>
        ))
    }

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const token = await getToken()
            const response = await sendRegisterRequest(state, token)
            setResponse(response)
            callback(response.user_id)
        } catch(e) {
            setResponse(e)
        } finally {
            setLoading(false)
        }
    }

    const {success, message} = response

    return (
        <section className="post-user" id="form" onSubmit={registerUser}>
            <h1 className="post-user__title">
                {message ? message : "Working with POST request"}
            </h1>
            {!success ?
            <form className="post-user__form">
                <Input 
                    onChange = {
                        (value) => 
                        changeHandler(
                            (state, value) => ({...state, name: value}),
                            value
                        )
                    }
                    value = {state.name}
                    placeholder = "Your name"
                    error={errors.name}
                />
                <Input 
                    onChange = {
                        (value) => 
                        changeHandler(
                            (state, value) => ({...state, email: value}),
                            value
                        )
                    }
                    value = {state.email}
                    placeholder = "Email"
                    error={errors.email}
                />
                <Input
                    onChange = {
                        (value) => 
                        changeHandler(
                            (state, value) => ({...state, phone: value}),
                            value
                        )
                    }
                    value = {state.phone}
                    placeholder = "Phone"
                    helper="+38 (XXX) XXX - XX - XX"
                    error={errors.phone}
                />
                <div className="radio-group">
                    <p className="radio-group__title">Select your position</p>
                    {renderRadio()}
                    <p className="field__helper error">{errors.position}</p>
                </div>
                <Uploader 
                    onChange = {
                        (value) => 
                        changeHandler(
                            (state, value) => ({...state, photo: value}),
                            value
                    )  
                    }
                    value = {state.photo}
                    error = {errors.photo}
                />
                <div className="post-user__controll">
                    {loading && <Loader />}
                    <button
                        type="submit"
                        disabled={!formValid}
                    >
                        Sign up
                    </button>
                </div>
            </form> :
            <img src={successImage} />}
        </section>
    )
}