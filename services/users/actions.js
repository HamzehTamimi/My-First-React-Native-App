import instance from "../../instance";

export const getUsers = async () => {
    try {
        const users = await instance.get('/users')
        return users.data;
    }
    catch (error) { console.log(error) }
}

export const getUserDetails = async (userId) => {
    try {
        const users = await instance.get(`/users/${userId}`)
        return users.data;
    }
    catch (error) { console.log(error) }
}

export const setUsers = async (data) => {
    try {
        const users = await instance.post('/users', data)
        return users.data;
    }
    catch (error) { console.log(error) }
}