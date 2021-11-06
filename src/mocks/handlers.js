import { rest } from 'msw'

const goodiesData = [
  {
    name: "BBC aka Chonky Chip",
    id: 143,
    keyDescription: "Chewy, salty",
    sweet: 6,
    salty: 8,
    chewy: 9,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    price: 3,
  },
  {
    name: "All Your Bread Are Belong To Us",
    id: 142,
    keyDescription: "Chewy, scrumcious",
    sweet: 2,
    salty: 8,
    chewy: 6,
    img:
      "https://www.dishbydish.net/wp-content/uploads/Fluffy-Gluten-Free-Bread-Dairy-Free_Final7-scaled.jpg",
    sizes: ["small"],
    description:
      "adkns akjdankdj nakj nakjfn akjsnf ;kanf;kaj nklsan fklnsflknalkjfnajkfa kjbfkaj bkjs ;aksjka sfn",
    price: 7,
  },
  {
    name: "Based Brownies",
    id: 142,
    keyDescription: "Chewy, gobby",
    sweet: 7,
    salty: 5,
    chewy: 9,
    img:
      "https://glutenfreeonashoestring.com/wp-content/uploads/2017/09/Fudgy-Gluten-Free-Brownies-stack.jpg",
    sizes: ["small"],
    description:
      "adkns akjdankdj nakj nakjfn akjsnf ;kanf;kaj nklsan fklnsflknalkjfnajkfa kjbfkaj bkjs ;aksjka sfn",
    price: 4,
  },
  {
    name: "All Your Bread Are Belong To Us",
    id: 142,
    keyDescription: "Chewy, scrumcious",
    sweet: 2,
    salty: 8,
    chewy: 6,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    description:
      "adkns akjdankdj nakj nakjfn akjsnf ;kanf;kaj nklsan fklnsflknalkjfnajkfa kjbfkaj bkjs ;aksjka sfn",
    price: 7,
  },
  {
    name: "All Your Bread Are Belong To Us",
    id: 142,
    keyDescription: "Chewy, scrumcious",
    sweet: 2,
    salty: 8,
    chewy: 6,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    description:
      "adkns akjdankdj nakj nakjfn akjsnf ;kanf;kaj nklsan fklnsflknalkjfnajkfa kjbfkaj bkjs ;aksjka sfn",
    price: 7,
  },
  {
    name: "All Your Bread Are Belong To Us",
    id: 142,
    keyDescription: "Chewy, scrumcious",
    sweet: 2,
    salty: 8,
    chewy: 6,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    description:
      "adkns akjdankdj nakj nakjfn akjsnf ;kanf;kaj nklsan fklnsflknalkjfnajkfa kjbfkaj bkjs ;aksjka sfn",
    price: 7,
  },
  {
    name: "All Your Bread Are Belong To Us",
    id: 142,
    keyDescription: "Chewy, scrumcious",
    sweet: 2,
    salty: 8,
    chewy: 6,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    description:
      "adkns akjdankdj nakj nakjfn akjsnf ;kanf;kaj nklsan fklnsflknalkjfnajkfa kjbfkaj bkjs ;aksjka sfn",
    price: 7,
  },
  {
    name: "All Your Bread Are Belong To Us",
    id: 142,
    keyDescription: "Chewy, scrumcious",
    sweet: 2,
    salty: 8,
    chewy: 6,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    description:
      "adkns akjdankdj nakj nakjfn akjsnf ;kanf;kaj nklsan fklnsflknalkjfnajkfa kjbfkaj bkjs ;aksjka sfn",
    price: 7,
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