import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';


export const loadImageFromGallery = async () => {
    const response = { status: false, image: null }
    const resultPermissions = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(resultPermissions.status !== 'granted'){
        Alert.alert('Debes de darle permiso para acceder a las imagenes del teléfono')
        return response
    }
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true
    })

    if(result.cancelled){
        return response
    }
    response.status = true
    response.image = result.uri
    
    return response
}