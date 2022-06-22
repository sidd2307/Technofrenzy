import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const userStore = (set) => ({
    userInfo: {},

    addUser: (user) => {
        set((state) => ({
            userInfo: user
        }))
    },

    removeUser: () => {
        set((state) => ({
            userInfo: {}
        }))
    }
})

const useUserStore = create(
    devtools(
        persist(userStore, {
            name: 'userInfo'
        })
    )
)

export default useUserStore