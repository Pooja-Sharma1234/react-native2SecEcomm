import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FetchData} from '../services/FetchData';

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import {useNavigation} from '@react-navigation/native';
import {DataRepo} from '../services/DataRepo';
import {ActivityIndicator} from 'react-native';

const DataScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector(state => state.data);

  useEffect(() => {
    // dispatch(FetchData());
    dispatch(DataRepo.getData());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        {data.map(item => (
          <View>
            {/* <Text style={styles.productItem}>{item.title}</Text> */}
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
          </View>
        ))}
      </View>
    </ScrollView>

    // <FlatList
    //   data={data}
    //   renderItem={({item, index}) => {
    //     return (
    //       <View style={StyleSheet.productItem}>
    //         <Text>{data.title}</Text>
    //         <Image source={{uri: item.image}} />
    //       </View>
    //     );
    //   }}
    // />
  );
};

export default DataScreen;
const styles = StyleSheet.create({
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
