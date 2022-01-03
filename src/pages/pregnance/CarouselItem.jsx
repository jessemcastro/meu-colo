import React from 'react';

import { ParallaxImage } from 'react-responsive-carousel';
import { Text, Pressable, SafeAreaView } from 'react-native';

import styles from './styles';

function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable onPress={() => alert('Image description:' + item.description)}>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          source={{ uri: item.source }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

export default CarouselItem;
