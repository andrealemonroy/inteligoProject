// const newPostKey = firebase.database().ref().child("scores").push().key;
// firebase.database().ref("scores/"+ newPostKey).set({
//   "group0": [{"rpta1": 0}, {"rpta2": 2}, {"rpta3": 4}, {"rpta4": 6}, {"rpta5": 8}],
//   "group1": [{"rpta1": 3}, {"rpta2": 5}, {"rpta3": 7}],
//   "group2": [{"rpta1": 0}, {"rpta2": 2}, {"rpta3": 4}, {"rpta4": 8}],
//   "group3": [{"rpta1": 0}, {"rpta2": 2}, {"rpta3": 4}, {"rpta4": 6}, {"rpta5": 8}],
//   "group4": [{"rpta1": 0}, {"rpta2": 2}, {"rpta3": 4}, {"rpta4": 6}, {"rpta5": 8}],
//   "group5": [{"rpta1": 0}, {"rpta2": 2}, {"rpta3": 4}, {"rpta4": 8}],
//   "group6": [{"rpta1": 0}, {"rpta2": 2}, {"rpta3": 4}, {"rpta4": 6}, {"rpta5": 8}],
//   "group7": [{"rpta1": 0}, {"rpta2": 2}, {"rpta3": 4}, {"rpta4": 6}, {"rpta5": 8}]  
// }); 

// console.log();
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  }) 
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);    //slider init

  $(document).ready(function() {
    $(".sidenav").sidenav();
  });