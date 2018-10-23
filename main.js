'use strict';

// Global variables
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
// Chart Data Variables
var ctx = document.getElementById('productChart').getContext('2d');
var minColorValue = 0;
var maxColorValue = 90;

// _____Product Constructor Function______
var ProductImage = function (src, name) {
  this.src = src;
  this.name = name;
  this.likes = 0;
  this.appeared = 0;
  allProductImages.push(this);
};

// _____Storage Function______
var storeLocalStorage = function () {
  if(localStorage.getItem('allProductImages')) {
    allProductImages =JSON.parse(localStorage.getItem('allProductImages'));
  } else {
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
  }
};

storeLocalStorage();
// _____setting Storage Function______

var allProductImagesStorage = function () {
  localStorage.setItem('allProductImages', JSON.stringify(allProductImages));
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

    stopProductCounter();
    renderGraph();
  }
};

productSelection.addEventListener('click', productClickHandler);

var stopProductCounter = function () {
  if (productCounter > 24) {
    productSelection.removeEventListener ('click', productClickHandler);
    allProductImagesStorage();
    // var productForm = document.getElementById ('productList');
    // for (var i =0; i < allProductImages.length; i++) {
    //   var productLiEl = document.createElement('li');
    //   var liResult = (allProductImages[i].name + ' was liked ' + allProductImages[i].likes + ' times.');
    //   productLiEl.textContent = liResult;
    //   productForm.appendChild(productLiEl);

    // }
  }
};

// ___render Graph___

var randomizedColor = function(){
  var r = 230;
  var g = Math.floor(Math.random() * (maxColorValue - minColorValue));
  var b = Math.floor(Math.random() * (maxColorValue - minColorValue));
  var a = .9;

  var colorValue =`rgba(${r}, ${g}, ${b}, ${a})`;
  return colorValue;
};

var renderGraph = function(){

  var productNames = [];
  var productLikes = [];
  var colors = [];
  // var productLikes = JSON.parse(localStorage.getItem('likes'));
  console.log(productLikes);


  var rgbColorSelector = function(){
    for(var i = 0; i < 20; i++)
      colors.push(randomizedColor());
  };

  rgbColorSelector();

  for (var i in allProductImages){
    productNames.push(allProductImages[i].name);
    productLikes.push(allProductImages[i].likes);
    console.log(productLikes);
    colors.push();
  }

  var chartData = {
    labels: productNames,
    datasets: [{
      label: 'Busmall Preferred Products',
      data: productLikes,
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1
    }]
  };

  var chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          max:8,
          stepSize: 2
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false
        }
      }]
    },
    animation: {
      duration: 2000,
    },
    responsive: true,
  };

  var productChart = {
    type: 'bar',
    data: chartData,
    options: chartOptions
  };

  //render a new chart
  var myChart = new Chart(ctx , productChart);
};
