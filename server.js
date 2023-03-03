const express = require('express');
const app = express();


const products = [
  {
    id: 1,
    name: 'Apple MacBook Air',
    category: 'Electronics',
    price: 999.00
  },
  {
    id: 2,
    name: 'Nike Air Max 270 React',
    category: 'Shoes',
    price: 150.00
  },
  {
    id: 3,
    name: 'Samsung Galaxy S21',
    category: 'Electronics',
    price: 799.99
  },
  {
    id: 4,
    name: 'Levi\'s 501 Original Fit Jeans',
    category: 'Clothing',
    price: 69.50
  },
  {
    id: 5,
    name: 'Kindle Paperwhite',
    category: 'Electronics',
    price: 129.99
  },
  {
    id: 6,
    name: 'Sony PlayStation 5',
    category: 'Video Games',
    price: 499.99
  },
  {
    id: 7,
    name: 'Kiehl\'s Ultra Facial Cream',
    category: 'Skincare',
    price: 32.00
  },
  {
    id: 8,
    name: 'Bose QuietComfort 35 II',
    category: 'Electronics',
    price: 299.00
  },
  {
    id: 9,
    name: 'Canon EOS R6',
    category: 'Photography',
    price: 2499.00
  },
  {
    id: 10,
    name: 'Fender American Professional Stratocaster',
    category: 'Musical Instruments',
    price: 1499.99
  }
];


//An endpoint to return all the products. 

app.get('/products', (req, res) => {
  res.json(products);
});

//An endpoint to return a specific product. 

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    res.status(404).send('Product not found');
  } else {
    res.json(product);
  }
});

//An endpoint to return products in a specific category. 

app.get('/products/category/:category', (req, res) => {
  const category = req.params.category;
  const categoryProducts = products.filter(p => p.category === category);
  
  if (categoryProducts.length === 0) {
    res.status(404).send('No products found in category');
  } else {
    res.json(categoryProducts);
  }
});


//An endpoint to update a product. 

app.put('/products/:id', (req, res)=>{
  const newproducts = req.id;
  products.map(product =>{
    if (product.id === newproducts.id){
      product.name = newproducts.name
      product.category = newproducts.category
      return newproducts
    }else{
      return product
    }
  })
  res.json(Users)
})

//An endpoint to delete a product. 

app.delete('/product/:id', (req, res)=>{
  const {id} = req.params;
  console.log(id);
  const newproducts = products.filter(product => product.id !== Number(id))
  res.json(newproducts)
})


const port = 5050;
app.listen(port, ()=>{
    console.log(`sever runnnioiii`)
})