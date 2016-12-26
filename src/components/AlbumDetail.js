import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { textStyle, thumbnailStyle } = styles;
  const { collectionName, artistName } = album;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: 'data:image/jpeg;base64,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' }}
          />
        </View>
        <View style={textStyle}>
          <Text>{ collectionName }</Text>
          <Text>{ artistName }</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  textStyle: {
    marginLeft: 5,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
