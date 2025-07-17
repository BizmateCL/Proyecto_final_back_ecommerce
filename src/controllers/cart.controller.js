const Cart = require('../models/cart.model');
const User = require('../models/user.model');
/*const stripe = require("stripe")(process.env.STRIPE_KEY);*/

exports.createCheckoutSession = async (req, res) => {
    const userID = req.user.id;
    const foundUser = await User.findOne({ _id: userID });
    const foundCart = await Cart.findById(foundUser.cart).populate({
        path: 'products'
    })

    const line_items = foundCart.products.map((e) => {
        return {
            price: e.priceID,
            quantity: e.quantity
        }
    })

    /*const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${process.env.STRIPE_SUCCESS_URL}`,
        cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
        customer_email: foundUser.email
    })*/

    res.json({
        session_url: session.url,
        session
    })
}

exports.getCart = async (req, res) => {
    const userID = req.user.id;
    const foundUser = await User.findOne({ _id: userID });
    const foundCart = await Cart.findOne({ _id: foundUser.cart });
    res.json({
        cart: foundCart
    })
}

exports.editCart = async (req, res) => {
    const userID = req.user.id;
    const foundUser = await User.findOne({ _id: userID });
    const { products } = req.body;
    const updatedCart = await Cart.findByIdAndUpdate(
        foundUser.cart,
        {
            products
        },
        { new: true }
    )

    res.json({
        msg: 'Tu carrito fue actualizado',
        updatedCart
    })
}

