export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: string;
  weight: string;
  image: string;
  tags: string[];
  vitamins: boolean;
  wild: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Неваренье из брусники",
    description: "Классическое неваренье — ягоды в собственном соку без термообработки. Все витамины и нутриенты сохранены.",
    price: 490,
    category: "Неваренье",
    weight: "250 г",
    image: "https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/e7021c9a-9659-478c-8893-7caff959a690.jpg",
    tags: ["Без варки", "Дикорастущие", "Карелия"],
    vitamins: true,
    wild: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Неваренье из брусники",
    description: "Брусника из карельских лесов, бережно перетёртая с натуральными подсластителями. Живой продукт.",
    price: 790,
    category: "Неваренье",
    weight: "500 г",
    image: "https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/e7021c9a-9659-478c-8893-7caff959a690.jpg",
    tags: ["Без варки", "Дикорастущие", "Карелия"],
    vitamins: true,
    wild: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Неваренье из брусники",
    description: "Экономичный формат — большая банка для всей семьи. Идеально для чая, йогурта и выпечки.",
    price: 1390,
    oldPrice: 1590,
    category: "Неваренье",
    weight: "1 кг",
    image: "https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/e7021c9a-9659-478c-8893-7caff959a690.jpg",
    tags: ["Без варки", "Дикорастущие", "Выгодно"],
    vitamins: true,
    wild: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Подарочный набор «Карелия»",
    description: "Три баночки неваренья разного объёма в красивой упаковке. Идеальный подарок для близких.",
    price: 1790,
    category: "Подарочные наборы",
    weight: "3 × 250 г",
    image: "https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/90087d38-06af-4964-bc86-34a5756d8271.jpg",
    tags: ["Подарок", "Набор", "3 баночки"],
    vitamins: true,
    wild: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Подарочный набор «Северный лес»",
    description: "Большой набор — пять баночек с брусничным неварением. Для истинных ценителей северной природы.",
    price: 2990,
    category: "Подарочные наборы",
    weight: "5 × 250 г",
    image: "https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/90087d38-06af-4964-bc86-34a5756d8271.jpg",
    tags: ["Подарок", "Набор", "Премиум"],
    vitamins: true,
    wild: true,
    inStock: false,
  },
  {
    id: 6,
    name: "Брусника дикорастущая (сушёная)",
    description: "Сушёная брусника из Карелии — для чая, выпечки, мюсли. Без сахара, без добавок.",
    price: 350,
    category: "Сухофрукты",
    weight: "100 г",
    image: "https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/90087d38-06af-4964-bc86-34a5756d8271.jpg",
    tags: ["Сушёная", "Без сахара", "Дикорастущие"],
    vitamins: true,
    wild: true,
    inStock: true,
  },
];

export const categories = ["Все", "Неваренье", "Подарочные наборы", "Сухофрукты"];
