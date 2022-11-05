import { useState,useContext} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Button, TextInput, } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export function Intro({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                multiline={true}
                // numberOfLines={}
                value={email}
                onChangeText={text => setEmail + email}
            />
            <TextInput
                label="Passsord"
                onChangeText={text => setpassword(text)}
                style={{width:399,}}
            />
              <Text>Forgot your password?</Text>
               <Button>Sign in</Button>
        

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#372948',
    },
});
