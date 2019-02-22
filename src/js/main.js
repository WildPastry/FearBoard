/*jslint browser:true */
console.log('Javascript connected...');

// GLOBAL VARIABLES
var classData;
var mapKey;

// EVENT LISTENERS
// document.getElementById('section2').addEventListener('click', section1);
document.getElementById('spooder').addEventListener('click', section2);

// GET MAP KEY
$.ajax({
  url: '../config.json',
  dataType: 'json',
  type: 'get',
  success: function (keys) {
    mapKey = keys[0].MAP_KEY;
    console.log("Key loaded...");
    getData();
  },
  error: function (error) {
    console.log(error);
    console.log("Can't load the key...");
  }
});

// CHARTS
// LOAD PACKAGES
google.charts.load('current', {
  'packages': ['corechart', 'bar', 'geochart'],
  'mapsApiKey': mapKey
});

// LOAD CHARTS
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawScatterChart);
google.charts.setOnLoadCallback(drawBarChart);

// GET DATA
function getData() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      console.log('Class data:');
      for (var i = 0; i < classData.length; i++) {
        console.log(classData[i].age, classData[i].sex, classData[i].country, classData[i].nachos, classData[i].public_speaking, classData[i].heights, classData[i].swimming, classData[i].dentist, classData[i].creature, classData[i].amount);
      }
    },
    error: function (error) {
      console.log(error);
      console.log("can't load class data...");
    }
  });
}

// PIECHART
function drawPieChart() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      console.log('Pie chart data:');
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Creature');
      data.addColumn('number', 'Age');
      for (var i = 0; i < classData.length; i++) {
        console.log(classData[i].creature, classData[i].age);
        data.addRow([classData[i].creature, classData[i].age]);
      }
      var options = {
        height: 400,
        width: 600,
        title: 'Most terrifying creature',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        pieHole: 0.4,
      };
      var chart = new google.visualization.PieChart(document.getElementById('graph1'));
      chart.draw(data, options);
    },
    error: function (error) {
      console.log(error);
      console.log("can't load pie chart data...");
    }
  });

  // var data = new google.visualization.DataTable();
  // data.addColumn('number', 'Age');
  // data.addColumn('string', 'Creature');
  // for (var i = 0; i < classData.length; i++) {
  //     console.log(classData[i].age, classData[i].creature);
  //     data.addRow([classData[i].age, classData[i].creature])
  // }

  // var options = {
  //   height: 400,
  //   width: 600,
  //   title: 'Graph 1',
  //   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  //   pieHole: 0.4,
  // };

  // var chart = new google.visualization.PieChart(document.getElementById('graph1'));
  // chart.draw(data, options);
}

// GEOCHART
function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ]);

  var options = {
    height: 400,
    width: 600,
    title: 'Graph 2',
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  };

  var chart = new google.visualization.GeoChart(document.getElementById('graph2'));

  chart.draw(data, options);
}

// SCATTER CHART
function drawScatterChart() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      console.log('Scatter chart data:');
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Age');
      data.addColumn('number', 'Cash');
      for (var i = 0; i < classData.length; i++) {
        console.log(classData[i].age, classData[i].amount);
        data.addRow([classData[i].age, classData[i].amount]);
      }
      var options = {
        height: 400,
        width: 600,
        title: 'How much money to be trapped with your terrifying creature?',
        hAxis: {
          title: 'Age',
          // minValue: 0,
          // maxValue: 15
        },
        vAxis: {
          title: 'Cash',
          // minValue: 0,
          // maxValue: 15
        },
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      };
      var chart = new google.visualization.ScatterChart(document.getElementById('graph3'));
      chart.draw(data, options);
    },
    error: function (error) {
      console.log(error);
      console.log("can't load scatter chart data...");
    }
  });
}

// function drawScatterChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['Age', 'Weight'],
//     [8, 12],
//     [4, 5.5],
//     [11, 14],
//     [4, 5],
//     [3, 3.5],
//     [6.5, 7]
//   ]);

