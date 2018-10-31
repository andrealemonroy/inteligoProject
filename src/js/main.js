const respuestas = document.getElementById("responses");

// new Chart(document.getElementById("inversorPie"), {
//   type: 'pie',
//   data: {
//     labels: ["Caja y equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"],
//     datasets: [{
//       // label: "tipo de inversor",
//       backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
//       data: [35, 12, 5, 48]
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'Tipo de inversión'
//     }
//   }
// });
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

$(document).ready(function () {
  $('.sidenav').sidenav();
});

const ref = firebase.database().ref('/questions');

ref.once('value', (data) => {
  position = 0;
  console.log(data.key.length);
  const response = Object.values(data.val())
  createTemplate(response, position);

  document.getElementById('next').addEventListener("click", () => {
    if (position < 7) {
      position = position + 1;
      createTemplate(response, position);
    } else if (position = 6) {
      $(document).ready(function () {
        $('.modal').modal();
      });
    }
  })
})



const createTemplate = (response, position) => {
  respuestas.innerHTML = `
    <form action="#">
<p>

        <label for="rpta1">
          <input class="with-gap" name="group1" type="radio" id="rpta1"  />
          <span>${response[position].options['respuesta1']}</span>
        </label>
</p>
<p>
        <label for="rpta2">
          <input class="with-gap" name="group1" type="radio" id="rpta2"/>
          <span>${response[position].options['respuesta2']}</span>
        </label>
        </p>
        <p>
        <label for="rpta3">
          <input class="with-gap" name="group1" type="radio" id="rpta3" />
          <span>${response[position].options['respuesta3']}</span>
        </label>
        </p>
        <p>
        <label for="rpta4">
          <input class="with-gap" name="group1" type="radio" id="rpta4" />
          <span>${response[position].options['respuesta4']}</span>
        </label>
        </p>
        <p>
        <label for="rpta5">
          <input class="with-gap" name="group1" type="radio" id="rpta5" />
          <span>${response[position].options['respuesta5']}</span>
        </label>
        </p>
  </form>
  `


}

// })
// console.log(dat.key);
// let client = dat.key;
// console.log(dat.val());
//   extraerDataVisitator = visitator.val();
// sendEmailMandrill();


// let total2= 14;

// let total1= 3 + 2 ;

const perfilFunction = (total1, total2) => {
  if (total2 <= 32 && total2 >= 29) {
    if (total1 <= 31 && total1 >= 26) {
      return console.log('agresivo');


    } else if (total1 < 26 && total1 >= 22) {
      return console.log('moderado');
    } else if (total1 < 22 && total2 >= 10) {
      return console.log('conservador');
    }
    return console.log('altamente conservador');
  } else if (total2 < 29 && total2 >= 21) {
    if (total1 <= 31 && total2 >= 28) {
      return console.log('agresivo');
    } else if (total1 < 28 && total1 >= 24) {
      return console.log('moderado');
    } else if (total1 < 24 && total2 >= 12) {
      return console.log('conservador');
    }
    return console.log('altamente conservador');
  } else if (total2 < 21 && total2 >= 13) {
    if (total1 <= 31 && total2 >= 26) {
      return console.log('moderado');
    } else if (total1 < 26 && total1 >= 14) {
      return console.log('conservador');
    } else if (total1 < 14 && total2 >= 4) {
      return console.log('altamente conservador');
    }
    return console.log('defensivo');
  } else if (total2 < 13 && total2 >= 5) {
    if (total1 <= 31 && total2 >= 16) {
      return console.log('conservador');
    } else if (total1 < 16 && total1 >= 6) {
      return console.log('altamente conservador');
    }
    return console.log('defensivo');
  } else {
    if (total1 <= 31 && total2 >= 18) {
      return console.log('conservador');
    } else if (total1 < 18 && total1 >= 8) {
      return console.log('altamente conservador');
    }
    return console.log('defensivo');
  }
}


perfilFunction(10, 24)