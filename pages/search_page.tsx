/*
  * Search by title then filter by ingredients
  * Community Search | allows for community members to upload recipes
*/

import React, {Component, useEffect, useState, useCallback, useRef} from 'react';
import { getAPIData } from '../utilities/api';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import MyComponent from '../components/accordion';
import AccordionGenerator from '../components/accordion';

function SearchRecipes({navigation}:any): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [currentQuery, setCurrentQuery] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [data, setData] = useState<any>({});

  const dataLength:number = Object.keys(data).length;

  useEffect(() => {
    const getData = async() => {
      if(query) {
        const apiData = await getAPIData(query);
        let data = await apiData.json();
        console.log(data);
        setData(data);
      }
    };

    getData();
  }, [query, dataLength]);

  const submitHandler = () => {
    setQuery(currentQuery);
  }

  if(!query) {
    return (
      <>
        <Text>Enter an ingredient below to find recipes!</Text>
        <TextInput 
          value={currentQuery}
          placeholder="Enter ingredient"
          onChangeText={setCurrentQuery}
        />
        <Button
          onPress={submitHandler}
          title="Submit"
        />
      </>
    );
  } else if(!dataLength) {
    return (
      <>
        <Text>Loading Data</Text>
      </>
    );
  } else {
    return (
      <>
        <AccordionGenerator
          dataJSON = {JSON.parse(JSON.stringify(data))} />
      </>
    );
  }
}

export default SearchRecipes;