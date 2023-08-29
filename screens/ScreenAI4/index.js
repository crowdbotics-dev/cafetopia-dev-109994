import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const DetailsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Coffee Shop</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.name}>Latte</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, sapien vel bibendum bibendum, velit sapien bibendum
          sapien, vel bibendum sapien sapien vel bibendum bibendum, velit
          sapien bibendum sapien, vel bibendum sapien.
        </Text>
        <Text style={styles.price}>$4.99</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#D54C44',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    marginBottom: 20
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D54C44'
  }
});
export default DetailsScreen;