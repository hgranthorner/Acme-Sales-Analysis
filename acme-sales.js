function productsPurchased(arrOfOrders, arrOfProducts) {
  // return all products that have been ordered
  // check if the product id is in any of the order objects
  let arrOfOrderedProducts = []
  arrOfOrders.forEach(order => {
    let found = arrOfProducts.find(product => order.productId === product.id)
    if (found !== undefined && !arrOfOrderedProducts.includes(found.name)) arrOfOrderedProducts.push(found.name)
  })
  return arrOfOrderedProducts
}

function topSellingProductByQuantity(arrOfOrders, arrOfProducts) {
  // Couldn't find a more elegant way to prevent mutation of original data
  // let newArrOfProducts = Array.from(arrOfProducts)
  let newArrOfProducts = JSON.parse(JSON.stringify(arrOfProducts))

  newArrOfProducts.forEach(product => {
    let ordersForThisProduct = arrOfOrders.filter(order => order.productId === product.id)
    product.quantitySold = ordersForThisProduct.reduce((acc, order) => acc + order.quantity, 0)
    product.moolah = product.quantitySold * product.price
  })

  let mostSoldProduct = { moolah: 0 }

  newArrOfProducts.forEach(product => {
    if (product.moolah > mostSoldProduct.moolah) mostSoldProduct = product
  })

  let returnObj = arrOfProducts.find(product => product.id === mostSoldProduct.id)
  console.log(returnObj)
  return returnObj
}

module.exports = {
  productsPurchased: productsPurchased,
  topSellingProductByQuantity: topSellingProductByQuantity
}

const products = [
  {
    id: 1,
    name: 'foo',
    price: 7
  },
  {
    id: 2,
    name: 'bar',
    price: 2
  },
  {
    id: 5,
    name: 'bazz',
    price: 1
  }
]

const users = [
  {
    id: 1,
    name: 'moe'
  },
  {
    id: 2,
    name: 'larry'
  },
  {
    id: 3,
    name: 'curly'
  }
]

// productId matches up with product in products
// userId matches up with user in users
const orders = [
  {
    id: 1,
    productId: 1,
    quantity: 3,
    userId: 1
  },
  {
    id: 2,
    productId: 1,
    quantity: 7,
    userId: 1
  },
  {
    id: 3,
    productId: 5,
    quantity: 70,
    userId: 3
  },
  {
    id: 3,
    productId: 5,
    quantity: 1,
    userId: 3
  }
]

productsPurchased(orders, products) //?
topSellingProductByQuantity(orders, products) //?
