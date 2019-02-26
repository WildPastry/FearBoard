// GLOBAL VARIABLES
var classData;
var mapKey;

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
// LOAD PACKAGES AND MAP KEY
google.charts.load('current', {
  'packages': ['corechart', 'bar', 'geochart'],
  'mapsApiKey': mapKey
});

// LOAD CHARTS
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawBarChart);
// google.charts.setOnLoadCallback(drawChart);

// GET GRAPH DATA
function getData() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      console.log('Complete class data:');
      for (var i = 0; i < classData.length; i++) {
        console.log(classData[i].age, classData[i].sex, classData[i].country, classData[i].creature, classData[i].amount, classData[i].item);
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
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Creature');
      data.addColumn('number', 'Votes');
      var mouse = 0;
      var spider = 0;
      var shark = 0;
      var bear = 0;
      var snake = 0;
      for (var i = 0; i < classData.length; i++) {
        if (classData[i].creature == "Mouse") mouse++;
        if (classData[i].creature == "Spider") spider++;
        if (classData[i].creature == "Shark") shark++;
        if (classData[i].creature == "Bear") bear++;
        if (classData[i].creature == "Snake") snake++;
      };
      console.log("Pie chart data loaded...");
      console.log(mouse, spider, shark, bear, snake);
      data.addRow(['Mouse', mouse]);
      data.addRow(['Spider', spider]);
      data.addRow(['Shark', shark]);
      data.addRow(['Bear', bear]);
      data.addRow(['Snake', snake]);

      var options = {
        pieSliceText: 'none',
        slices: {
          0: {
            offset: 0.3
          },
          3: {
            offset: 0.3
          },
          4: {
            offset: 0.1
          },
        },

        legend: 'none',
        tooltip: {
          textStyle: {
            color: '#03223d'
          },
          showColorCode: true
        },
        // chartArea:{left:200,top:75,width:'50%',height:'70%'},
        width: 800,
        height: 400,
        fontSize: 17,
        fontName: 'Source Sans Pro',
        title: ' ',
        backgroundColor: {
          fill: 'transparent'
        },
        colors: ['#f74444', '#faa178', '#f7697c', '#f07651', '#e998b0'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart1'));
      chart.draw(data, options);
    },
    error: function (error) {
      console.log(error);
      console.log("can't load pie chart data...");
    }
  });
}

