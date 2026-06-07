const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: { //put our methods in main.js so that they can be used in our html file
        addToCart() {
            this.cart++;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart--;
            }
        },
        updateImage(variantImage) { //sets id=image to the passed image url
            this.image = variantImage;
        }
    }
})
