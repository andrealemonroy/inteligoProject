const preguntas = document.getElementById("question");
const respuestas = document.getElementById("responses");
const imagenTemplate = document.getElementById('imagenes');


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
const arr = [];
const ref = firebase.database().ref('/questions');



ref.once('value', (data) => {
  //   fetch('./point.json')
  // .then((res)=>{
  //   return res.json()
  // })
  // .then((resp)=>{
  //   console.log(resp);

  // })
  // console.log(resp);

  position = 0;
  // console.log(data.key.length);
  const response = Object.values(data.val())
  createTemplate(response, position, 5);
  // const id= document.querySelector('input[name='+resp[4]+']:checked').id;
  // console.log(id);


  document.getElementById('next').addEventListener("click", () => {
    const val = document.querySelector('input[name="group1"]:checked').value;
    puntage(val);
    position = 1;
    createTemplate(response, position, 3);

    document.getElementById('next').addEventListener("click", () => {
      position = 2;
      createTemplate(response, position, 4);

      document.getElementById('next').addEventListener("click", () => {
        position = 3
        createTemplate(response, position, 5);

        document.getElementById('next').addEventListener("click", () => {
          position = 4
          imagenFunction('./imagenes/image5.PNG');
          createTemplate(response, position, 5);
          document.getElementById('next').addEventListener("click", () => {
            position = 5
            imagenTemplate.innerHTML = '';
            createTemplate(response, position, 4);
            document.getElementById('next').addEventListener('click', () => {
              position = 6
              imagenTemplate.innerHTML = '';
              createTemplate(response, position, 5);
              document.getElementById('next').addEventListener('click', () => {
                position = 7
                imagenFunction('./imagenes/pregunat8.PNG')
                createTemplate(response, position, 5);
                document.getElementById('next').addEventListener('click', () => {
                  window.location.href = "../src/result.html";
                  $(document).ready(function () {
                    $('.modal').modal();
                  })
                })
              })
            })
          })
        })

      })

    })

  })

});

// const refAnswers = firebase.database().ref('/puntaje');
// refAnswers.once('value', (data) => {
//   console.log(data.val());

const puntage = (val) => {
  arr.push(val);
  const newArray = arr.map(el => {
    return parseFloat(el[0])
  })
  // if (data === val) {
  //   console.log('yay')
  // }
  let total1 = 0;
  let total2 = 0;
  let score1 = 0;
  let score2 = 0;
  let score3 = 0;
  let score4 = 0;
  let score5 = 0;
  let score6 = 0;
  let score7 = 0;
  let score8 = 0;
  console.log(newArray);
switch (newArray[0]) {
    case 1:
        score1 = 0;
        break;
    case 2:
    score1 = 3;
        break;
    case 3:
    score1 = 0;
        break;
    case 4:
    score1 = 0;
        break;    
    case 5:
    score1 = 0;
        break;
    default:
    score1 = 0;
}

switch (newArray[1]) {
  case 1:
      score2 = 3;
      break;
  case 2:
  score2 = 5;
      break;
  case 3:
  score2 = 7;
      break;
  default:
  score2 = 0;
}

switch (newArray[2]) {
  case 1:
      score3 = 0;
      break;
  case 2:
  score3 = 2;
      break;
  case 3:
  score3 = 4;
      break;
  case 4:
  score3 = 8;
      break;  
  default:
  score3 = 0;
}

switch (newArray[3]) {
  case 1:
      score4 = 0;
      break;
  case 2:
  score4 = 2;
      break;
  case 3:
  score4 = 4;
      break;
  case 4:
  score4 = 6;
      break;    
  case 5:
  score4 = 8;
      break;
  default:
  score4 = 0;
}

switch (newArray[4]) {
  case 1:
      score5 = 0;
      break;
  case 2:
  score5 = 2;
      break;
  case 3:
  score5 = 4;
      break;
  case 4:
  score5 = 6;
      break;    
  case 5:
  score5 = 8;
      break;
  default:
  score5 = 0;
}

switch (newArray[5]) {
  case 1:
      score6 = 0;
      break;
  case 2:
  score6 = 2;
      break;
  case 3:
  score6 = 4;
      break;
  case 4:
  score6 = 8;
      break;    
  default:
  score6 = 0;
}
console.log(newArray[5]);


switch (newArray[6]) {
  case 1:
      score7 = 0;
      break;
  case 2:
  score7 = 2;
      break;
  case 3:
  score7 = 4;
      break;
  case 4:
  score7 = 6;
      break;    
  case 5:
  score7 = 8;
      break;
  default:
  score7 = 0;
}
switch (newArray[7]) {
  case 1:
      score8 = 0;
      break;
  case 2:
      score8 = 2;
      break;
  case 3:
      score8 = 4;
      break;
  case 4:
      score8 = 6;
      break;    
  case 5:
    score8 = 8;
      break;
  default:
    score8 = 0;
}

total1 = score1 + score2 + score3 + score4;
total2 = score5 + score6 + score7 + score8;
console.log(total1);
console.log(total2);

perfilFunction(total1,total2)

}


// data['group0']

// })


const createTemplate = (response, position, num) => {
  preguntas.innerHTML =  `<p>${response[position].text}</p>` 
  respuestas.innerHTML = '';
  for (let i = 1; i <= num; i++) {
    respuestas.innerHTML += `
<p>
        <label for="rpta${i}">
          <input class="with-gap" value="${response[position].options['respuesta' + i]}" name="group1" type="radio" id="rpta${i}"  />
          <span>${response[position].options['respuesta' + i]}</span>
        </label>
</p>  `

  }
  position = position+1;
};

const imagenFunction = (image) => {
  imagenTemplate.innerHTML = `<img src=${image} alt='perritos'/>`
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


// perfilFunction(10, 24)