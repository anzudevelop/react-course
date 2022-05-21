import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '39c617a6-5849-4d40-97e0-e73797f63d9f',
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 30) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUnfollow(isFollowed, userId) {
        if (!isFollowed) {
            return instance.post(`follow/${userId}`)
        }
        else {
            return instance.delete(`follow/${userId}`)
        }
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
