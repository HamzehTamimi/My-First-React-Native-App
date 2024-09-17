import { SafeAreaView, TextInput, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import userInputStyle from "../styles/userInputStyle";
import { setUsers } from "../services/users/actions";
import Toast from 'react-native-toast-message';

export default function AddUser({ route, navigation }) {

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'New user has been added!'
        });
      }

    const [inputs, setInputs] = useState({});
    const { users } = route.params;

    const handleOnChange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const submitHandler = async () => {
        const newUser = { id: users.length + 1, ...inputs };
        const updatedUsers = [...users, newUser];
        await setUsers(updatedUsers);
        navigation.navigate('Home', { updatedUsers });
        showToast()
    };

    return (
        <SafeAreaView style={userInputStyle.container}>
            <Text style={userInputStyle.label}>Name</Text>
            <TextInput
                style={userInputStyle.input}
                onChangeText={text => handleOnChange(text, 'name')}
                placeholder="Enter name"
                value={inputs.name}
                selectionColor="black"
            />
            <Text style={userInputStyle.label}>Username</Text>
            <TextInput
                style={userInputStyle.input}
                onChangeText={text => handleOnChange(text, 'username')}
                placeholder="Enter username"
                value={inputs.username}
                selectionColor="black"
            />
            <Text style={userInputStyle.label}>Email</Text>
            <TextInput
                style={userInputStyle.input}
                onChangeText={text => handleOnChange(text, 'email')}
                placeholder="Enter email"
                value={inputs.email}
                keyboardType="email-address"
                selectionColor="black"
            />
            <Text style={userInputStyle.label}>Street</Text>
            <TextInput
                style={userInputStyle.input}
                onChangeText={text => handleOnChange(text, 'address.street')}
                placeholder="Enter street"
                value={inputs.address.street}
                selectionColor="black"
            />
            <TouchableOpacity style={userInputStyle.button} onPress={submitHandler} ><Text style={userInputStyle.text}>Submit</Text></TouchableOpacity>
        </SafeAreaView>

    )
}