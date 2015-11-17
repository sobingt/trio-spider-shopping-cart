//cart object template
var cart = function() {
    this.items = [];
    this.price = 0;
    this.removeFromCartById = function(id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id)
                this.items.splice(i, 1);
        }
    };
    this.removeFromCartByName = function(name) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name == name)
                this.items.splice(i, 1);
        }
    };
    this.addToCart = function(product) {
        this.items.push(product);
        this.price += product.price;
    };
};
//cart object template
cartObject = new cart();

//product object template
var product = function(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.addToCart = function() {
        cartObject.items.push(this);
        cartObject.price += this.price;
    };
};
products = [];

var init = function() {

    products[0] = new product(1, "Dell", "Dell 128gb SSD 4GB RAM", 2000);
    products[1] = new product(2, "Sony", "Sony 128gb SSD 4GB RAM", 3000);
    products[2] = new product(3, "Lenovo", "Lenovo 128gb SSD 4GB RAM", 2500);
    products[3] = new product(4, "HP", "HP 128gb SSD 4GB RAM", 1200);
    cartObject.addToCart(products[0]);
    for (var i = 0; i < products.length; i++) {
        div = document.createElement('div');
        div.className = 'product';
        div.setAttribute('id', 'products[' + i + ']'); //products[0] //products[1]
        div.setAttribute('data-id', products[i].id);
        div.innerHTML = '<span class="productName">' + products[i].name + '</span><span class="productPrice">' + products[i].price + '</span><span class="productDesc">' + products[i].description + '</span><span class="btn">Add to Cart</span>';
        document.body.appendChild(div);
    }

    div = document.createElement('div');
    div.className = 'cart';
    div.innerHTML = '<div>Total price <span class="price">' + cartObject.price + '</span></div><div>Total items <span class="cartitems">' + cartObject.items.length + '</span></div>';
    for (var i = 0; i < cartObject.items.length; i++) {
        var cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cartItem';
        cartItemDiv.setAttribute('id', 'cartItem[' + i + ']');
        cartItemDiv.setAttribute('data-id', cartObject.items[i].id);
        cartItemDiv.innerHTML = '<span class="productName">' + cartObject.items[i].name + '</span><span class="productPrice">' + cartObject.items[i].price + '</span><span class="remove" onclick="">X</span>';
        div.appendChild(cartItemDiv);

    }
    document.body.appendChild(div);

};

init();

