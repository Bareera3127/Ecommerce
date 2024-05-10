const Product = require('../models/product');
const Cart = require('../models/cart');

const addtoCart = async (req, res) => {
  const { productId, quantity } = req.body;
  console.log(productId)
  try {
    //check if product exists or not
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if cart exists for user
    const cart = await Cart.findOne({ user: req.userId });
    if (!cart) {
      // Create new cart
      const newCart = await Cart.create({
        user: req.userId,
        products: [{ product: productId, quantity }],
      });

      return res.status(201).json(newCart); 
    }
    // Cart exists, update it 
    //findIndex is array method in javascript
    // finding the index (or position) of a specific product in the products array of a cart. 
    //p as a placeholder for "current product being checked."
    //p.product.toString(): Converts the product's identifier from a type that might not be a regular string (like an ObjectId in MongoDB) into a standard string.
    //=== productId: This compares the converted string to productId, which is the ID of the product we're looking for.

    const index = cart.products.findIndex(
      (p) => p.product.toString() === productId
    );
    if (index > -1) {
      //index > -1 is used to verify that the product exists in the cart.products array. If this condition is true, the existing product's quantity is increased by the specified amount
      // Product exists in cart, update quantity
      cart.products[index].quantity += quantity;
    } else {
      // New product, add to cart
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.json({ message: 'product added to cart' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

const getUserCart = async (req, res) => {
  // populate is used to get nested documents/data
  const cart = await Cart.findOne({ user: req.userId }).populate(
    "products.product"
  );
  // console.log(cart.products)
  res.json(cart);
}

//.populate("products.product"): This part fills in additional details about each product in the cart. Normally, the cart might only store product IDs to save space. With populate(), it fetches each product's full data (like name, price, etc.) from the product's collection in the database. This is useful because it allows you to get all necessary product information.
//Cart.findOne({ user: req.userId }): This line searches the database for a shopping cart that belongs to the current user. The req.userId is assumed to be the ID of the user who is logged in and making the request.
//When you call .populate("products.product"), you're instructing Mongoose to go through each item in the products array of the Cart document, look at the product field (which contains an ID), and replace this ID with the actual document from the Product collection that corresponds to the ID.


const deleteFromCart = async (req, res) => {
  const { productId } = req.params;

  try {
    // Find cart
    const cart = await Cart.findOne({ user: req.userId });

    // Find product index in cart
    const index = cart.products.findIndex(
      (p) => p.product.toString() === productId
    );
    console.log(index)

    // If product not in cart, throw error
    if (index === -1) {
      return res.status(404).json({ message: "Product not in cart" });
    }

    // Remove product from cart
    cart.products.splice(index, 1);
    //The splice method is used here to remove items from an array.
    //index: This is the position of the product to be removed, which was found using findIndex.
    //1: This indicates the number of items to remove from the array starting from the index. Here, it means "remove exactly one item."

    // Save updated cart
    await cart.save();

    res.json({ message: 'Removed from cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}


module.exports = {
  addtoCart,
  getUserCart,
  deleteFromCart
}