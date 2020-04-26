import React from 'react';
import {ContentWrapperCenter, ContentTextWrapperCenter, Text} from './Styled_Components';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Loading = () => {
  return (
    <ContentWrapperCenter>
      <ContentTextWrapperCenter>
        <AntDesign name="loading1" size={30} />
        <Text style={{marginTop: 10}} color="black" size="15px">
          Loading...
        </Text>
      </ContentTextWrapperCenter>
    </ContentWrapperCenter>
  );
};