// COMBO CHART
function drawRegionsMap() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Country');
      data.addColumn('number', 'Votes');
      var china = 0;
      var us = 0;
      var laos = 0;
      var africa = 0;
      var syria = 0;
      var bulgaria = 0;
      var turkey = 0;
      for (var i = 0; i < classData.length; i++) {
        if (classData[i].country == "China") china++;
        if (classData[i].country == "United States") us++;
        if (classData[i].country == "Laos") laos++;
        if (classData[i].country == "Africa") africa++;
        if (classData[i].country == "Syria") syria++;
        if (classData[i].country == "Bulgaria") bulgaria++;
        if (classData[i].country == "Turkey") turkey++;
      };
      console.log("Geo chart data loaded...");
      console.log(china, us, laos, africa, syria, bulgaria, turkey);
      data.addRow(['China', china]);
      data.addRow(['U.S', us]);
      data.addRow(['Laos', laos]);
      data.addRow(['Africa', africa]);
      data.addRow(['Syria', syria]);
      data.addRow(['Bulgaria', bulgaria]);
      data.addRow(['Turkey', turkey]);

      var options = {
        tooltip: {
          textStyle: {
            color: '#03223d'
          },
          showColorCode: true
        },
        fontSize: 17,
        fontName: 'Source Sans Pro',
        stroke: 'none',
        gridlines: 'none',

        // chartArea:{left:200,top:75,width:'50%',height:'70%'},
        width: 800,
        height: 400,
        title: ' ',
        backgroundColor: {
          fill: 'transparent'
        },
        colors: ['#faa178'],
        lineWidth: 5,

        legend: 'none',
        vAxis: {
          textStyle: {
            color: '#fff'
          },
          gridlines: {
            color: 'transparent'
          }
        },
        hAxis: {
          textStyle: {
            color: '#fff'
          },
          gridlines: {
            color: 'transparent'
          }
        }
      };
      var chart = new google.visualization.ComboChart(document.getElementById('chart2'));
      chart.draw(data, options);
    },
    error: function (error) {
      console.log(error);
      console.log("can't load geo chart data...");
    }
  });
}
// function drawRegionsMap() {
//   $.ajax({
//     url: 'json/classData.json',
//     dataType: 'json',
//     type: 'get',
//     success: function (classData) {
//       var data = new google.visualization.DataTable();
//       data.addColumn('string', 'Country');
//       data.addColumn('number', 'Votes');
//       var china = 0;
//       var us = 0;
//       var laos = 0;
//       var africa = 0;
//       var syria = 0;
//       var bulgaria = 0;
//       var turkey = 0;
//       for (var i = 0; i < classData.length; i++) {
//         if (classData[i].country == "China") china++;
//         if (classData[i].country == "United States") us++;
//         if (classData[i].country == "Laos") laos++;
//         if (classData[i].country == "Africa") africa++;
//         if (classData[i].country == "Syria") syria++;
//         if (classData[i].country == "Bulgaria") bulgaria++;
//         if (classData[i].country == "Turkey") turkey++;
//       };
//       console.log("Geo chart data loaded...");
//       console.log(china, us, laos, africa, syria, bulgaria, turkey);
//       data.addRow(['China', china]);
//       data.addRow(['United States', us]);
//       data.addRow(['Laos', laos]);
//       data.addRow(['Africa', africa]);
//       data.addRow(['Syria', syria]);
//       data.addRow(['Bulgaria', bulgaria]);
//       data.addRow(['Turkey', turkey]);

//       var options = {
//         tooltip: {
//           textStyle: {
//             color: '#03223d'
//           },
//           showColorCode: true
//         },
//         fontSize: 17,
//         fontName: 'Source Sans Pro',
//         stroke: 'none',
//         chartArea:{left:200,top:75,width:'50%',height:'70%'},
//         width: 800,
//         height: 400,
//         title: ' ',
//         backgroundColor: {
//           fill: 'transparent'
//         },
//         colors: ['#b12199', '#f7697c'],
//         titleTextStyle: {
//           color: '#fff'
//         },
//         datalessRegionColor: '#b9d3f0',
//         legend: 'none'
//       };
//       var chart = new google.visualization.GeoChart(document.getElementById('chart2'));
//       chart.draw(data, options);
//     },
//     error: function (error) {
//       console.log(error);
//       console.log("can't load geo chart data...");
//     }
//   });
// }

// COLUMN CHART
function drawColumnChart() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Creature');
      data.addColumn('number', 'Cash');
      console.log('Column chart data loaded...');
      for (var i = 0; i < classData.length; i++) {
        console.log(classData[i].name, classData[i].amount);
        data.addRow([classData[i].name, classData[i].amount]);
      }
      var options = {
        legend: 'none',
        tooltip: {
          textStyle: {
            color: '#03223d'
          },
          showColorCode: true
        },
        fontSize: 17,
        fontName: 'Source Sans Pro',
        width: 800,
        height: 400,
        title: ' ',
        backgroundColor: {
          fill: 'transparent'
        },
        series: {
          0: { color: '#e998b0' },
          1: { color: '#c23bd4' },
          // 2: { lineWidth: 4 },
          // 3: { lineWidth: 8 },
          // 4: { lineWidth: 16 },
          // 5: { lineWidth: 24 }
        },

        // colors: ['#e998b0'],
        vAxis: {
          textStyle: {
            color: '#fff'
          },
          gridlines: {
            color: 'transparent'
          }
        },
        hAxis: {
          textStyle: {
            color: '#fff'
          },
          gridlines: {
            color: 'transparent'
          }
        }
      }

      var chart = new google.visualization.ColumnChart(document.getElementById('chart3'));
      chart.draw(data, options);
    },
    error: function (error) {
      console.log(error);
      console.log("Can't load column chart data...");
    }
  });
}

