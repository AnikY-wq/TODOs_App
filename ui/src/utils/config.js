export const api_config = {
    login: "http://localhost:5000/api/login",
}

export const url_config = {
    login: "http://localhost:5173/login",
    todo: "http://localhost:5173/to-do"
}

export const state_config = {
    login: {
        title: "Log In",
        fields: ["username", "password"]
    },
    register: {
        title: "Register",
        fields: ["username", "email", "password", "confirmPassword"]
    },
}