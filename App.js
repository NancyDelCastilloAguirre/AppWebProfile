
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/Profile';
import EditProfile from './src/EditProfile';
import PostCard from './src/PostCard';
import Messages from './src/Messages';
import Chat from './src/Chat';
import Prueba from './src/Prueba';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Profile" 
          component={Profile}
        />
        <Stack.Screen 
        name="EditProfile" 
        component={EditProfile} />
        
        <Stack.Screen 
        name="PostCard" 
        component={PostCard} />

        <Stack.Screen 
        name="Messages" 
        component={Messages} />
        
        <Stack.Screen 
        name="Prueba" 
        component={Prueba}
        //options={({route})=>({
        //  title: route.params.email,headerBackTitlevisible:false
        //})} 
        />
        <Stack.Screen
        name="Chat" 
        component={Chat} 
        /> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
