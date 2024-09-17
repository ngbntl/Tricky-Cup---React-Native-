
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import InGame from '../screens/InGame';
import ResultLose from '../screens/ResultLose';
import ResultWin from '../screens/ResultWin';

const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{headerShown:false}}
                   />
                    <Stack.Screen
                    name='InGame'
                    component={InGame}
                    options={{headerShown:false}}

                   />
                    <Stack.Screen
                    name='ResultWin'
                    component={ResultWin}
                    options={{headerShown:false}}

                   />
                    <Stack.Screen
                    name='ResultLose'
                    component={ResultLose}
                    options={{headerShown:false}}

                   />
                   
            </Stack.Navigator>
       
    )
}

export default AppNavigator