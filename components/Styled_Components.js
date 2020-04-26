import styled from 'styled-components/native';
import React from "react";
import { Button, View } from "react-native";


//----------For Add_A_Deck.js--------------
export const DeckTitleInput = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #add8e6;
  border: none;
  border-radius: 22px;
  margin-top: 25px;
  font-size: 23px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AddDeckWrapper = styled.View`
  flex: 1;
  padding-top: 50px;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const BtnContainer = styled.View`
  margin-top: 30px;
`;
export const SubmitBtn = styled.Button`
  width: 100%;
  background-color: #2196f3;
  padding: 10px;
  padding-right: 40px;
  padding-left: 40px;
`;





//----------For Decks.js------------


export const NavBtn = styled.Button`
margin: 20px;
`;

export const ScrollableContainer = styled.FlatList``;

export const ListItemContentWrapper = styled.View`
justify-content: center;
align-items: center;
border: none;
justify-content: center;
width: 90%;
margin: 10px auto;
padding: 15px;
border-radius: 22px;
background-color: #fff;
shadow-color: #000000;
shadow-opacity: 0.8;
shadow-radius: 2px;
box-shadow: 3px 3px;
`;

export const NavigateWrapper = styled.TouchableOpacity``;

//---------------for globals------


export const Text = styled.Text`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;

export const ContentWrapperCenter = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContentTextWrapperCenter = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const GlobalBtn = ({ color, title, callBack, style }) => (
  <View style={style}>
    <Button onPress={() => callBack()} color={color} title={title} />
  </View>
);