import React, { } from 'react';
import { Text, SafeAreaView, Image, View, ScrollView } from 'react-native';
import userDetailsStyle from '../styles/userDetailsStyle';

export default function UserDetails({ route }) {

  const { userId, userData } = route.params;

  /*
  useEffect(() => {
    getUserDetails(userId).then((userDetails) => {
      setUser(userDetails);
    });
  }, [userId]);
  */

  return (
    <SafeAreaView style={userDetailsStyle.container}>
      <ScrollView>
        <Image style={userDetailsStyle.image} source={{ uri: `https://avatar.iran.liara.run/public/${userId}` }}></Image>
        <Text style={userDetailsStyle.label}>Name</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.name}</Text>
        </View>
        <Text style={userDetailsStyle.label}>Username</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.username}</Text>
        </View>
        <Text style={userDetailsStyle.label}>Email</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.email}</Text>
        </View>
        <Text style={userDetailsStyle.label}>Street</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.address.street}</Text>
        </View>
        <Text style={userDetailsStyle.label}>City</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.address.city}</Text>
        </View>
        <Text style={userDetailsStyle.label}>ZIP Code</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.address.zipcode}</Text>
        </View>
        <Text style={userDetailsStyle.label}>Phone</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.phone}</Text>
        </View>
        <Text style={userDetailsStyle.label}>Website</Text>
        <View style={userDetailsStyle.card}>
          <Text style={userDetailsStyle.text}>{userData.website}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
