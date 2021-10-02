import React from 'react';
import {Container, Footer, AmountCart, TotalPriceCart} from './styles';
import Header from '../../components/Container/Header';
import CartProduct from '../../components/List/CartProduct';
import {FlatList} from 'react-native';
import {useCart} from '../../contexts/cart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatValue} from '../../utils/format';

const Cart: React.FC = () => {
  const {products, totalItensInCart, cartTotal} = useCart();

  return (
    <>
      <Header title="Meu Carrinho" />
      <Container>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <CartProduct
              id={item.id}
              image={item.avatar}
              title={item.name}
              price={item.price}
              amount={item.quantity}
              rating={item.rating}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Container>
      <Footer>
        <Icon name="shopping-cart" color="#ffffff" size={24} />
        <AmountCart>
          {totalItensInCart
            ? totalItensInCart > 1
              ? `${totalItensInCart} items`
              : `${totalItensInCart} item`
            : 'Carrinho Vazio'}
        </AmountCart>
        <TotalPriceCart> Total: {formatValue(cartTotal)}</TotalPriceCart>
      </Footer>
    </>
  );
};

export default Cart;
