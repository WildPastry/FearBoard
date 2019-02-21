/*jslint browser:true */
console.log('JS WORKING');
var classData;

// EVENT LISTENERS
// document.getElementById('section2').addEventListener('click', section1);
document.getElementById('spooder').addEventListener('click', section2);

// AJAX
$.ajax({
  url: 'json/classData.json',
  dataType: 'json',
  type: 'get',
  success: function (classData) {
    for (var i = 0; i < classData.length; i++) {
      console.log(classData[i].age, classData[i].sex, classData[i].country, classData[i].nachos, classData[i].public_speaking, classData[i].heights, classData[i].swimming, classData[i].dentist, classData[i].creature, classData[i].amount);
      // data.addRow(classData[i].age, classData[i].sex, classData[i].country)
    }
  },
  error: function (error) {
    console.log(error);
    console.log('JSON ERROR');
  }
});

// PIECHART
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    height: 400,
    width: 600,
    title: 'Graph 1',
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('graph1'));
  chart.draw(data, options);
}

// jQuery.getMultipleJSON = function(){
//   return jQuery.when.apply(jQuery, jQuery.map(arguments, function(jsonfile){
//     return jQuery.getJSON(jsonfile);
//   })).then(function(){
//     var def = jQuery.Deferred();
//     return def.resolve.apply(def, jQuery.map(arguments, function(response){
//       return response[0];
//     }));
//   });
// };
// $.getJSON(graphicDataUrl)
//     .then(function(data) {
//         // ...worked, put it in #view-graphic
//     })
//     .fail(function() {
//         // ...didn't work, handle it
//     });
// $.getJSON(webDataUrl, function(data) {
//     .then(function(data) {
//         // ...worked, put it in #view-web
//     })
//     .fail(function() {
//         // ...didn't work, handle it
//     });

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