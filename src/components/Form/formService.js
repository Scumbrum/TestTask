const EMAIL_PATTERN = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

const checkExtension = (file) => {
    if(/.j[e]{0,1}pg$/.test(file.name)) {
        return true
    }
    return false
}

const checkResolution = (file, errors, setter) => {
    const image = new Image()
    image.onload = function() {
        if(this.width < 70 || this.height < 70) {
            errors.photo = "Photo should be minimun 70x70"
        }
        setter(errors)
    }
    image.src = window.URL.createObjectURL(file)
}

export const validation = (state, setter) => {
    const errors = {}
    if(!state.name) {
        errors.name = "Name required"
    } else if(!/\D{2,60}/.test(state.name)) {
        errors.name = "Invalid name"
    }

    if(!state.phone) {
        errors.phone = "Phone required"
    } else if(!/^[\+]{0,1}380([0-9]{9})$/.test(state.phone)) {
        errors.phone = "Phone invalid"
    }

    if(!state.email) {
        errors.email = "Email required"
    } else if(!EMAIL_PATTERN.test(state.email) || !/.{2,100}/.test(state.email)) {
        errors.email = "Invalid email"
    }

    if(state.position < 1) {
        errors.position = "Position required"
    }

    if(!state.photo.name) {
        errors.photo = "Photo is required"
        setter(errors)
        return
    }

    if(state.photo.size/(1024 * 1024) > 5) {
        errors.photo = "Photo is too large"
    } else if(!checkExtension(state.photo)){
        errors.photo = "Photo night be in jpg/jpeg format"
    }

    checkResolution(state.photo, errors, setter)
    
}

export const getToken = async () => {
    const respose = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
    const token = await respose.json()
    return token.token
}

export const sendRegisterRequest = async(state, token) => {
    const formData = new FormData()
    formData.append('position_id', state.position)
    formData.append('name', state.name)
    formData.append('email', state.email)
    formData.append('phone', state.phone)
    formData.append('photo', state.photo)
    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
        {
            method: 'POST',
            body: formData,
            headers: { 'Token': token}
        }
    )
    return await response.json()
}