// BAR CHART
function drawBarChart() {
  $.ajax({
    url: 'json/classData.json',
    dataType: 'json',
    type: 'get',
    success: function (classData) {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Creature');
      data.addColumn('number', 'Votes');
      var nachos = 0;
      var public_speaking = 0;
      var heights = 0;
      var swimming = 0;
      var dentist = 0;
      for (var i = 0; i < classData.length; i++) {
        if (classData[i].item == "Nachos") nachos++;
        if (classData[i].item == "Public Speaking") public_speaking++;
        if (classData[i].item == "Heights") heights++;
        if (classData[i].item == "Swimming") swimming++;
        if (classData[i].item == "Dentist") dentist++;
      };
      console.log("Bar chart data loaded...");
      console.log(nachos, public_speaking, heights, swimming, dentist);
      data.addRow(['Nachos', nachos]);
      data.addRow(['Public Speaking', public_speaking]);
      data.addRow(['Heights', heights]);
      data.addRow(['Swimming', swimming]);
      data.addRow(['Dentist', dentist]);

      var options = {
        legend: 'none',
        tooltip: {
          textStyle: {
            color: '#03223d'
          },
          showColorCode: true
        },
        fontSize: 17,
        fontName: 'Source Sans Pro',
        width: 800,
        height: 400,
        title: ' ',
        backgroundColor: {
          fill: 'transparent'
        },
        colors: ['#cb98e9'],
        vAxis: {
          textStyle: {
            color: '#fff'
          },
          gridlines: {
            color: 'transparent'
          }
        },
        hAxis: {
          textStyle: {
            color: '#fff'
          },
          maxValue: 5,
          gridlines: {
            color: 'transparent'
          }
        }
      }

      var chart = new google.visualization.BarChart(document.getElementById('chart4'));
      chart.draw(data, options);
    },
    error: function (error) {
      console.log(error);
      console.log("Can't load bar chart data...");
    }
  });
}

// TEMP CHART
// function drawChart() {
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Name');
//   data.addColumn('number', 'Value');
//   data.addRows([
//       ['Foo', 2],
//       ['Bar', 4],
//       ['Baz', 3],
//       ['Cud', 6],
//       ['Waq', 8],
//       ['Bat', 2],
//       ['Cad', 5],
//       ['Giv', 3],
//       ['Muj', 9],
//       ['Lof', 7],
//       ['Duq', 5],
//       ['Kaf', 1],
//       ['Zij', 4],
//   ]);
  
//   var view = new google.visualization.DataView(data);
//   view.setColumns([0, {
//       type: 'number',
//       label: 'Value',
//       calc: function (dt, row) {
//           return (dt.getValue(row, 1) < 3) ? dt.getValue(row, 1) : null;
//       }
//   }, {
//       type: 'number',
//       label: 'Value',
//       calc: function (dt, row) {
//           return (dt.getValue(row, 1) >= 3 && dt.getValue(row, 1) < 5) ? dt.getValue(row, 1) : null;
//       }
//   }, {
//       type: 'number',
//       label: 'Value',
//       calc: function (dt, row) {
//           return (dt.getValue(row, 1) >= 5 && dt.getValue(row, 1) < 7) ? dt.getValue(row, 1) : null;
//       }
//   }, {
//       type: 'number',
//       label: 'Value',
//       calc: function (dt, row) {
//           return (dt.getValue(row, 1) >= 7 && dt.getValue(row, 1) < 9) ? dt.getValue(row, 1) : null;
//       }
//   }, {
//       type: 'number',
//       label: 'Value',
//       calc: function (dt, row) {
//           return (dt.getValue(row, 1) >= 9) ? dt.getValue(row, 1) : null;
//       }
//   }]);
  
//   var chart = new google.visualization.BarChart(document.getElementById('chart5'));
//   chart.draw(view, {
//       legend: 'none',
//       isStacked: true,
//       height: 400,
//       width: 800
//   });
// }