import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Acceuil from '../Vues/Acceuil';
import Scan from '../Vues/Scan';
import Geolocalistaion from '../Vues/Geolocalistaion';
import Materiau from '../Vues/Materiau';


const _StackNavigator = createStackNavigator({
    Acceuil: { screen: Acceuil},
    Scan: { screen: Scan},
    Materiau: { screen: Materiau},
    Geolocalistaion: { screen: Geolocalistaion}
  })

  export default createAppContainer(_StackNavigator)