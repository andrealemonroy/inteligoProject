
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAWhYg7ooZsREWBlcDS4yCrKUOh2tQhVVk",
  authDomain: "inteligo-hackaton.firebaseapp.com",
  databaseURL: "https://inteligo-hackaton.firebaseio.com",
  projectId: "inteligo-hackaton",
  storageBucket: "inteligo-hackaton.appspot.com",
  messagingSenderId: "212977010921"
};
firebase.initializeApp(config);
let database = firebase.database();

$(document).ready(function(){
  $('.sidenav').sidenav();
});

let ref = firebase.database().ref('/questions');
ref.once('value', (data) => {
  data.forEach(dat => {
    // console.log(dat.key);
    let client = dat.key;
    console.log(dat.val());
    //   extraerDataVisitator = visitator.val();
    // sendEmailMandrill();
  })
});

new Chart(document.getElementById("inversorPie"), {
  type: 'pie',
  data: {
    labels: ["Caja y equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"],
    datasets: [{
      // label: "tipo de inversor",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
      data: [35, 12, 5, 48]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Tipo de inversión'
    }
  }
});
