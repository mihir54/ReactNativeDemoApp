import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, ScrollView, SafeAreaView, SectionList, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItemElement, ImageElement } from 'react-native-elements';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../src/actions/ProductAction';



const HomeScreen = ({ item }) => {
    const theme = useTheme();

    const [data, setData] = useState({});

    const [product, setProduct] = useState('');
    const dispatch = useDispatch();
    const submitProduct = (product, image) => dispatch(addProduct(product, image))

    useEffect(() => {
        axios.get("http://www.omdbapi.com/?apikey=621a32e6&s=Batman")
            .then(function (response) {
                setData(response.data);
                console.warn(data)
            }).catch(function (error) {
                console.log(error);
            })
    }, []);

    if (!data) {
        return null
    }

    const ListItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.imgBackground}>
                    <Image
                        source={{
                            uri: item.uri,
                        }}
                        style={styles.itemPhoto1}
                        resizeMode="cover"
                    >
                    </Image>
                    <View style={styles.circle}>
                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <Icon
                                name="heart-outline"
                                color="#333"
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.addCircle}>
                        <TouchableOpacity
                            onPress={() => {
                                console.warn("title: " + item.text)
                                submitProduct(item.text, item.uri)
                                setProduct('')
                            }}
                        >
                            <Icon
                                name="add-circle-outline"
                                color="#FF5733"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.itemText}>{item.text}</Text>
                <Text style={styles.itemText}>{item.price}</Text>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <View style={styles.sliderContainer}>
                <Swiper autoplay loop height={200}>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assests/banners/banner1.jpg')}
                            resizeMode='cover'
                            style={styles.slideImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assests/banners/banner2.jpg')}
                            resizeMode='cover'
                            style={styles.slideImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assests/banners/banner3.jpg')}
                            resizeMode='cover'
                            style={styles.slideImage} />
                    </View>

                </Swiper>
            </View>


            <View style={styles.cardsWrapper} >
                <Text style={styles.textTitle}>Top Categories to Shop</Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assests/banners/women.jpg')}
                            resizeMode='cover'
                            style={styles.cardImg}
                        />
                        <Text style={styles.text}>Women</Text>
                    </View>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assests/banners/jackets.jpg')}
                            resizeMode='cover'
                            style={styles.cardImg}
                        />
                        <Text style={styles.text}>Jackets</Text>
                    </View>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assests/banners/hoodies.jpg')}
                            resizeMode='cover'
                            style={styles.cardImg}
                        />
                        <Text style={styles.text}>Hoodies</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assests/banners/men.jpg')}
                            resizeMode='cover'
                            style={styles.cardImg}
                        />
                        <Text style={styles.text}>Men</Text>
                    </View>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assests/banners/Topwear.jpg')}
                            resizeMode='cover'
                            style={styles.cardImg}
                        />
                        <Text style={styles.text}>Topwear</Text>
                    </View>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assests/banners/men_jeckets.jpg')}
                            resizeMode='cover'
                            style={styles.cardImg}
                        />
                        <Text style={styles.text}>Jackets</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bannerContainer}>
                <View style={styles.slide}>
                    <Image
                        source={{
                            uri: "https://i.pinimg.com/originals/8c/98/cb/8c98cba63fdb33e5e9fbe68dd0855995.jpg"
                        }}
                        resizeMode='contain'
                        style={styles.slideImage} />
                </View>
            </View>

            <View style={styles.container}>
                <StatusBar style="light" />
                <Text style={styles.sectionHeader}>Superhero Costume</Text>
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        horizontal
                        data={data.Search}
                        // renderItem={({ item }) => <ListItem item={item} />}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.item}>
                                    <View style={styles.imgBackground}>
                                        <Image
                                            source={{
                                                uri: item.Poster,
                                            }}
                                            style={styles.itemPhoto1}
                                            resizeMode="cover"
                                            onPress={() => {
                                                // this.props.add(item.Title)
                                            }}
                                        >
                                        </Image>
                                        <View style={styles.circle}>
                                            <TouchableOpacity
                                                onPress={() => {

                                                }}
                                            >
                                                <Icon
                                                    name="heart-outline"
                                                    color="#333"
                                                    size={25}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.addCircle}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    console.warn("title: " + item.Title)
                                                    submitProduct(item.Title, item.Poster)
                                                    setProduct('')
                                                }}
                                            >
                                                <Icon
                                                    name="add-circle-outline"
                                                    color="#FF5733"
                                                    size={30}                                                    
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={styles.itemText}>{item.Year}</Text>
                                    <Text style={styles.itemText} numberOfLines={1}>{item.Title}</Text>
                                </View>
                            )
                        }}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>

            <View style={styles.container}>
                <StatusBar style="light" />
                <SafeAreaView style={{ flex: 1 }}>
                    <SectionList
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        stickySectionHeadersEnabled={false}
                        sections={SECTIONS}
                        renderSectionHeader={({ section }) => (
                            <View>
                                <Text style={styles.sectionHeader}>{section.title}</Text>
                                <FlatList
                                    horizontal
                                    data={section.data}
                                    renderItem={({ item }) => <ListItem item={item} />}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        )}
                        renderItem={({ item, section }) => {
                            return null;
                            // return <ListItem item={item} />;
                        }}
                    />
                </SafeAreaView>
            </View>

            <View style={styles.bannerContainer}>
                <View style={styles.slide}>
                    <Image
                        source={{
                            uri: "https://social.fbbonline.in/assets/fbb_indias_fashion_hub_indias_fashion_hub_fashion_clothing_store_online_shopping_store_india_women_banner.jpg?version=2.2.11&subv=1"
                        }}
                        resizeMode='contain'
                        style={styles.slideImage} />
                </View>
            </View>

            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <SectionList
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        stickySectionHeadersEnabled={false}
                        sections={SECTIONS_2}
                        renderSectionHeader={({ section }) => (
                            <View>
                                <Text style={styles.sectionHeader}>{section.title}</Text>
                                <FlatList
                                    horizontal
                                    data={section.data}
                                    renderItem={({ item }) => <ListItem_2 item={item} />}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        )}
                        renderItem={({ item, section }) => {
                            return null;
                            // return <ListItem item={item} />;
                        }}
                    />
                </SafeAreaView>
            </View>
        </ScrollView>
    );
};




