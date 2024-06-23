/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { defaultStyles } from '../utilities/styles';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={defaultStyles.sectionContainer}>
      <Text
        style={[
          defaultStyles.sectionTitle,
          {
            color: Colors.white,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

function LandingPage({navigation}:any): JSX.Element {
  const ref:any = React.useRef(null);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        hidden
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={defaultStyles.scrollViewStyle}>
        <View
          style={{
            backgroundColor: Colors.darker,
          }}>
          <View key="contentHolder" style={defaultStyles.contentHolder}>
            <Section title="Rose's Cook Book" />
            <TouchableHighlight style={defaultStyles.button} onPress={() => navigation.navigate('RecipeSearch')} underlayColor='#FFC0CB'>
              <Text style={{color: '#DDDDDD', fontSize: 18}}>Find a New Recipe</Text>
            </TouchableHighlight>
            <TouchableHighlight style={defaultStyles.button} onPress={() => navigation.navigate('SavedRecipes')} underlayColor='#FFC0CB'>
              <Text style={{color: '#DDDDDD', fontSize: 18}}>Recipes</Text>
            </TouchableHighlight>
            <TouchableHighlight style={defaultStyles.button} onPress={() => navigation.navigate('IngredientCalculator')} underlayColor='#FFC0CB'>
              <Text style={{color: '#DDDDDD', fontSize: 18}}>Ingredient Calculator</Text>
            </TouchableHighlight>
            {/* <TouchableHighlight title="Cook Book"></TouchableHighlight> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LandingPage;