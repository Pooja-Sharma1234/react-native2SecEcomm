import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/redux/store';
import {Route} from './src/routers/Router';

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
