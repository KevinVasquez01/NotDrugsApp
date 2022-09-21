import { db } from './firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, User, signInWithEmailAndPassword} from 'firebase/auth' 
import 'firebase/firestore'



const auth = getAuth()


export const isUserLogged = () => {
    let isLogged = false
    onAuthStateChanged(auth, (user) => {
        if(user !== null){
            isLogged = true
        }
    })

    return isLogged
}

export const registerUser = async (email, password) => {
    const result = {statusResponse: true, error: null}
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        result.statusResponse = false
        result.error = 'This email is already registered'
        result.error = console.log('This email is already registered')
    }
    return result
}

export const loginWithEmailAndPassword = async (email, password) => {
    const result = {statusResponse: true, error: null}
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        result.statusResponse = false
        result.error = 'Invalid User or Password'
        result.error = console.log('Invalid User or Password')
    }
    return result
}

export const closeSesion = () => {
    return signOut(auth)
}

export const getCurrentUser = () => {
    return auth.currentUser
}

