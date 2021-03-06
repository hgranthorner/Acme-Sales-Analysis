/* eslint-disable no-unused-expressions */
const expect = require('chai').expect
let sourceFile = './acme-sales'
const productsPurchased = require(sourceFile).productsPurchased
const topSellingProductByQuantity = require(sourceFile).topSellingProductByQuantity
const usersWithOrders = require(sourceFile).usersWithOrders

describe('function productsPurchased', () => {
  it('exists', () => {
    expect(productsPurchased).to.be.ok
  })

  it('returns an array', () => {
    expect(Array.isArray(productsPurchased([], []))).to.equal(true)
  })

  it('should return only products that have been ordered', () => {
    let products = [{ id: 1, name: 'egg' }, { id: 2, name: 'juice' }]
    let orders = [
      {
        id: 1,
        productId: 2
      }
    ]

    expect(productsPurchased(orders, products)).to.eql([{ id: 2, name: 'juice' }])
  })
})

describe('function topSellingProductByQuantity', () => {
  let orders = [{ id: 1, productId: 2, quantity: 200 }, { id: 2, productId: 1, quantity: 5 }]
  let products = [{ id: 1, name: 'egg', price: 1 }, { id: 2, name: 'juice', price: 500 }]

  it('should exist', () => {
    expect(topSellingProductByQuantity).to.be.ok
  })

  it('should return a single Object', () => {
    expect(topSellingProductByQuantity(orders, products).toString()).to.eql('[object Object]')
  })

  it('should return the order with the most highest quantity', () => {
    expect(topSellingProductByQuantity(orders, products)).to.eql({ id: 2, name: 'juice', price: 500 })
  })
})

describe('function usersWithOrders', () => {
  let users = [{ id: 1, name: 'spartacus' }, { id: 2, name: 'xerxes' }]
  let orders = [{ id: 1, userId: 2 }]

  it('exists', () => {
    expect(usersWithOrders).to.be.ok
  })

  it('should return a single Object', () => {
    expect(usersWithOrders(users, orders).toString()).to.eql('[object Object]')
  })

  it('should return an array of users that have placed orders', () => {
    expect(usersWithOrders(users, orders)).to.eql([{ id: 2, name: 'xerxes' }])
  })
})
