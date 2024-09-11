import instance from "../auth/instance"

export const create_contacting = async (text: string, user_id: number) => {
    const res = await instance.post("api/contactings/create", {
        text,
        user_id
    })

    return res.data
}

export const get_recents = async (user_id: number) => {
    const res = await instance.post(`/api/contactings/`, {
        user_id: user_id
    })

    return res.data
}