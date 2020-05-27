import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Map from './pages/map';
import Profile from './pages/profile'

const Routes = createAppContainer(
    createStackNavigator({
        Map: {
            screen: Map,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: null,
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#7d40e7'
            }
        }
    })
);

export default Routes;