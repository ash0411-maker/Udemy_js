//  ------------   ES5   ---------------------
function createBookShop(inventory) {
  return {
    inventory: inventory,

    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0 );
    },
    priceForTitle: function() {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  { title: 'ハリーポッター', price: '1000' },
  { title: 'MAD MAX', price: '9000' },
];

const bookShop = createBookShop(inventory);



//  ------------   ES6   ---------------------
function createBookShop(inventory) {
  return {
    inventory,

    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0 );
    },
    priceForTitle() {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  { title: 'ハリーポッター', price: '1000' },
  { title: 'MAD MAX', price: '9000' },
];

const bookShop = createBookShop(inventory);
