import { db } from './firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, User, signInWithEmailAndPassword, updateProfile} from 'firebase/auth' 
import 'firebase/firestore'
import { getStorage, ref, getDownloadURL, uploadBytes} from 'firebase/storage'

const auth = getAuth()
const storage = getStorage()

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

export const uploadImage = async (image, path, name) => {
    const result = { statusResponse: false, error: null, url: null }

    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function (e) {
            console.log(e)
            reject(new TypeError("Solicitud de red fallida"))
        }
        xhr.responseType = "blob"
        xhr.open("GET", image, true)
        xhr.send(null)
    })

    const ref2 = ref(storage, `${path}/${name}`)
    const resultBytes = await uploadBytes(ref2, blob)

    blob.close()
    //const blob = fileToBlob(image)

    try {
       // await ref2.put(blob)
        const url = await getDownloadURL(ref2)
        result.statusResponse = true
        result.url = url
    } catch (error) {
        result.error = error
    }
    return result 

}

export const updateProfiles = async (data) => {
    const result = { statusResponse: true, error: null }
    try {
        await updateProfile(auth.currentUser, data)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result
}

