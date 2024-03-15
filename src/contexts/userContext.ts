import Cookies from 'js-cookie'
import { create } from "zustand";

export interface UserProps {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
}

interface ActionsProps {
    setUser: (user: UserProps | null) => void
}

interface AuthProps {
    state: {
        user: UserProps | null,
    },
    actions: ActionsProps
}

const cookieUser = Cookies.get("user") as string
const storeUser = cookieUser !== undefined ? JSON.parse(cookieUser) : null
console.log(storeUser)

export const useUser = create<AuthProps>((set) => ({
    state: {
        user: storeUser,
    },
    actions: {
        setUser: (user) => set(state => ({state: { user }}))
    }
}))