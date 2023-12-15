

const initialState = {
    name: "",
    email: "",
    token: ""
}

export const AuthReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }

}