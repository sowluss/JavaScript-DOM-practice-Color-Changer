// TEXT COLOR CHANGE

const grey = document.getElementById('grey');
grey.addEventListener('click', function () {
  document.getElementById('title').style.color = 'grey';
});

const orange = document.getElementById('orange');
orange.addEventListener('click', function () {
  document.getElementById('title').style.color = 'orangered';
});

const blue = document.getElementById('blue');
blue.addEventListener('click', function () {
  document.getElementById('title').style.color = 'blue';
});

const green = document.getElementById('green');
green.addEventListener('click', function () {
  document.getElementById('title').style.color = 'green';
});

const yellow = document.getElementById('yellow');
yellow.addEventListener('click', function () {
  document.getElementById('title').style.color = 'yellow';
});


// BACKGROUND COLOR CHANGE

const darkGreen = document.getElementById('dark-green');
darkGreen.addEventListener('click', function(){
  document.body.style.backgroundColor = '#2F4F4F';
});

const darkOrange = document.getElementById('dark-orange');
darkOrange.addEventListener('click', function(){
  document.body.style.backgroundColor = '#602105';
});

const darkBlue = document.getElementById('dark-blue');
darkBlue.addEventListener('click', function(){
  document.body.style.backgroundColor = '#090E51';
});

const darkYellow = document.getElementById('dark-yellow');
darkYellow.addEventListener('click', function(){
  document.body.style.backgroundColor = '#76710A';
});

const darkRed = document.getElementById('dark-red');
darkRed.addEventListener('click', function(){
  document.body.style.backgroundColor = '#7D0E19';
});