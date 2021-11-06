import { rest } from 'msw'

const goodiesData = [
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 6,
    salty: 8,
    chewy: 9,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 3,
    salty: 8,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 3,
    salty: 8,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 3,
    salty: 8,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 3,
    salty: 8,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 3,
    salty: 8,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 3,
    salty: 8,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 3,
    salty: 8,
    ranking: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    watering: 2,
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
];

export const handlers = [
  // Handles a GET /plants request
  rest.get('http://localhost:3333/goodies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(goodiesData),
    );
  }),
]