import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
const coffeeData = [{
  id: 1,
  name: 'Ethiopian Yirgacheffe',
  description: 'A bright and fruity coffee with notes of blueberry and citrus.',
  price: '$15.99',
  image: 'https://i.imgur.com/YJJabkk.jpg'
}, {
  id: 2,
  name: 'Colombian Supremo',
  description: 'A rich and full-bodied coffee with notes of chocolate and caramel.',
  price: '$12.99',
  image: 'https://i.imgur.com/YJJabkk.jpg'
}, {
  id: 3,
  name: 'Costa Rican Tarrazu',
  description: 'A smooth and balanced coffee with notes of honey and almond.',
  price: '$14.99',
  image: 'https://i.imgur.com/YJJabkk.jpg'
}];

const MainScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Specialty Coffee</Text>
      </View>
      <View style={styles.content}>
        {coffeeData.map(coffee => <View key={coffee.id} style={styles.coffeeContainer}>
            <Image source={{
          uri: coffee.image
        }} style={styles.coffeeImage} />
            <View style={styles.coffeeDetails}>
              <Text style={styles.coffeeName}>{coffee.name}</Text>
              <Text style={styles.coffeeDescription}>{coffee.description}</Text>
              <Text style={styles.coffeePrice}>{coffee.price}</Text>
            </View>
          </View>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEDE8'
  },
  header: {
    backgroundColor: '#D54C44',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headerText: {
    color: "#efefef",
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: "Montserrat",
    textAlign: "center"
  },
  content: {
    flex: 1,
    padding: 10
  },
  coffeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  coffeeImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  },
  coffeeDetails: {
    flex: 1
  },
  coffeeName: {
    color: '#131313',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  coffeeDescription: {
    color: '#131313',
    fontSize: 14,
    marginBottom: 5
  },
  coffeePrice: {
    color: '#D54C44',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default MainScreen;
