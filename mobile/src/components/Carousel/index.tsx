import React, {useRef, useState} from 'react';
import {Container, Image} from './styles';
import {
  ScrollView,
  Dimensions,
  View,
  Text,
  NativeEventEmitter,
} from 'react-native';
import {onChange} from 'react-native-reanimated';

interface CarouselInterface {
  id: number;
  url: string;
}
interface Props {
  carousel: CarouselInterface[];
}
const Carousel: React.FC<Props> = props => {
  // const [items, setItems] = useState<CarouselInterface[]>(props.carousel);
  const [active, setActive] = useState<number>(0);
  const {width} = Dimensions.get('window');
  const height = width * 0.6;
  return (
    <Container style={{width, height}}>
      <ScrollView
        horizontal
        pagingEnabled
        style={{width, height}}
        onScroll={({nativeEvent}) => {
          const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
          );
          if (slide != active) {
            setActive(slide);
          }
        }}
        showsHorizontalScrollIndicator={false}>
        {props.carousel?.map(item => {
          return <Image source={{uri: item.url}} key={item.id} />;
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {props.carousel?.map((i, k) =>
          k == active ? (
            <Text key={k} style={{color: 'black'}}>
              ⬤
            </Text>
          ) : (
            <Text key={k} style={{color: '#ccc'}}>
              ⬤
            </Text>
          ),
        )}
      </View>
    </Container>
  );
};
export default Carousel;
