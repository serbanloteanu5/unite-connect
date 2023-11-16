// Filename: AdvancedWebApplication.js
//
// Description: This is an advanced web application written in JavaScript. It simulates an e-commerce platform with features
//              like user authentication, product listing, cart management, discount calculations, and order processing.
//              This application demonstrates sophisticated programming techniques and follows best practices.

// ---------- User Authentication ----------

// User class represents a registered user on the platform
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    // Simulate login logic here
    console.log('User logged in successfully');
  }

  logout() {
    // Simulate logout logic here
    console.log('User logged out successfully');
  }
}

// ---------- Product Listing ----------

// Product class represents a product available for purchase
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  displayProduct() {
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price}`);
    console.log(`Description: ${this.description}`);
  }
}

// ---------- Cart Management ----------

// Cart class represents the shopping cart of a user
class Cart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log(`Added ${item.name} to the cart.`);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Removed ${item.name} from the cart.`);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
}

// ---------- Discount Calculations ----------

// Discount class represents a discount applied to the cart
class Discount {
  constructor(name, percentage) {
    this.name = name;
    this.percentage = percentage;
  }

  applyDiscount(cart) {
    const totalPrice = cart.getTotalPrice();
    const discountedPrice = totalPrice * (1 - this.percentage / 100);
    console.log(`Applied ${this.name} discount. New total price: ${discountedPrice}`);
  }
}

// ---------- Order Processing ----------

// Order class represents an order created by a user
class Order {
  constructor(user, items, totalPrice) {
    this.user = user;
    this.items = items;
    this.totalPrice = totalPrice;
  }

  processOrder() {
    if (this.user) {
      console.log(`Processing order for user ${this.user.username}`);
      // Logic to process the order goes here
      console.log('Order processed successfully');
    } else {
      console.log('No user found. Order cannot be processed.');
    }
  }
}

// ---------- Usage Example ----------

const user = new User('john', 'password123');
user.login();

const product1 = new Product('Phone', 999, 'A high-end smartphone');
const product2 = new Product('Laptop', 1499, 'A powerful laptop');
const product3 = new Product('Headphones', 199, 'Wireless headphones');

const cart = new Cart(user);
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

const discount = new Discount('Holiday Sale', 10);
discount.applyDiscount(cart);

console.log(`Total Price: ${cart.getTotalPrice()}`);

const order = new Order(user, cart.items, cart.getTotalPrice());
order.processOrder();

user.logout();