const ListItem_2 = ({ item }) => {
    return (
        <View style={styles.cardsWrapperList2}>
            <View>
                <Image
                    source={{
                        uri: item.uri,
                    }}
                    style={styles.itemPhoto2}
                    resizeMode="cover" />
            </View>
            <Text style={styles.itemText1} numberOfLines={1}>{item.text}</Text>
            <Text style={styles.itemText2}>{item.price}</Text>
        </View>
    );
};

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         products: state.productReducer.productList
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: (product) => dispatch(addProduct(product))
//     }
// }

// export default connect (mapStateToProps,mapDispatchToProps)(HomeScreen);

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    sliderContainer: {
        height: 200,
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 0
    },
    bannerContainer: {
        height: 200,
        width: '100%',
        padding: 5,
        alignSelf: 'center',
        borderRadius: 0,
    },
    wrapper: {

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 0
    },
    slideImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 0
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },
    cardsWrapper: {
        margin: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 0
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
    text: {
        margin: 10,
        fontFamily: 'Lato-Regular',
        color: 'black'
    },
    textTitle: {
        fontFamily: 'Lato-Regular',
        color: '#333',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
        marginStart: 10,
        fontSize: 20
    },
    sectionHeader: {
        fontFamily: 'Lato-Regular',
        fontWeight: '800',
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        marginStart: 10
    },
    item: {
        margin: 10,
    },
    itemPhoto: {
        width: 100,
        height: 150,
    },
    itemPhoto1: {
        width: 100,
        height: 150,
        alignItems: 'flex-end',
        margin: 30
    },
    itemPhoto2: {
        width: 130,
        height: 110,
        alignItems: 'flex-end',
        marginTop: 10
    },
    itemText: {
        width: 150,
        color: '#333',
        marginTop: 10,
        marginStart: 5,
        fontFamily: 'Lato-Regular',
    },
    itemText1: {
        color: '#000000',
        marginTop: 10,
        marginStart: 0,
        fontSize: 18,
        fontFamily: 'Lato-Regular',
    },
    itemText2: {
        color: '#808080',
        marginStart: 5,
        marginBottom: 15,
        fontFamily: 'Lato-Regular',
    },
    imgBackground: {
        borderColor: "#DCDCDC",
        borderWidth: 1,
        borderRadius: 5,

    },
    circle: {
        height: 35,
        width: 35,
        borderRadius: 50,
        position: 'absolute',
        top: 8,
        right: 8,
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addCircle: {
        height: 40,
        width: 40,
        borderRadius: 50,
        position: 'absolute',
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 8,
        right: 60,
        paddingLeft:2
    },
    cardsWrapperList2: {
        width: 150,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center'
    },
});


