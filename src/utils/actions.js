import { db } from './firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, User} from 'firebase/auth' 
import 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'


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
    const navigation = useNavigation()
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        navigation.navigate('Begin')
    } catch (error) {
        result.error = console.log('This email is already registered')
    }
    return result
}

export const closeSesion = () => {
    return signOut(auth)
}

export const getCurrentUser = () => {
    return auth.currentUser
}

