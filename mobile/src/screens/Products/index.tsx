import React, {useState, useEffect} from 'react';
import {StatusBar, FlatList, ActivityIndicator, Modal} from 'react-native';
import {
  Container,
  ContainerModal,
  ContentModal,
  ContainerOrder,
  ModalHeader,
  Orderlabel,
  ContainerIcon,
} from './styles';
import Header from '../../components/Header';
import Products from '../../utils/data';
import ProductItem from '../../components/List/Product';
import {useCart} from '../../contexts/cart';
import ProductInterface from '../../interface/Product';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Product: React.FC = () => {
  const {loading} = useCart();
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [itemName, setItemName] = useState<string>('');
  const [initialCount, setInitialCount] = useState<number>(0);
  const [finalCount, setFinalCount] = useState<number>(10);
  const [loadingList, setLoadingList] = useState<boolean>(false);
  const [openModal, setopenModal] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = Products;
      const prod = response.slice(initialCount, finalCount);
      setProducts(prod);
      setInitialCount(finalCount);
      setFinalCount(finalCount * 2);
    }
    loadProducts();
  }, []);

  function onFilterByName(name: string) {
    setItemName(name);

    const prod: ProductInterface[] = products.filter(item =>
      item.name.includes(name),
    );
    setProducts(prod);
  }
  function loadMoreProducts() {
    setLoadingList(true);
    if (finalCount && initialCount > Products.length) {
      setLoadingList(false);
    }
    setInitialCount(finalCount);
    setFinalCount(finalCount * 2);
    const response = Products;
    const data = response.slice(0, finalCount);
    setProducts(data);
    setInitialCount(finalCount);
    setFinalCount(finalCount * 2);
    setLoadingList(false);
  }
  function orderByMajor() {
    setProducts(
      products.sort((a: ProductInterface, b: ProductInterface) => {
        return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
      }),
    );
    setopenModal(false);
  }
  function orderByMinor() {
    setProducts(
      products.sort((a: ProductInterface, b: ProductInterface) => {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      }),
    );
    setopenModal(false);
  }
  const renderFooterList = () => {
    if (!loadingList) {
      return null;
    }
    return <ActivityIndicator animating={true} color="#ffffff" size="large" />;
  };
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <Header
        placeholder="Digite o nome do produto"
        value={itemName}
        onChangeText={text => onFilterByName(text)}
        onPressOrder={() => setopenModal(true)}
      />
      {loading ? (
        <ActivityIndicator animating={true} color="#ffffff" size="large" />
      ) : (
        <>
          <Modal
            animationType="slide"
            presentationStyle="overFullScreen"
            transparent={true}
            visible={openModal}
            onRequestClose={() => {
              setopenModal(!openModal);
            }}>
            <ContainerModal>
              <ContentModal>
                <ModalHeader>
                  <ContainerIcon onPress={() => setopenModal(!openModal)}>
                    <Icons name="close" size={24} color="#333" />
                  </ContainerIcon>
                </ModalHeader>
                <ContainerOrder onPress={orderByMajor}>
                  <Orderlabel>Ordernar pelo Maior Preço</Orderlabel>
                </ContainerOrder>
                <ContainerOrder onPress={orderByMinor}>
                  <Orderlabel>Ordernar pelo Menor Preço</Orderlabel>
                </ContainerOrder>
              </ContentModal>
            </ContainerModal>
          </Modal>
          <FlatList
            onEndReached={loadMoreProducts}
            onEndReachedThreshold={0.1}
            data={products}
            horizontal={false}
            numColumns={2}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{padding: 4}}
            ListFooterComponent={renderFooterList}
            renderItem={({item}) => (
              <ProductItem
                id={item.id}
                name={item.name}
                price={item.price}
                avatar={item.avatar}
                discount={item.discount}
                rating={item.rating}
                carousel={[]}
                comment={[]}
                description=""
              />
            )}
            keyExtractor={(item, index) => `row-${index}`}
          />
        </>
      )}
    </Container>
  );
};

export default Product;