const SECTIONS = [
    {
        title: 'Trending Products',
        data: [
            {
                key: '1',
                text: 'Black jacket 1',
                price: '$500',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nP9M4iUgxTAze3Y_9c5pjaj5wWosmMxH3TOcdnyU8tw7ZdpzHwYQP39KU1t7rVXoysk&usqp=CAU',
            },
            {
                key: '2',
                text: 'Black jacket 2',
                price: '$2500',
                uri: 'https://assets.stickpng.com/images/5bb36103554c7f08176ec0e7.png',
            },

            {
                key: '3',
                text: 'Brown jacket 1',
                price: '$800',
                uri: 'data:image/jpeg;base64,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',
            },
            {
                key: '4',
                text: 'Brown jacket 1',
                price: '$500',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpWsHsTwYxHxKTkU3fX8mGmwhFqzNgb15QxYhBMzhXzUiEE_lTKc1Jl-MunpUeiZ2ofA&usqp=CAU',
            },
            {
                key: '5',
                text: 'Grey jacket 1',
                price: '$1000',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREBZA359CxkpJxcjGtnZTUfSgFsl-csaVSNopj_u-hyDkof9pv6iFdHkIUBKPyp-Rvu8&usqp=CAU',
            },
            {
                key: '6',
                text: 'Black jacket 1',
                price: '$500',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nP9M4iUgxTAze3Y_9c5pjaj5wWosmMxH3TOcdnyU8tw7ZdpzHwYQP39KU1t7rVXoysk&usqp=CAU',
            },
            {
                key: '7',
                text: 'Black jacket 2',
                price: '$2500',
                uri: 'https://assets.stickpng.com/images/5bb36103554c7f08176ec0e7.png',
            },

            {
                key: '8',
                text: 'Brown jacket 1',
                price: '$800',
                uri: 'data:image/jpeg;base64,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',
            },
            {
                key: '9',
                text: 'Brown jacket 1',
                price: '$500',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpWsHsTwYxHxKTkU3fX8mGmwhFqzNgb15QxYhBMzhXzUiEE_lTKc1Jl-MunpUeiZ2ofA&usqp=CAU',
            },
            {
                key: '10',
                text: 'Grey jacket 1',
                price: '$1000',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREBZA359CxkpJxcjGtnZTUfSgFsl-csaVSNopj_u-hyDkof9pv6iFdHkIUBKPyp-Rvu8&usqp=CAU',
            },
        ],
    },
];

const SECTIONS_2 = [
    {
        title: 'Shop Your Favourite Acessories',
        data: [
            {
                key: '1',
                text: 'Heels',
                price: 'Starting from $249',
                uri: 'https://ae01.alicdn.com/kf/HTB1EGRAObvpK1RjSZPiq6zmwXXaS/Sexy-High-Heels-Sandals-Ladies-Shoes-Summer-2021-Block-Heel-Platform-Gladiator-Sandals-Women-Party-Sandals.jpg',
            },
            {
                key: '2',
                text: 'Footwear',
                price: 'Starting from $230',
                uri: 'https://images.freekaamaal.com/post_images/1606824795.jpg',
            },

            {
                key: '3',
                text: 'Handbags',
                price: 'Starting from $800',
                uri: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/22491/201494/Crossbody-Bags-for-Women-2018-Canvas-Tote-Bag-women-s-Handbags-Ladies-Hand-Bag-Bolsos-Mujer__06373.1574827601.jpg?c=2?imbypass=on',
            },
            {
                key: '4',
                text: 'Fitness Equipments',
                price: 'Starting from $500',
                uri: 'https://c.shld.net/rpx/i/s/i/mp/10153191/prod_17488579724??hei=64&wid=64&qlt=50',
            },
            {
                key: '5',
                text: 'Watches',
                price: 'Starting from $1000',
                uri: 'https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/10/Masthead-Mobile@2x-3.jpg',
            },
        ],
    },
];