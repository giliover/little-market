interface Caroulsel {
  id: number;
  url: string;
}

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  avatar: string;
  description: string;
  carousel: Caroulsel[];
  discount: number | 0.0;
}

export default ProductInterface;
