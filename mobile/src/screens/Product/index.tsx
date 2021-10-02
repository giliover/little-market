import React, {useState, useEffect} from 'react';
import ProductInterface from '../../interface/Product';
import {useNavigation, useRoute} from '@react-navigation/native';
import Carousel from '../../components/Carousel';
import {formatValue} from '../../utils/format';
import {useCart} from '../../contexts/cart';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  Description,
  Price,
  ProductButtonsContainer,
  ProductButtonContainer,
  ProductButtonBuy,
  ProductButtonLabel,
  ProductButtonLabelBuy,
  ProductButtonRemove,
  ProductRemoveLabel,
  ContainerBottom,
  ContainerTop,
} from './styles';
import Products from '../../utils/data';

interface Params {
  id: number;
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductInterface[]>([]);

  const navigation = useNavigation();
  const {addToCart, removeFromCart, products} = useCart();
  const [, setItemLoadingAction] = useState<boolean>(false);
  const route = useRoute();
  const routeParams = route.params as Params;

  // const route = useRoute();
  // const [loading, setLoading] = useState<boolean>(true);
  // const routeParams = route.params as Params;

  // const amountRating = product[0]?.rating.length;

  // var sumRating = product[0]?.rating.reduce(
  //   (rating, number) => rating + number,
  //   0,
  // );
  // const ratingValue = sumRating / amountRating;
  useEffect(() => {
    async function loadProduct(id: number) {
      const item = Products.filter(prod => {
        return prod.id === id;
      });
      setProduct(item);
    }
    loadProduct(routeParams.id);
  }, []);

  async function handleAddToCart(item: ProductInterface): Promise<void> {
    setItemLoadingAction(true);
    await addToCart(item);
    setItemLoadingAction(false);
  }

  async function handleBuyToCart(item: ProductInterface) {
    setItemLoadingAction(true);
    await addToCart(item);
    setItemLoadingAction(false);
    navigation.navigate('Carrinho');
  }
  async function handleRemoveFromCart(id: number): Promise<void> {
    setItemLoadingAction(true);
    await removeFromCart(id);
    setItemLoadingAction(false);
  }

  const productExists = products.find(p => p.id === product[0]?.id);
  return (
    <Container>
      <ContainerTop>
        <Carousel carousel={product[0]?.carousel} />
        <Title>{product[0]?.name}</Title>
        {/* <Item>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={ratingValue}
            size={14}
            isDisabled={true}
          />
          <Label> Baseado em {amountRating} avaliações</Label>
        </Item> */}
        <Description>{product[0]?.description}</Description>
      </ContainerTop>
      <ContainerBottom>
        <ProductButtonsContainer>
          <Price>{formatValue(product[0]?.price)}</Price>
          <ProductButtonBuy onPress={() => handleBuyToCart(product[0])}>
            <ProductButtonLabelBuy>Comprar Agora</ProductButtonLabelBuy>
          </ProductButtonBuy>
          <ProductButtonContainer onPress={() => handleAddToCart(product[0])}>
            <ProductButtonLabel>Adicionar ao Carrinho</ProductButtonLabel>
          </ProductButtonContainer>
          {productExists ? (
            <ProductButtonRemove
              onPress={() => handleRemoveFromCart(product[0]?.id)}>
              <ProductRemoveLabel>Remover do Carrinho</ProductRemoveLabel>
            </ProductButtonRemove>
          ) : null}
        </ProductButtonsContainer>
      </ContainerBottom>

      {/* <Comments>
        <LabelComment>Opinião dos Clientes</LabelComment>
        {product[0]?.comment.map(item => {
          return (
            <CustomerContainer key={item.id}>
              <Icons name="person" size={24} color="#000" />
              <CustomerName>{item.name} - </CustomerName>
              <CustomerOpinion>{item.comment}</CustomerOpinion>
            </CustomerContainer>
          );
        })}
      </Comments> */}
    </Container>
  );
};

export default Product;
