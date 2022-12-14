const products = [
    {
      id: 1,
      collection: "starwars",
      licence: "Star Wars",
      name: "Baby Yoda Blueball",
      description: "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
      img: {
        front: "./img/star-wars/baby-yoda-1.webp",
        back: "./img/star-wars/baby-yoda-box.webp"
      },
      sku: "STW001001",
      price: 1799.99,
      dues: 3,
      stock: 8,
      sells: 11
    },
    {
      id: 2,
      collection: "starwars",
      licence: "Star Wars",
      name: "Boba Fett Fighter",
      description: "Figura coleccionable de Boba Fett Fighter - The Mandalorian Saga.",
      img: {
        front: "./img/star-wars/bobbafeth-1.webp",
        back: "./img/star-wars/bobbafeth-box.webp"
      },
      sku: "STW001002",
      price: 1799.99,
      dues: 6,
      stock: 8,
      sells: 5
    },
    {
      id: 3,
      collection: "starwars",
      licence: "Star Wars",
      name: "Luke Skylwalker & Grogu",
      description: "Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.",
      img: {
        front: "./img/star-wars/luke-1.webp",
        back: "./img/star-wars/luke-box.webp"
      },
      sku: "STW001003",
      price: 1799.99,
      dues: 6,
      stock: 8,
      sells: 5
    },
    {
      id: 4,
      collection: "starwars",
      licence: "Star Wars",
      name: "Stormtrooper Lightsaber",
      description: "Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.",
      img: {
        front: "./img/star-wars/trooper-1.webp",
        back: "./img/star-wars/trooper-box.webp"
      },
      sku: "STW001004",
      price: 1799.99,
      dues: 6,
      stock: 8,
      sells: 17
    },
    {
      id: 5,
      collection: "pokemon",
      licence: "Pokemon",
      name: "Charmander Smiley",
      description: "Figura coleccionable de Charmander - Pokemon Saga.",
      img: {
        front: "./img/pokemon/charmander-1.webp",
        back: "./img/pokemon/charmander-box.webp"
      },
      sku: "PKM001001",
      price: 1799.99,
      dues: 6,
      stock: 8,
      sells: 5
    },
    {
      id: 6,
      collection: "pokemon",
      licence: "Pokemon",
      name: "Dragonite Hi!",
      description: "Figura coleccionable de Dragonite - Pokemon Saga.",
      img: {
        front: "./img/pokemon/dragonite-1.webp",
        back: "./img/pokemon/dragonite-box.webp"
      },
      sku: "PKM001002",
      price: 1799.99,
      dues: 3,
      stock: 8,
      sells: 13
    },
    {
      id: 7,
      collection: "pokemon",
      licence: "Pokemon",
      name: "Pidgeotto Flying",
      description: "Figura coleccionable de Pidgeotto - Pokemon Saga.",
      img: {
        front: "./img/pokemon/pidgeotto-1.webp",
        back: "./img/pokemon/pidgeotto-box.webp"
      },
      sku: "PKM00103",
      price: 1799.99,
      dues: 9,
      stock: 8,
      sells: 17
    },
    {
      id: 8,
      collection: "pokemon",
      licence: "Pokemon",
      name: "Pikachu Smiley",
      description: "Figura coleccionable de Pikachu - Pokemon Saga.",
      img: {
        front: "./img/pokemon/pikachu-1.webp",
        back: "./img/pokemon/pikachu-box.webp"
      },
      sku: "PKM001004",
      price: 1799.99,
      dues: 3,
      stock: 8,
      sells: 5
    },
    {
      id: 9,
      collection: "pokemon",
      licence: "Pokemon",
      name: "Vulpix Fancy",
      description: "Figura coleccionable de Vulpix - Pokemon Saga.",
      img: {
        front: "./img/pokemon/vulpix-1.webp",
        back: "./img/pokemon/vulpix-box.webp"
      },
      sku: "PKM001005",
      price: 1799.99,
      dues: 3,
      stock: 8,
      sells: 5
    },
    {
      id: 10,
      collection: "harrypotter",
      licence: "Harry Potter",
      name: "Harry Potter & Hegwid",
      description: "Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.",
      img: {
        front: "./img/harry-potter/harry-1.webp",
        back: "./img/harry-potter/harry-box.webp"
      },
      sku: "HPT001001",
      price: 1799.99,
      dues: 3,
      stock: 8,
      sells: 5
    },
    {
      id: 11,
      collection: "harrypotter",
      licence: "Harry Potter",
      name: "Herminione Ball Dress",
      description: "Figura coleccionable de Herminione - Harry Potter Saga.",
      img: {
        front: "./img/harry-potter/hermione-1.webp",
        back: "./img/harry-potter/hermione-box.webp"
      },
      sku: "HPT001002",
      price: 1799.99,
      dues: 3,
      stock: 8,
      sells: 5
    },
    {
      id: 12,
      collection: "harrypotter",
      licence: "Harry Potter",
      name: "Luna Lovegood Lion Mask",
      description: "Figura coleccionable de Luna Lovegood - Harry Potter Saga.",
      img: {
        front: "./img/harry-potter/luna-1.webp",
        back: "./img/harry-potter/luna-box.webp"
      },
      sku: "HPT001003",
      price: 1799.99,
      dues: 3,
      stock: 8,
      sells: 17
    },
    {
      id: 13,
      collection: "harrypotter",
      licence: "Harry Potter",
      name: "Snape Patronus",
      description: "Figura coleccionable de Snape Patronus - Harry Potter Saga.",
      img: {
        front: "./img/harry-potter/snape-patronus-1.webp",
        back: "./img/harry-potter/snape-patronus-box.webp"
      },
      sku: "HPT001004",
      price: 1799.99,
      dues: 3,
      stock: 13,
      sells: 5
    },
    {
      id: 14,
      licence: "Pokemon",
      name: "Vaporeon",
      description: "Figura coleccionable de Vaporeon",
      sku: "PKM001006",
      price: 2199.99,
      discount: "10",
      dues: "6",
      stock: "12",
      img: {
        front: "./img/pokemon/pngaaa.com-4292372.png",
        back: ""
      }
    }
  ]

module.exports = {
    products,
};