import instance from "./instance"


export const registration = async (email: string, password: string, firstname: string, surname: string) => {
    const res = await instance.post("/api/auth/registration", {
        email,
        password,
        firstname,
        surname
    })

    return res.data
}

export const login = async (email: string, password: string) => {
    const res = await instance.post("/api/auth/login", {
        email,
        password
    })

    return res.data
}


export const logout = () => {
    localStorage.clear()
}