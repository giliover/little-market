import React, {useState} from 'react';

import {
  Product,
  ProductHeader,
  Image,
  ProductInformation,
  ProductName,
  ProductPrice,
  ProductButtonContainer,
  ProductButtonBuy,
  ProductButtonLabel,
  ProductButtonLabelBuy,
  ProductButtonRemove,
  ProductRemoveLabel,
} from './styles';

// import {AirbnbRating} from 'react-native-ratings';
import {useCart} from '../../../contexts/cart';
import {useNavigation} from '@react-navigation/native';
import Loader from 'react-native-modal-loader';
import {formatValue} from '../../../utils/format';
import ProductInterface from '../../../interface/Product';

const ProductItem: React.FC<ProductInterface> = (props) => {
  const [itemLoadingAction, setItemLoadingAction] = useState<boolean>(false);
  const navigation = useNavigation();
  const {addToCart, removeFromCart, products} = useCart();
  // var {rating} = props;
  // const amountRating = rating.length;
  // var sumRating = rating.reduce((rating, number) => rating + number, 0);
  // const ratingValue = sumRating / amountRating;

  // async function handleAddToCart(item: ProductInterface): Promise<void> {
  //   setItemLoadingAction(true);
  //   await addToCart(item);
  //   setItemLoadingAction(false);
  // }

  async function handleBuyToCart(item: ProductInterface) {
    setItemLoadingAction(true);
    await addToCart(item);
    setItemLoadingAction(false);
    navigation.navigate('Carrinho');
  }
  function handleRemoveFromCart(id: number): void {
    setItemLoadingAction(true);
    removeFromCart(id);
    setItemLoadingAction(false);
  }

  function onViewItem() {
    navigation.navigate('Produto', {id: props.id});
  }
  const productExists = products.find((p) => p.id === props.id);
  return (
    <>
      {itemLoadingAction ? (
        <Loader loading={itemLoadingAction} color="#007cc3" />
      ) : null}
      <Product onPress={onViewItem}>
        <ProductHeader>
          {/* <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={ratingValue}
            size={14}
            isDisabled={true}
          /> */}
        </ProductHeader>
        <Image source={{uri: props.avatar}} />
        <ProductInformation>
          <ProductName>{props.name}</ProductName>
          <ProductPrice>{formatValue(props.price)}</ProductPrice>
        </ProductInformation>
        <ProductButtonBuy onPress={() => handleBuyToCart(props)}>
          <ProductButtonLabelBuy>Comprar Agora</ProductButtonLabelBuy>
        </ProductButtonBuy>
        <ProductButtonContainer onPress={() => handleAddToCart(props)}>
          <ProductButtonLabel>Adicionar ao Carrinho</ProductButtonLabel>
        </ProductButtonContainer>
        {/* {productExists ? (
          <ProductButtonRemove onPress={() => handleRemoveFromCart(props.id)}>
            <ProductRemoveLabel>Remover do Carrinho</ProductRemoveLabel>
          </ProductButtonRemove>
        ) : null} */}
      </Product>
    </>
  );
};

export default ProductItem;
