import React, { useEffect } from 'react';
import { Text, SafeAreaView, Image, View, ScrollView } from 'react-native';
import userDetailsStyle from '../styles/userDetailsStyle';
import UserDetailsBox from '../components/UserDetailsBox'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../features/user/userSlice';

export default function UserDetails({ route }) {

  const { userId } = route.params;

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.users[userId - 1]);

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [dispatch, userId]);

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
        <UserDetailsBox label="Name" value={userData?.name} />
        <UserDetailsBox label="Username" value={userData?.username} />
        <UserDetailsBox label="Email" value={userData?.email} />
        <UserDetailsBox label="Street" value={userData?.address?.street} />
        <UserDetailsBox label="City" value={userData?.address?.city} />
        <UserDetailsBox label="ZIP Code" value={userData?.address?.zipcode} />
        <UserDetailsBox label="Phone" value={userData?.phone} />
        <UserDetailsBox label="Website" value={userData?.website} />
      </ScrollView>
    </SafeAreaView>
  );
}
