const products = [
    {
        id: "paq001",
        name: "Patagonia Express",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        price: 3000,
        image: ["/img/patagonia-1-1.jpg", "/img/patagonia-1-2.png", "/img/patagonia-1-3.png", "/img/patagonia-1-4.png" ],
        category: "patagonia"
    },
    {
        id: "paq002",
        name: "Patagonia Premium",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        price: 6000,
        image: ["/img/patagonia-2-1.jpg","/img/patagonia-2-2.png", "/img/patagonia-2-3.png", "/img/patagonia-2-4.png" ],
        category: "patagonia"
    },
    {
        id: "paq003",
        name: "Córdoba Express",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        price: 1500,
        image: ["/img/cordoba-1-1.jpg", "/img/cordoba-1-2.png", "/img/cordoba-1-3.png", "/img/cordoba-1-4.png"],
        category: "cordoba"
    },
    {
        id: "paq004",
        name: "Córdoba Premium",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        price: 3000,
        image: ["/img/cordoba-2-1.jpg", "/img/cordoba-2-2.png", "/img/cordoba-2-3.png", "/img/cordoba-2-4.png"],
        category: "cordoba"
    },
    {
        id: "paq005",
        name: "Noroeste Express",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        price: 2000,
        image: ["/img/noroeste-1-1.jpg", "/img/noroeste-1-2.png", "/img/noroeste-1-3.png", "/img/noroeste-1-4.png"],
        category: "noroeste"
    },
    {
        id: "paq006",
        name: "Noroeste Premium",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        price: 4000,
        image: ["/img/noroeste-2-1.jpg", "/img/noroeste-2-2.png", "/img/noroeste-2-3.png", "/img/noroeste-2-4.png"],
        category: "noroeste"
    },
]
const getProducts = () => {
    return new Promise((resolve, reject) => {
        //con esto simulamos un retraso de red, en este caso de 2 segundos, jugar y cambiar
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }