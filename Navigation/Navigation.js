import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Acceuil from '../Vues/Acceuil';
import Scan from '../Vues/Scan';
import Geolocalistaion from '../Vues/Geolocalistaion';


const _StackNavigator = createStackNavigator({
    Acceuil: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
      screen: Acceuil
    },
    Scan: { screen: Scan},
    Geolocalistaion: { screen: Geolocalistaion}
  })

  export default createAppContainer(_StackNavigator)