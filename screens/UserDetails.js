import React, { } from 'react';
import { Text, SafeAreaView, Image } from 'react-native';
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
      <Image style={userDetailsStyle.image} source={{ uri: `https://avatar.iran.liara.run/public/${userId}` }}></Image>
      <Text style={userDetailsStyle.header}>{userId}</Text>
      <Text style={userDetailsStyle.header}>{userData.name}</Text>
      <Text style={userDetailsStyle.header}>{userData.address.city}</Text>
    </SafeAreaView>
  );
}