//   var options = {
//     height: 400,
//     width: 600,
//     title: 'Graph 3',
//     hAxis: {
//       title: 'Age',
//       minValue: 0,
//       maxValue: 15
//     },
//     vAxis: {
//       title: 'Weight',
//       minValue: 0,
//       maxValue: 15
//     },
//     colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
//   };

//   var chart = new google.visualization.ScatterChart(document.getElementById('graph3'));

//   chart.draw(data, options);
// }

// BAR CHART
// var data = google.visualization.arrayToDataTable([
//   ['Year', 'Sales', 'Expenses', 'Profit'],
//   ['2014', 1000, 400, 200],
//   ['2015', 1170, 460, 250],
//   ['2016', 660, 1120, 300],
//   ['2017', 1030, 540, 350]
// ]);

function drawBarChart() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      console.log('Bar chart data:');
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Rank');
      data.addColumn('number', 'Rank');
      data.addColumn('number', 'Nachos');
      for (var i = 0; i < classData.length; i++) {
        console.log(classData[i].item, classData[i].rank);
        data.addRow([classData[i].item, classData[i].rank, classData[i].age]);
      }
      var options = {
        bars: 'vertical',
        height: 400,
        width: 600,
        title: 'Items ranked in order of fear',
    hAxis: {
      title: 'Age',
      // minValue: 0,
    },
    vAxis: {
      title: 'Rank'
    },
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      };
      var chart = new google.visualization.BarChart(document.getElementById('graph4'));
      chart.draw(data, options);
    },
    error: function (error) {
      console.log(error);
      console.log("can't load bar chart data...");
    }
  });
}
// function drawBarChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['City', '2010 Population', '2000 Population'],
//     ['New York City, NY', 8175000, 8008000],
//     ['Los Angeles, CA', 3792000, 3694000],
//     ['Chicago, IL', 2695000, 2896000],
//     ['Houston, TX', 2099000, 1953000],
//     ['Philadelphia, PA', 1526000, 1517000]
//   ]);

//   data = google.visualization.arrayToDataTable([
//     ['City', '2010 Population', {
//         type: 'string',
//         role: 'annotation'
//       },
//       '2000 Population', {
//         type: 'string',
//         role: 'annotation'
//       }
//     ],
//     ['New York City, NY', 8175000, '8.1M', 8008000, '8M'],
//     ['Los Angeles, CA', 3792000, '3.8M', 3694000, '3.7M'],
//     ['Chicago, IL', 2695000, '2.7M', 2896000, '2.9M'],
//     ['Houston, TX', 2099000, '2.1M', 1953000, '2.0M'],
//     ['Philadelphia, PA', 1526000, '1.5M', 1517000, '1.5M']
//   ]);

//   var options = {
//     height: 400,
//     width: 600,
//     title: 'Graph 4',
//     colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
//     chartArea: {
//       width: '50%'
//     },
//     annotations: {
//       alwaysOutside: true,
//       textStyle: {
//         fontSize: 12,
//         auraColor: 'none',
//         color: '#555'
//       },
//       boxStyle: {
//         stroke: '#ccc',
//         strokeWidth: 1,
//         gradient: {
//           color1: '#e0440e',
//           color2: '#e6693e',
//           x1: '0%',
//           y1: '0%',
//           x2: '100%',
//           y2: '100%'
//         }
//       }
//     },
//     hAxis: {
//       title: 'Total Population',
//       minValue: 0,
//     },
//     vAxis: {
//       title: 'City'
//     }
//   };
//   var chart = new google.visualization.BarChart(document.getElementById('graph4'));
//   chart.draw(data, options);
// }

// PAGE ANIMATION
function section1() {
  $(function () {
    $("#section1").show();
  });
  $(function () {
    $("#section2").hide();
  });
}

function section2() {
  $(function () {
    $("#section2").show();
  });
  $(function () {
    $("#section1").hide();
  });
}