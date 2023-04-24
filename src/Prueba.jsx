import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Item({ item }) {
  const navigation = useNavigation();
  const [messages, setMessages] = useState({});

 /* //👇🏻 Retrieves the last message in the array from the item prop
  useLayoutEffect(() => {
    setMessages(item.messages[item.messages.length - 1]);
  }, []);

  ///👇🏻 Navigates to the Messaging screen
  const handleNavigation = () => {
    navigation.navigate("Chat", {
        id: item.id,
        name: item.email,
    });
  };*/

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card} >
      <TouchableOpacity onPress={() => navigation.navigate('Chat', {userName: item.email})}>
        <View style={styles.userinfo}>
          <View style={styles.userimgWrapper}>
            <Image source={{uri:item.photo}}  style={styles.userimg} /></View>
              <View style={styles.textSection}>
                <View style={styles.userinfotext}>
                  <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.messageText}>{item.position}</Text>
                  </View>
                </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default class Prueba extends React.Component {
  state = {
    data:[
        {
            "name": "Miyah Myles",
            "email": "miyah.myles@gmail.com",
            "position": "Hellothre",
            "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        },
        {
            "name": "June Cha",
            "email": "june.cha@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
            "name": "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
            "name": "Renee Sims",
            "email": "renee.sims@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
        },
        {
            "name": "Jonathan Nu\u00f1ez",
            "email": "jonathan.nu\u00f1ez@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
        },
        {
            "name": "Sasha Ho",
            "email": "sasha.ho@gmail.com",
            "position": "Administrative Assistant",
            "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Abdullah Hadley",
            "email": "abdullah.hadley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
        },
        
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    alignItems: 'center',
    backgroundColor: '#332E34',

    },
    card:{
      backgroundColor: '#dddddd',
      width: '100%',
      marginBottom: 20,
      borderRadius: 30,
    },
    userinfo:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    userimgWrapper:{
        paddingTop: 15,
        paddingBottom:15,
    },
    userimg:{
        width:50,
        height:50,
        borderRadius:25
    },
    textSection:{
        flexDirection: 'column',
        justifyContent:'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft:10,
        width:300,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc',
    },
    userinfotext:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:5,
    },
    userName:{
        fontSize: 14,
        fontWeight: 'bold',
        
    },
    postTime:{
        fontSize: 12,
        color: '#666',
    },
    messageText:{
        fontSize: 14,
        color: '#333333',
    }
});