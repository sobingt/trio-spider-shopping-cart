var cart = function(){
  this.items = [];
  this.price = 0;
  this.removeFromCartById = function(id){
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].id==id)
        this.items.splice(i,1);
    }    
  };
  this.removeFromCartByName = function(name){
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].name==name)
        this.items.splice(i,1);
    }
  };
  this.addToCart = function(product){
    this.items.push(product);
    this.price+=product.price;
  };
  
};
cartObject = new cart();
console.log(cartObject.price);
var product = function(id, name, description, price){
  this.id = id;
  this.name =name;
  this.description = description;
  this.price = price;
  this.addToCart = function(){
    cartObject.items.push(this);
    cartObject.price+=this.price;
  };
};

var laptop = new product(1, "Dell","Dell 128gb SSD 4GB RAM",2000);
laptop.addToCart();
//console.log(cartObject);
laptop.addToCart();
laptop.addToCart();
laptop.addToCart();
//using cart object method
cartObject.addToCart(laptop);
console.log(cartObject.items.length);
cartObject.removeFromCartById(1);
console.log(cartObject.items);
cartObject.removeFromCartById(1);
console.log(cartObject.items);
cartObject.removeFromCartByName("Dell")
console.log(cartObject.items);
