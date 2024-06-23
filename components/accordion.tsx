import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';

const AccordionGenerator = (dataJSON:any) => {
  const [data, setData] = useState<any>({});
  const dataLength:number = Object.keys(data).length;

  useEffect(() => {
    const getData = async() => {
      if(dataJSON) {
        setData(dataJSON.dataJSON);
      }
    };

    getData();
  }, [dataLength]);

  if(!dataLength) {
    return (<Text>... LOADING ...</Text>);
  }
  let accordionItems = new Array();
  let max = 0;
  if(dataLength > 10) {
    max = 10;
  } else {
    max = dataLength;
  }

  const ingredients = (ingredients:any) => {
    let ingredientList = new Array()
    for(let x = 0; x < ingredients.length; x++) {
      ingredientList[x] = <Text>{ingredients[x]}</Text>;
    }

    return ingredientList;
  }
  
  for(let x = 0; x < max; x++) {
    console.log(data.hits[x].recipe);
    accordionItems[x] = (
      <List.Accordion title={data.hits[x].recipe.label} id={x}>
        {ingredients(data.hits[x].recipe.ingredientLines)}
      </List.Accordion>
    )
  }

  return (
    <>
      <Text>Search Results</Text>
      <List.AccordionGroup>{accordionItems}</List.AccordionGroup>
    </>
  )
}

export default AccordionGenerator;