// Chart.js - Simple yet flexible JavaScript charting for designers & developers
// https://www.chartjs.org/
const $myChart1 = document.querySelector('[data-js="chart1"]');
const $myChart2 = document.querySelector('[data-js="chart2"]').getContext('2d');
const $myChart3 = document.querySelector('[data-js="chart3"]');
const $myChart4 = document.querySelector('[data-js="chart4"]');

Chart.defaults.global.animation.duration = 2000;
Chart.defaults.global.title.display = false;
Chart.defaults.global.title.text = "Gráfico";
Chart.defaults.global.title.position = 'bottom';
Chart.defaults.global.defaultFontColor = '#666';
Chart.defaults.global.defaultFontSize = 10;
// Chart.defaults.global.tooltips.backgroundColor = '#fff';
Chart.defaults.global.tooltips.borderColor = '#fff';
Chart.defaults.global.legend.labels.padding = 0;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';

Chart.defaults.global.legend.display = false;

// Chart 1
const chart1 = new Chart($myChart1, {
  type: 'bar',
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", 'Julho'],
    datasets: [{
      label: "TO DO",
      fill: false,
      lineTension: 0,
      data: [15, 25, 19, 32, 20, 40],
      pointBorderColor: "#4bc0c0",
      borderColor: '#4bc0c0',
      borderWidth: 2,
      showLine: true,
    }, {
      label: "DONE",
      fill: false,
      lineTension: 0,
      startAngle: 2,
      data: [20, 40, 20, 45, 25, 60],
      backgroundColor: "transparent",
      pointBorderColor: "#ff6384",
      borderColor: '#ff6384',
      borderWidth: 2,
      showLine: true,
    }]
  },
});
//  Chart 2
const chart2 = new Chart($myChart2, {
  type: 'line',
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", 'Maio', 'Junho', 'Julho', 'Agosto'],
    datasets: [{
      label: "Commits",
      backgroundColor: '#ff6384',
      borderColor: '#ff4f74',
      borderWidth: 2,
      pointBorderColor: false,
      data: [5, 10, 5, 8, 20, 30, 20, 10],
      fill: false,
      lineTension: .4,
    }, {
      label: "Issues",
      fill: false,
      lineTension: .4,
      startAngle: 2,
      data: [20, 14, 20, 25, 10, 15, 25, 10],
      backgroundColor: "transparent",
      pointBorderColor: "#4bc0c0",
      borderColor: '#4bc0c0',
      borderWidth: 2,
      showLine: true,
    }, {
      label: "PRs",
      fill: false,
      lineTension: .4,
      startAngle: 2,
      data: [40, 20, 5, 10, 30, 15, 15, 10],
      backgroundColor: "transparent",
      pointBorderColor: "#ffcd56",
      borderColor: '#ffcd56',
      borderWidth: 2,
      showLine: true,
    }]
  }
});
// Chart 3
const chart3 = new Chart($myChart3, {
  type: 'line',
  data: {
    labels: ["00", "01", "02", "03", "04", '05', "06", "07"],
    datasets: [{
      label: "HTML",
      fill: 'start',
      lineTension: 0,
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      borderColor: '#4f98ff',
      borderWidth: 2,
      showLine: true,
      data: [1, 4, 0, 2, 1, 7, 3, 1]
    },{
      label: "JavaScript",
      fill: 'start',
      lineTension: 0,
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      backgroundColor: '#ffcd56',
      borderColor: '#ffcd56',
      borderWidth: 2,
      showLine: true,
      data: [2, 1, 4, 2, 0, 1, 5, 6]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Horas'
    },
    legend: {
      display: true,
      labels: {
        fontColor: '#aaa',
        padding: 20
      }
    }
  }
});
// Chart 4
const chart4 = new Chart($myChart4, {
  type: 'polarArea',
  data: {
    labels: ["HTML", "CSS", "JS", "Canvas"],
    datasets: [{
      label: 'Código',
      backgroundColor: ['rgba(54,162,235, 0.4)', 'rgba(255,159,64, 0.4)', 'rgba(255,249,99, 0.4)', 'rgba(127,189,158, 0.4)'],
      borderColor: '#1e1f23',
      data: [30, 10, 40, 20]
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: '#aaa',
        boxWidth: 20,
        padding: 10
      }
    },
    scale: {
      ticks: {
        beginAtZero: true
      },
      reverse: false
    },
    animation: {
      animateRotate: false,
      animateScale: true
    }
  }
});
