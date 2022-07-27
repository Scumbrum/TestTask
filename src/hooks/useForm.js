import { isValidElement, useState } from "react"

const checkErrors = (errors) => {
    for(let error in errors) {
        if(error) {
            return true
        }
    }
    return false
}

export const useForm = (initialState, validation) => {
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isValid, setValid] = useState(false)
    const callback = (errors) => {
        setErrors(errors)
        setValid(!checkErrors(errors))
    }
    const changeHandler = (reducer, value) => {
        const newState = reducer(state, value)
        validation(newState, callback)
        setState(newState)
    }
    return {state, changeHandler, errors, formValid: isValid}
}