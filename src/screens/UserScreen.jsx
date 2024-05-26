import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const UserScreen = () => {
  const username = useSelector(state => state.auth);
  console.log(username);
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 20,
          alignSelf: 'center',
        }}
      />
      <View style={{marginTop: 100, justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{marginLeft: 20, fontSize: 20}}>Name </Text>
          <Text style={{fontSize: 20}}>:</Text>
          <View
            style={{
              borderWidth: 1,
              height: 40,
              width: '70%',
              borderRadius: 20,
              marginRight: 20,
            }}>
            <Text style={{marginLeft: 20, fontSize: 20}}>
              {JSON.stringify(username.username)}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{marginLeft: 20, fontSize: 20}}>Email </Text>
          <Text style={{fontSize: 20}}>:</Text>
          <View
            style={{
              borderWidth: 1,
              height: 40,
              width: '70%',
              borderRadius: 20,
              marginRight: 20,
            }}>
            <Text style={{marginLeft: 20, fontSize: 20}}>
              {JSON.stringify(username.email)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default UserScreen;
