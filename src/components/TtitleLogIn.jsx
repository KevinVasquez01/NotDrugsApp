import React from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons';


const TitleLogIn = () => {
    return (
        <View>
            <View style={styles.logoCannabis}>
                    <FontAwesomeIcon icon={ faCannabis } size={90} color='#7da453' />
            </View>
            <Text style={styles.title}>NotDrugs</Text>
            <Text style={styles.subTitle}>Log In to your account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#32404A',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 10
    },
    image: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 80
    },
    logoCannabis: {
        alignItems: 'center'
    }
})

export default TitleLogIn