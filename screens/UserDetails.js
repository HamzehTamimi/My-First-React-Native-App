import React, { useEffect  } from 'react';
import { Text, SafeAreaView, Image, View, ScrollView } from 'react-native';
import userDetailsStyle from '../styles/userDetailsStyle';
import UserDetailsBox from '../components/UserDetailsBox'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../features/user/userSlice';

export default function UserDetails({ route }) {

  const { userId } = route.params;

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

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
        <UserDetailsBox label="Name" value={user.name}/>
        <UserDetailsBox label="Username" value={user.username}/>
        <UserDetailsBox label="Email" value={user.email}/>
        <UserDetailsBox label="Street" value={user.address?.street}/>
        <UserDetailsBox label="City" value={user.address?.city}/>
        <UserDetailsBox label="ZIP Code" value={user.address?.zipcode}/>
        <UserDetailsBox label="Phone" value={user.phone}/>
        <UserDetailsBox label="Website" value={user.website}/>        
      </ScrollView>
    </SafeAreaView>
  );
}
