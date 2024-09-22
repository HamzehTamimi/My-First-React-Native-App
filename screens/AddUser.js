import { SafeAreaView, TextInput, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import userInputStyle from "../styles/userInputStyle";
import { setUsers } from "../services/users/actions";
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from "react-redux";
import { addUser } from '../features/user/userSlice';

export default function AddUser({ navigation }) {
    const [inputs, setInputs] = useState({});
    const { users } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'New user has been added!'
        });
    }
    
    const handleOnChange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleOnChangeMulti = (text, input, parent) => {
        setInputs(prevState => ({
            ...prevState,
            [parent]: {
                ...prevState[parent],
                [input]: text
            }
        }));
    };

    const submitHandler = async () => {
        const newUser = { id: users.length + 1, ...inputs };
        dispatch(addUser(newUser))
        navigation.navigate('Home');
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
            <Text style={userInputStyle.label}>Address</Text>
            <TextInput
                style={userInputStyle.inputsTop}
                onChangeText={text => handleOnChangeMulti(text, 'street', 'address')}
                placeholder="Enter street"
                value={inputs.address?.street}
                selectionColor="black"
            />
            <TextInput
                style={userInputStyle.inputsMiddle}
                onChangeText={text => handleOnChangeMulti(text, 'city', 'address')}
                placeholder="Enter city"
                value={inputs.address?.city}
                selectionColor="black"
            />
            <TextInput
                style={userInputStyle.inputsBottom}
                onChangeText={text => handleOnChangeMulti(text, 'zipcode', 'address')}
                placeholder="Enter zipcode"
                value={inputs.address?.zipcode}
                selectionColor="black"
            />
            <Text style={userInputStyle.label}>Phone</Text>
            <TextInput
                style={userInputStyle.input}
                onChangeText={text => handleOnChange(text, 'phone')}
                placeholder="Enter phone"
                value={inputs.phone}
                selectionColor="black"
            />
            <Text style={userInputStyle.label}>Website</Text>
            <TextInput
                style={userInputStyle.input}
                onChangeText={text => handleOnChange(text, 'website')}
                placeholder="Enter website"
                value={inputs.website}
                selectionColor="black"
            />
            <TouchableOpacity style={userInputStyle.button} onPress={submitHandler} ><Text style={userInputStyle.text}>Submit</Text></TouchableOpacity>
        </SafeAreaView>

    )
}