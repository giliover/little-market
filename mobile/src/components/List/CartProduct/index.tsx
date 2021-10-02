import React, {useCallback, useMemo} from 'react';
import {
  Product,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductTotal,
  ProductInformation,
  ProductActions,
  ProductControlButton,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useCart} from '../../../contexts/cart';
import {formatValue} from '../../../utils/format';
// import {AirbnbRating} from 'react-native-ratings';
interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
  rating: Array<number>;
}

const CartProduct: React.FC<Props> = props => {
  const {increment, decrement, products, removeFromCart} = useCart();

  // var {rating} = props;
  // const amountRating = rating.length;
  // var sumRating = rating.reduce((rating, number) => rating + number, 0);
  // const ratingValue = sumRating / amountRating;

  function handleIncrement(id: number): void {
    increment(id);
  }

  function handleDecrement(id: number): void {
    decrement(id);
  }
  function handleRemoveFromCart(id: number): void {
    removeFromCart(id);
  }
  return (
    <Product>
      <ProductImageContainer>
        <ProductImage source={{uri: props.image}} />
      </ProductImageContainer>
      <ProductInformation>
        {/* <AirbnbRating
          showRating={false}
          count={5}
          defaultRating={ratingValue}
          size={14}
          isDisabled={true}
        /> */}
        <ProductName>{props.title}</ProductName>
        <ProductPrice>{props.price}</ProductPrice>
        <ProductPrice>
          {props.amount > 1
            ? `${props.amount} unidades`
            : `${props.amount} unidade`}
        </ProductPrice>
        <ProductTotal>{formatValue(props.amount * props.price)}</ProductTotal>
      </ProductInformation>
      <ProductActions>
        <ProductControlButton onPress={() => handleIncrement(props.id)}>
          <Icon name="add" color="#d72f3f" size={24} />
        </ProductControlButton>
        <ProductControlButton onPress={() => handleDecrement(props.id)}>
          <Icon name="remove" color="#d72f3f" size={24} />
        </ProductControlButton>
        <ProductControlButton onPress={() => handleRemoveFromCart(props.id)}>
          <Icon name="delete" color="#d72f3f" size={24} />
        </ProductControlButton>
      </ProductActions>
    </Product>
  );
};

export default CartProduct;
