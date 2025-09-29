import router from '../router'

import { firebaseapp } from './usefirebase'
import { getAuth, singInWithEmailAndPassword, signout } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseapp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {

    const login = async (username, password) => {
        await singInWithEmailAndPassword(auth, username, password)
        return isAuthenticated.value
    }

    const logout = async () => {
        await signOut(auth)
        router.push({name: 'Home'})
    }

    return {isAuthenticated, user, login, logout}

}