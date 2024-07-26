// Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.

class Product {
  display() {
    console.log("Product");
  }
}


class ProductFactory {
  createProduct() {
    return new Product()
  }
}

const factory = new ProductFactory();
const product = factory.createProduct();

product.display(); // Product