import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/Deck';
import { Card, Button } from 'react-native-elements';

const BORDER_RADIUS = 3;

const DATA = [
    {
        id: 1,
        text: 'Card #1',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
    },
    {
        id: 2,
        text: 'Card #2',
        uri:
            'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
    },
    {
        id: 3,
        text: 'Card #3',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
    },
    {
        id: 4,
        text: 'Card #4',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
    },
    {
        id: 5,
        text: 'Card #5',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
    },
    {
        id: 6,
        text: 'Card #6',
        uri:
            'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
    },
    {
        id: 7,
        text: 'Card #7',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
    },
    {
        id: 8,
        text: 'Card #8',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
    },
];

export default class App extends React.Component {
    renderCard = item => {
        return (
            <Card
                key={item.id}
                image={{ uri: item.uri }}
                containerStyle={styles.cardContainer}
                wrapperStyle={styles.cardWrapper}
            >
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.text}</Text>
                    <Text style={{ marginBottom: 10 }}>
                        I can customize the Card further.
                    </Text>
                </View>
                <View style={styles.cardButtonContainer}>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor="#03a9f4"
                        title="View Now!"
                        containerViewStyle={styles.buttonViewContainer}
                        buttonStyle={styles.button}
                    />
                </View>
            </Card>
        );
    };
    renderNoMoreCards = () => {
        return (
            <Card
                containerStyle={styles.cardContainer}
                wrapperStyle={styles.cardWrapper}
            >
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>All Done!</Text>
                    <Text style={{ marginBottom: 10 }}>
                        There's no more content here!
                    </Text>
                </View>
                <View style={styles.cardButtonContainer}>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor="#03a9f4"
                        title="Get more!"
                        containerViewStyle={styles.buttonViewContainer}
                        buttonStyle={styles.button}
                    />
                </View>
            </Card>
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'red',
    },
    cardContainer: {
        elevation: 5,
        borderWidth: 0,
        padding: 0,
        marginBottom: 10,
    },
    cardWrapper: {
        padding: 0,
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardButtonContainer: {
        flexDirection: 'row',
        padding: 0,
    },
    buttonViewContainer: {
        flex: 1,
        marginLeft: 0,
        marginRight: 0,
    },
    button: {
        backgroundColor: 'grey',
    },
});
