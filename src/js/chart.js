let tipoInversor = window.location.search.slice(1).split('&').map(p => p.split('=')).reduce((obj, [key, value]) => ({ ...obj,
  [key]: value
}), {});
$('#titleInversor').html(tipoInversor.tipoInversor);
crearChart(tipoInversor.tipoInversor);

function crearChart(tipoInversor) {
  const porcentajes = {
    moderado: [35, 12, 5, 48],
    defensivo: [100, 0, 0, 0],
    altamenteConservador: [60, 40, 0, 0],
    agresivo: [2, 28, 50, 20],
    conservador: [10, 73, 12, 5]

  }

  window.myChart = new Chart(document.getElementById("inversorPie"), {
    type: 'pie',
    data: {
      labels: ["Caja y equivalentes", "Renta Fija", "Renta Variable", "Renta Alternativa"],
      datasets: [{
        // label: "tipo de inversor",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
        data: porcentajes[tipoInversor]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Tipo de inversión'
      }
    }
  });

}