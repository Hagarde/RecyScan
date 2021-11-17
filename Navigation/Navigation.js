import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Acceuil from '../Vues/Acceuil';
import Scan from '../Vues/Scan';
import Geolocalisation from '../Vues/Geolocalisation';
import Materiau from '../Vues/Materiau';


const _StackNavigator = createStackNavigator({
    Acceuil: { screen: Acceuil},
    Scan: { screen: Scan},
    Geolocalisation: { screen: Geolocalisation},
    Materiau: { screen: Materiau},
  })

  export default createAppContainer(_StackNavigator)