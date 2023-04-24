import React, {useContext, useEffect, useState} from 'react';
import { Image,SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Pressable } from 'react-native';

export default function PostCard(){

  return (
    <SafeAreaView>
    <View style={styles.container}>
        
        <View /*Card*/ style={styles.card}>
            <View style={styles.userinfo}>
                <View >
                    <Image source={require('./profile.jpg')} alt='Perfil' style={styles.userimg}></Image>
                </View>
                <View style={styles.infotext}>
                    <TouchableOpacity>
                        <View style={styles.username}>
                            <Text>Nombre Apellidos</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.posttime}><Text style={{color:'grey'}} >Subido a las: </Text></View>
                </View>
            </View>
            <View style={styles.posttext}><Text>Descripción del Post</Text></View>
            
            <View>
                <Image source={require('./fondo2.png')} alt='Imagen'style={styles.progressiveimg} resizeMode='center'></Image>
            </View>
            
            <View style={styles.divider}></View>

            <View style={styles.interactionwrapper}>
                <View style={styles.interaction}>
                    <Button title='🗑️' size={25} color='transparent'></Button>
                </View>
                <View style={styles.interaction}>
                    <Button title='🔗' size={25} color='transparent'></Button>
                </View>
            </View>

        </View>


    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#332E34',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    card:{
    backgroundColor: '#dddddd',
    width: '100%',
    marginBottom: 20,
    borderRadius: 30,
    },
    userinfo:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15,
    },
    userimg:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    infotext:{
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 10,
    },
    username:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    posttime:{
        fontSize: 10,
        color: 'grey',
    },
    posttext:{
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
    },
    progressiveimg :{
        width: '100%',
        height: 150,
        /* margin-top: 15px; */
    },
    divider:{
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '92%',
        alignSelf: 'center',
        marginTop: 15,
    },
    interactionwrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor:  'transparent',
    },
    interaction:{
        flexDirection: 'row',
        borderRadius: 20,
        padding: 2 ,
        backgroundColor:  'transparent',
    }

  });



