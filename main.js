'use strict';

// global vars
var productOptionLeft = document.getElementById ('leftProduct');
var productOptionMiddle = document.getElementById ('middleProduct');
var productOptionRight = document.getElementById ('rightProduct');
var productSelection = document.getElementById ('selectChoice');
var leftProductText= document.getElementById ('ProductOneText');
var middleProductText = document.getElementById ('ProductTwoText');
var rightProductText = document.getElementById ('ProductThreeText');
var leftProductArrayIndex = 0;
var middleProductArrayIndex = 1;
var rightProductArrayIndex = 2;
var productCounter = 0;
var allProductImages = [];



// _____Product Constructor Function______
var ProductImage = function (src, name) {
  this.src = src;
  this.name = name;
  this.likes = 0;
  this.appeared = 0;
  allProductImages.push(this);
};

//____prototype____
ProductImage.prototype.renderProduct = function () {
  productOptionLeft.src = this.src;
  productOptionMiddle.src = this.src;
  productOptionRight.src = this.src;
};

// ____Product Ranking____
// ProductImage.productRanking = function () {
//   for (var i in this.allProductImages[i])
// };


// //event listeners and handlers
var productClickHandler = function (event) {
  if(event.target.id === 'leftProduct' || event.target.id === 'middleProduct' || event.target.id === 'rightProduct') {

    do {
      var randomNumberLeft = Math.floor(Math.random()*allProductImages.length);
    } while (randomNumberLeft === leftProductArrayIndex || randomNumberLeft === middleProductArrayIndex || randomNumberLeft === rightProductArrayIndex || randomNumberLeft ===randomNumberMiddle || randomNumberLeft === randomNumberRight);

    do {
      var randomNumberMiddle = Math.floor(Math.random()*allProductImages.length);
    } while (randomNumberMiddle === middleProductArrayIndex || randomNumberMiddle === leftProductArrayIndex || randomNumberMiddle === rightProductArrayIndex || randomNumberMiddle === randomNumberLeft || randomNumberMiddle === randomNumberRight);

    do {
      var randomNumberRight = Math.floor(Math.random()*allProductImages.length);
    } while (randomNumberRight === leftProductArrayIndex || randomNumberRight === middleProductArrayIndex || randomNumberRight === rightProductArrayIndex || randomNumberRight === randomNumberMiddle || randomNumberRight === randomNumberLeft);


    if(event.target.id === 'leftProduct') {
      allProductImages[leftProductArrayIndex].likes++;
      console.log ('left Product Selected');
    } else if (event.target.id === 'middleProduct') {
      allProductImages[middleProductArrayIndex].likes++;
      console.log ('middle Product Selected');
    } else {allProductImages[rightProductArrayIndex].likes++;
      console.log('right product selected');
    }

    allProductImages[leftProductArrayIndex].appeared++;
    allProductImages[middleProductArrayIndex].appeared++;
    allProductImages[rightProductArrayIndex].appeared++;


    leftProductArrayIndex = randomNumberLeft;
    middleProductArrayIndex = randomNumberMiddle;
    rightProductArrayIndex = randomNumberRight;

    productOptionLeft.src = allProductImages[randomNumberLeft].src;
    productOptionMiddle.src = allProductImages[randomNumberMiddle].src;
    productOptionRight.src = allProductImages[randomNumberRight].src;

    leftProductText.textContent = allProductImages[randomNumberLeft].name;
    middleProductText.textContent = allProductImages[randomNumberMiddle].name;
    rightProductText.textContent = allProductImages[randomNumberRight].name;

    productCounter++;
  }
};

productSelection.addEventListener('click', productClickHandler);

var counter = function () {
  if (productCounter >= 25) {
    productSelection.removeEventListener ('click', productClickHandler);

    var productForm = document.getElementById ('productForm');
    var productLiEl = document.createElement('li');
    var liResult = (ProductImage.name + 'was liked' + ProductImage.likes + ' times.');
    productLiEl.textContent = liResult;
    productForm.appendChild(productLiEl);
  }
};

counter();

new ProductImage ('IMG/bag.jpg', 'nerdy luggage');
new ProductImage ('IMG/banana.jpg', 'banana cutter');
new ProductImage ('IMG/bathroom.jpg', 'bathroom reader');
new ProductImage ('IMG/boots.jpg', 'yellow rain boots');
new ProductImage ('IMG/breakfast.jpg', 'breakfast maker');
new ProductImage ('IMG/bubblegum.jpg', 'meatball bubblegum');
new ProductImage ('IMG/chair.jpg', 'red chair');
new ProductImage ('IMG/cthulhu.jpg', 'toy cthulhu');
new ProductImage ('IMG/dog-duck.jpg', 'duck dog mask');
new ProductImage ('IMG/dragon.jpg', 'dragon meat');
new ProductImage ('IMG/pen.jpg', 'pen silverware');
new ProductImage ('IMG/pet-sweep.jpg', 'pet mop');
new ProductImage ('IMG/scissors.jpg', 'pizza scissors');
new ProductImage ('IMG/shark.jpg', 'shark sleeping bag');
new ProductImage ('IMG/sweep.png', 'baby mop');
new ProductImage ('IMG/tauntaun.jpg', 'tauntaun sleeping bag');
new ProductImage ('IMG/unicorn.jpg', 'unicorn meat');
new ProductImage ('IMG/usb.gif', 'tentacle usb');
new ProductImage ('IMG/water-can.jpg', 'self-watering can');
new ProductImage ('IMG/wine-glass.jpg', 'wine glass');

console.log(allProductImages);

