import React from 'react';
import { View, Button, StyleSheet, FlatList , SafeAreaView, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const messages = [
        {
          id: '1',
          userName: 'Jenny Doe',
          userImg: require('./Bingo.png'),
          messageTime: '4 mins ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '2',
          userName: 'John Doe',
          userImg: require('./Bingo.png'),
          messageTime: '2 hours ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '3',
          userName: 'Ken William',
          userImg: require('./Bingo.png'),
          messageTime: '1 hours ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '4',
          userName: 'Selina Paul',
          userImg: require('./Bingo.png'),
          messageTime: '1 day ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
          id: '5',
          userName: 'Christy Alex',
          userImg: require('./Bingo.png'),
          messageTime: '2 days ago',
          messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
      ];

const Messages = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
              <View style={styles.card} onPress={() => navigation.navigate('Chat', {userName: item.email})}>
                <View style={styles.userinfo}>
                  <View style={styles.userimgWrapper} >
                    <View style={styles.userimg} source={item.userImg} />
                  </View>
                  <View style={styles.textSection}>
                    <View style={styles.userinfotext}>
                      <View style={styles.userName}>{item.userName}</View>
                      <View style={styles.postTime}>{item.messageTime}</View>
                    </View >
                    <View style={styles.messageText}>{item.messageText}</View>
                  </View>
                </View>
              </View>
            )}
            />
        </SafeAreaView  >
    );

};


const styles = StyleSheet.create({
    container: {
    flex: 1, 
    alignItems: 'center', 
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    },
    card:{
        width: '100%',
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
        fontSize: 144,
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

  export default Messages;