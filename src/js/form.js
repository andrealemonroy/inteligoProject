$(document).ready(function() {
  $(".datepicker").datepicker();
});


const addInfo = document.getElementById("add_info");
addInfo.addEventListener("click", () => {
  event.preventDefault();
  console.log("No dejes nada en blanco");
  const name = document.getElementById("icon_name").value;
  const lastname = document.getElementById("icon_lastname").value;
  const birthday = document.getElementById("icon_birthday").value;
  const gender = document.getElementById("icon_people").value;
  const phone = document.getElementById("icon_phone").value;
  const mail = document.getElementById("icon_email").value;

  const dataSave = firebase
    .database()
    .ref()
    .child("registro");
  dataSave.push({
    name: name,
    lastname: lastname,
    birthday: birthday,
    gender: gender,
    phone: phone,
    mail: mail
  });
});
