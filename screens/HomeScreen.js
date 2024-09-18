import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import containerStyle from '../styles/containerStyle'
import cardStyle from '../styles/cardStyle'
import { getUsers } from '../services/users/actions';
import searchBarStyle from '../styles/searchBarStyle';
import AddButton from '../components/AddButton';

export default function HomeScreen({ route, navigation }) {

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers().then((users) => { setUser(users) })
  }, []);

  useEffect(() => {
    if (route.params?.updatedUsers) {
      setUser(route.params.updatedUsers);
    }
  }, [route.params?.updatedUsers]);


  const renderItem = ({ item }) => {
    return (
      <View style={cardStyle.card}>
        <Text style={{ fontSize: 35, textAlign: "center", paddingBottom: 5 }}>{item.id}</Text>   
        <Text style={{ fontSize: 25, textAlign: "center", paddingBottom: 15 }}>{item.name}</Text>     
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
      </View>
    );
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = user?.filter(item =>
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
      <AddButton onPress={() => navigation.navigate('AddUser', { users: user })} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
