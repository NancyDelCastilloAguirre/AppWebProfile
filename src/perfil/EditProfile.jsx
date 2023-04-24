
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  Text, View , Button, TouchableOpacity,ImageBackground,TextInput,StyleSheet,Alert, Pressable,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, {useState, useEffect} from 'react';
const Stack = createNativeStackNavigator();


export default function EditProfile({navigation}) {
    //const {params}=data.data.route;
    const [image, setImage] = useState(null);
    const [user,setUser]=useState({});
    const [posts, setPosts]=useState([]);

        {/*useEffect(()=>{
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
        }, [])*/}

    const PickImage =async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          aspect:[4,3],
          quality:1
        })
        console.log(result)
        if (!result.canceled) {
          setImage(result.uri)
        }
      }


    return (
        <View style={styles.container}>
        <View style={{ margin: 20,}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={PickImage}>
            <View style={{ height: 100, width: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center', overflow: "hidden",}}>
              <ImageBackground source={require('./profile.jpg')}  style={{height: 100, width: 100}} imageStyle={{borderRadius: 15}} resizeMode="center">
                {image && <ImageBackground source={{uri:image}} style={{width:100, height:100}} imageStyle={{borderRadius: 15}} />}</ImageBackground>
            </View>
          </TouchableOpacity>
          
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
           {/*{userData ? userData.fname : ''} {userData ? userData.lname : ''}*/}Nombre
          </Text>
          {/* <Text>{user.uid}</Text> */}
        </View>
        <View style={styles.userBtnWrapper}>
        <TouchableOpacity style={styles.userBtn} onPress={PickImage} >
            <Text style={styles.userBtnTxt}>Cambiar foto</Text>
        </TouchableOpacity></View>
        <View style={styles.action}>
          
          <TextInput
            placeholder="Nombres"
            placeholderTextColor="#666666"
            autoCorrect={false}
            //value={userData ? userData.fname : ''}
            //onChangeText={(txt) => setUserData({...userData, fname: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            placeholder="Apellidos"
            placeholderTextColor="#666666"
            //value={userData ? userData.lname : ''}
            //onChangeText={(txt) => setUserData({...userData, lname: txt})}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
            //value={userData ? userData.about : ''}
            //onChangeText={(txt) => setUserData({...userData, about: txt})}
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>
        
        <View style={styles.userBtnWrapper}>
        <TouchableOpacity style={styles.userBtn}  >
                <Text style={styles.userBtnTxt}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userBtn} onPress={() => navigation.goBack()} >
                <Text style={styles.userBtnTxt}>Cancelar</Text>
            </TouchableOpacity>
        </View>
        </View>       
      </View>      
      
    );
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#332E34',
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      width: '100%',
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#2e64e5',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      //<marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#fff',
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
      image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
      userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
      },
  });