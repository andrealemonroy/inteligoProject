$(document).ready(function(){
  $('.sidenav').sidenav();
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