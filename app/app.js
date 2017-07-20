/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, Button } from 'native-base';
import literallyAnythingWeWant from 'minutes-seconds-milliseconds';

export default class Stopwatch extends Component {
  constructor(props){
    super(props);

    this.state = { isRunning: false }

    this.startStop = this.startStop.bind(this)
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.content}>
              {literallyAnythingWeWant(this.state.timeElapsed)}
            </Text>
            <Button style={{alignSelf: 'center'}} 
                    onPress={this.startStop}>
              <Text style={styles.button}>{this.state.isRunning ? 'Stop' : 'Start'}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  startStop() {
    if (this.state.isRunning){
      clearInterval(this.interval)
      this.setState({isRunning: false})
      return
    }

    this.setState({startTime: new Date(), isRunning: true})

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime
      })
    }, 30)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
