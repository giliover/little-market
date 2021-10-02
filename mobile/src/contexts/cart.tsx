import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: number;
  name: string;
  avatar: string;
  description: string;
  price: number;
  quantity: number;
  rating: Array<number>;
}

interface CartContext {
  products: Product[];
  loading: boolean;
  addToCart(item: Omit<Product, 'quantity'>): Promise<void>;
  removeFromCart(id: number): Promise<void>;
  increment(id: number): void;
  decrement(id: number): void;
  totalItensInCart: number;
  cartTotal: number;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = await AsyncStorage.getItem(
        '__CC__littlemarket:cart',
      );
      if (storagedProducts) {
        setProducts([...JSON.parse(storagedProducts)]);
        setLoading(false);
      }
      setLoading(false);
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const productExists = products.find(p => p.id === product.id);

      if (productExists) {
        setProducts(
          products.map(p =>
            p.id === product.id ? {...product, quantity: p.quantity + 1} : p,
          ),
        );
      } else {
        setProducts([...products, {...product, quantity: 1}]);
      }

      await AsyncStorage.setItem(
        '__CC__littlemarket:cart',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const removeFromCart = useCallback(
    async id => {
      let productFiltered = products.filter(product => product.id !== id);

      setProducts(productFiltered);
      await AsyncStorage.setItem(
        '__CC__littlemarket:cart',
        JSON.stringify(productFiltered),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const newProducts = products.map(product =>
        product.id === id
          ? {...product, quantity: product.quantity + 1}
          : product,
      );
      setProducts(newProducts);

      await AsyncStorage.setItem(
        '@__CC__littlemarket:cart',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const check = products.filter(product => product.id === id);
      let list;
      if (check[0].quantity < 2) {
        list = products.filter(product => product.id !== id);
      } else {
        list = products.map(product =>
          product.id !== id
            ? product
            : {...product, quantity: product.quantity - 1},
        );
      }

      setProducts(list);
      await AsyncStorage.setItem(
        '__CC__littlemarket:cart',
        JSON.stringify(list),
      );
    },
    [products],
  );

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [products]);

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubtotal = product.price * product.quantity;

      return accumulator + productsSubtotal;
    }, 0);

    return total;
  }, [products]);
  const value = React.useMemo(
    () => ({
      addToCart,
      removeFromCart,
      increment,
      decrement,
      products,
      totalItensInCart,
      cartTotal,
      loading,
    }),
    [
      addToCart,
      removeFromCart,
      increment,
      decrement,
      products,
      totalItensInCart,
      cartTotal,
      loading,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export {CartProvider, useCart};
