import { Image,SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, VirtualizedList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState, useEffect, useContext} from 'react';
import PostCard from './PostCard';

const Stack = createNativeStackNavigator();



export default function Profile({ navigation }) {
    const [loading, setLoading] = useState(true);
    /*useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const res=await axios.get(`http://192.168.0.197:9000/api/users?username=${params.data.username}`);
                setUser(res.data);
                console.log("Consulta de profile")
                
            } catch (error) {
                console.log("Error jajas");
                console.log(error);
            }
            };
        fetchUser();
    }, [])*/
    useEffect(() => {
        //getUser();
        //fetchPosts();
        navigation.addListener("focus", () => setLoading(!loading));
      }, [navigation, loading]);

  return (
    <SafeAreaView style={styles.container}>
        <View>
        <ScrollView>
            <View style={{padding:10,width:'100%', backgroundColor:'#443E46', height:130, borderRadius:5,}}>
            </View>
            <View style={{alignItems:'center'}}>
                <Image source={require('./profile.jpg')} resizeMode="center" style={{width:140, height:140, borderRadius:100, marginTop:-70}}></Image>
                <Text style={{fontSize:25, color:'white', fontWeight:'bold',padding:7 }}>Nombre Apellidos</Text>
                <Text style={{fontSize:16, color:'grey'}}>4 años, mujer</Text>
            </View>
            <View style={{alignSelf:'center', flexDirection:'row', justifyContent: 'center', width:'90%', }}>
                <Text style={{fontWeight:'bold', fontSize:17,color:'grey'}}>I´m a dog</Text>  
            </View>
            <View style={{alignSelf:'center', flexDirection:'row', justifyContent: 'center', width:'90%', padding:9,}}>
            <Text style={{ fontSize:15,color:'grey'}}>4 Followers | 3 Following</Text>
            </View>

            <View style={styles.userBtnWrapper}>
          {/*{route.params ? (*/}
            <>
              <TouchableOpacity style={styles.userBtn}
               onPress={() => {
                    navigation.navigate('Prueba');}}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow</Text>
              </TouchableOpacity>
            </>
          {/*}) : (*/}
            <>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <Text style={styles.userBtnTxt}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
            </>
            {/*)}*/}
        </View>
            <View>
                <ScrollView>
                <PostCard/>
                </ScrollView>
            </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: "#332E34",
        
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
      },
      userBtn: {
        borderColor: '#D0CDCD',
        borderWidth: 2,
        borderRadius: 17,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
      },
      userBtnTxt: {
        color: '#D0CDCD',
      },
  });