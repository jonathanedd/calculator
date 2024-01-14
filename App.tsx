/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';

import {Switch, Text, SafeAreaView, StyleSheet} from 'react-native';

//SRC
import {ThemeContext} from './src/context/ThemeContext';
import {myColors} from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

function App(): JSX.Element {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: '#000'}]
        }>
        <Switch
          value={theme === 'light'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: myColors.light,
  },
});

export default App;
