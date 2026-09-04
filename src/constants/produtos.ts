import { Produto } from '@/types/produto';

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description: 'A máscara Essence Lash Princess é popular por seu efeito de cílios postiços e longa duração.',
    category: 'beauty',
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 99,
    brand: 'Essence',
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
    ],
  },
  {
    id: 2,
    title: 'Eyeshadow Palette with Mirror',
    description: 'Paleta de sombras versátil com espelho embutido, combinando tons matte e cintilantes.',
    category: 'beauty',
    price: 19.99,
    discountPercentage: 5.5,
    rating: 3.28,
    stock: 44,
    brand: 'Glamour Beauty',
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png'
    ],
  },
  {
    id: 3,
    title: 'Powder Canister',
    description: 'Pó facial de acabamento suave para fixação da maquiagem e controle de brilho.',
    category: 'beauty',
    price: 14.99,
    discountPercentage: 18.14,
    rating: 3.82,
    stock: 59,
    // Sem marca propositalmente para validar o fallback 'Sem marca'
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png'
    ],
  },
  {
    id: 4,
    title: 'Red Lipstick',
    description: 'Batom vermelho intenso de alta pigmentação e acabamento aveludado.',
    category: 'beauty',
    price: 12.99,
    discountPercentage: 19.03,
    rating: 4.51,
    stock: 68,
    brand: 'Chic Cosmetics',
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png'
    ],
  },
  {
    id: 5,
    title: 'Calvin Klein CK One',
    description: 'Perfume clássico unissex com notas cítricas e frescas, ideal para uso diário.',
    category: 'fragrances',
    price: 49.99,
    discountPercentage: 0.32,
    rating: 4.85,
    stock: 17,
    brand: 'Calvin Klein',
    thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png'
    ],
  },
  {
    id: 6,
    title: 'Chanel Coco Noir Eau De Parfum',
    description: 'Fragrância sofisticada e envolvente com notas orientais e florais marcantes.',
    category: 'fragrances',
    price: 129.99,
    discountPercentage: 18.64,
    rating: 2.76,
    stock: 41,
    brand: 'Chanel',
    thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De%20%20Parfum/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De%20%20Parfum/1.png'
    ],
  },
  {
    id: 7,
    title: 'Dior J\'adore',
    description: 'Perfume floral feminino icônico, luxuoso e elegante com essência de ylang-ylang e rosa damascena.',
    category: 'fragrances',
    price: 89.99,
    discountPercentage: 17.44,
    rating: 3.31,
    stock: 91,
    brand: 'Dior',
    thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Dior%20J\'adore/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/fragrances/Dior%20J\'adore/1.png'
    ],
  },
  {
    id: 8,
    title: 'Annibale Colombo Bed',
    description: 'Cama de casal clássica fabricada artesanalmente em madeira maciça com detalhes nobres.',
    category: 'furniture',
    price: 1899.99,
    discountPercentage: 0.29,
    rating: 4.14,
    stock: 47,
    brand: 'Annibale Colombo',
    thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png'
    ],
  },
  {
    id: 9,
    title: 'Annibale Colombo Sofa',
    description: 'Sofá refinado com estofamento de alto padrão e conforto excepcional para salas de estar.',
    category: 'furniture',
    price: 2499.99,
    discountPercentage: 18.54,
    rating: 4.72,
    stock: 16,
    brand: 'Annibale Colombo',
    thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png'
    ],
  },
  {
    id: 10,
    title: 'Bedside Table African Cherry',
    description: 'Mesa de cabeceira compacta em madeira cerejeira africana com gaveta espaçosa.',
    category: 'furniture',
    price: 299.99,
    discountPercentage: 9.58,
    rating: 4.48,
    stock: 16,
    // Sem marca para testar fallback
    thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png',
    images: [
      'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png'
    ],
  },
];
