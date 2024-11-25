const ObjectId = require("mongodb").ObjectId

const orders = Array.from({length: 22}).map((_, idx) => {
    let day = 20
    let hour, subtotal = 100;

    if (idx < 10) {
      hour = "0" + idx;
    } else if (idx > 16 && idx < 21) {
      hour = idx;
      subtotal = 100 + 12 * idx;
    } else {
      hour = idx;
    }
    return {
        user:ObjectId("6551f487d6c8cd3ab928fdc3"),
        orderTotal: {
            itemsCount: 3,
            cartSubtotal: subtotal
        },
        cartItems: [
            {
                name: "Product name",
                price: 34,
                image: {path: "/images/tablets-category.png"},
                quantity: 3,
                count: 12
            }
        ],
        paymentMethod: "PayPal",
        isPaid: false,
        isDelivered: false,
        createdAt: `2022-03-${day}T${hour}:12:36.490+00:00`
    }
})

module.exports = orders
