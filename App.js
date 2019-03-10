import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'
const Container = styled(View)`
    width: 100;
    height:100;
    border:1px solid #123;
    display:flex;
    justify-content:center;
    align-items:center;

`
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Container>
         <Text>My RN App</Text> 
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
