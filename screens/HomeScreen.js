import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import containerStyle from '../styles/containerStyle'
import cardStyle from '../styles/cardStyle'
import searchBarStyle from '../styles/searchBarStyle';
import AddButton from '../components/AddButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from '../features/user/userSlice';
import Toast from 'react-native-toast-message';

export default function HomeScreen({ route, navigation }) {

  const { users } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const showDeleteSuccessToast = (item) => {
    Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `User ${item.name} has been been deleted!`
    });
``}

  const handleDelete = (item, id) => {
    dispatch(deleteUser(id));
    showDeleteSuccessToast(item)
  };

  const renderItem = ({ item }) => {
    return (
      <View style={cardStyle.card}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: `https://avatar.iran.liara.run/public/${item.id}` }}></Image>
        <Text style={{ fontSize: 25, textAlign: "center", paddingBottom: 15 }}>{item.name}</Text>
        <View style={cardStyle.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(`UserDetails`, {
            userId: `${item.id}`,
            userData: item
          })}
          style={cardStyle.button}
        >
          <Text style={cardStyle.buttonText}>
            More Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item, item.id)}
          style={cardStyle.button}
        >
          <Text style={cardStyle.buttonText}>
            Delete User
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = users?.filter(item =>
    item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={containerStyle.container}>
      <TextInput
        style={searchBarStyle.search}
        placeholder="Search User"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        selectionColor="black"
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <AddButton onPress={() => navigation.navigate('AddUser')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
