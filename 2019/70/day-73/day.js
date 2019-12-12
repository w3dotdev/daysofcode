google.charts.load('current', {
  'packages':['geochart', 'corechart'],
  // https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  // https://developers.google.com/maps/documentation/javascript/get-api-key
  'mapsApiKey': 'AIzaSyCCXVFjlprGnmEeaiWqAEFbP3_qwIf_e_0'
});

// Geo Chart
const drawRegionsMap = () => {
  const data = google.visualization.arrayToDataTable([
    ['State', 'Usuários'],
    ['Amapá', 1],
    ['Bahia', 5],
    ['Ceará', 4],
    ['Minas Gerais', 12],
    ['Pará', 3],
    ['Paraná', 6],
    ['Pernambuco', 3],
    ['Rio Grande do Norte', 3],
    ['Rio Grande do Sul', 5],
    ['Rio de Janeiro', 32],
    ['São Paulo', 55]
  ]);
  const options = {
    region: 'BR',
    colorAxis: {colors: ['#9fdaf1', '#0083c0']},
    displayMode: 'regions',
    resolution: 'provinces',
    backgroundColor: '#000',
    legend: { color: '#fff' },
  };
  const chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
  chart.draw(data, options);
};

// Pie Chart
const drawChart = () => {
  const data = google.visualization.arrayToDataTable([
    ['Canal', 'Usuários'],
    ['Organic Search', 128],
    ['Direct', 19],
    ['Social', 8],
    ['Referral', 4]
  ]);
  const options = {
    title: 'Channels',
    pieStartAngle: 100,
    slices: { 0: {offset: 0.2} },
    backgroundColor: '#000',
    legendTextStyle: { color: '#fff' },
    titleTextStyle: { color: '#fff' }
  };
  const chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawChart);

