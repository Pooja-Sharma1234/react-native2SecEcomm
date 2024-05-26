import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

const SearchScreen = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state.data);
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.data);
  const [searchList, setSearchList] = useState([]);
  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchList(newData);
    console.log(newData);
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={{marginTop: 20, fontSize: 25}}>Search Items</Text>
      </View>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 25,
          backgroundColor: '#fff',
          marginTop: 30,
          width: '90%',
          marginLeft: 20,
          height: 55,
          alignItems: 'center',

          flexDirection: 'row',
        }}>
        <AntDesign name="search1" size={30} style={{marginLeft: 10}} />
        <TextInput
          value={search}
          placeholder="Search text here..."
          onChangeText={txt => {
            setSearch(txt);
            filterData(txt);
          }}
          style={{fontSize: 20, marginRight: 50}}></TextInput>
        {search !== '' && (
          <TouchableOpacity
            onPress={() => {
              setSearch('');
            }}>
            <View style={{marginLeft: 30}}>
              <Entypo name="cross" size={30} />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={searchList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetails', {data: item});
              }}>
              <View key={item.id} style={styles.productItem}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 80, height: 80}}
                />
                <View>
                  <Text style={styles.title}>
                    {item.title.length > 20
                      ? item.title.substring(0, 20) + '...'
                      : item.title}
                  </Text>

                  <Text style={styles.price}>{'$' + item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};
export default SearchScreen;
const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#0786DAFD',
    alignItems: 'center',
  },
  btn: {
    borderWidth: 20,
  },
  productItem: {
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginLeft: 25,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginLeft: 25,
  },
});
//<View style={{marginTop: 80}}>
