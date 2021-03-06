import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import FormButton from '../components/FormButtom';
import { deleteProduct } from '../src/actions/ProductAction';

const MyBagScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const deleteCartProduct = (key) => dispatch(deleteProduct(key));
    const products = useSelector(state => state.product_Reducer.productList);
    // const navigation = useNavigation();

    const renderItem = ({ item }) => (
        
        <View style={styles.item}>
            <Image
                source={{
                    uri: item.image,
                }}
                resizeMode='cover'
                style={styles.cardImg}
            />
            <Text style={styles.listText} numberOfLines={2}>{item.name}</Text>
            <TouchableOpacity
                onPress={() => {
                    deleteCartProduct(item.key)
                }}
            >
                <Icon
                    name="trash-outline"
                    color="#333"
                    size={25}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.key.toString()}
            />
            <FormButton
                buttonTitle="Checkout"
                onPress={() => { navigation.navigate('checkout') }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    listContainer: {
        backgroundColor: '#212121',
        padding: 16
    },
    listText: {
        fontSize: 15,
        width: "50%",
        margin: 10,
        alignSelf: 'center'
    },
    container: {
        flex:1,
        marginTop: 10,
        padding: 2,
        marginBottom: 10,
    },
    item: {
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    cardImg: {
        height: 100,
        width: '30%',
        alignSelf: 'center',
        borderRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
});

export default MyBagScreen;