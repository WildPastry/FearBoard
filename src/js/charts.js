// GLOBAL VARIABLES
var classData = [];
var chart1 = document.getElementById("pieChart");
var chart2 = document.getElementById("lineChart");
var chart3 = document.getElementById("hbarChart");
var chart4 = document.getElementById("vbarChart");

// GLOBAL FONTS
Chart.defaults.global.defaultFontColor = '#f0f0f0';

// AJAX
$.ajax({
  url: 'json/classData.json',
  dataType: 'json',
  type: "get",
  success: function (classData) {
    console.log("Data loaded...");
    console.log(classData);

    for (var i = 0; i < classData.length; i++) {
      console.log(classData[i].name, classData[i].age, classData[i].sex, classData[i].country, classData[i].creature, classData[i].amount, classData[i].item);
    }

    // PIE CHART
    var mouse = 0;
    var spider = 0;
    var shark = 0;
    var bear = 0;
    var snake = 0;
    for (i = 0; i < classData.length; i++) {
      if (classData[i].creature == "Mouse") mouse++;
      if (classData[i].creature == "Spider") spider++;
      if (classData[i].creature == "Shark") shark++;
      if (classData[i].creature == "Bear") bear++;
      if (classData[i].creature == "Snake") snake++;
    }
    console.log("Pie chart data loaded...");
    console.log(mouse, spider, shark, bear, snake);
    var pieChart = new Chart(chart1, {
      type: 'pie',
      data: {
        labels: ["Mouse", "Spider", "Shark", "Bear", "Snake"],
        datasets: [{
          label: 'Creature',
          data: [mouse, spider, shark, bear, snake],
          backgroundColor: [
            '#f74444',
            '#faa178',
            '#f7697c',
            '#f07651',
            '#e998b0',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        }
      }
    }); // PIE CHART

    // LINE CHART
    var china = 0;
    var us = 0;
    var laos = 0;
    var africa = 0;
    var syria = 0;
    var bulgaria = 0;
    var turkey = 0;
    for (i = 0; i < classData.length; i++) {
      if (classData[i].country == "China") china++;
      if (classData[i].country == "United States") us++;
      if (classData[i].country == "Laos") laos++;
      if (classData[i].country == "Africa") africa++;
      if (classData[i].country == "Syria") syria++;
      if (classData[i].country == "Bulgaria") bulgaria++;
      if (classData[i].country == "Turkey") turkey++;
    }

    console.log("Line chart data loaded...");
    console.log(china, us, laos, africa, syria, bulgaria, turkey);

    var lineChart = new Chart(chart2, {
      type: 'line',
      data: {
        labels: ["China", "U.S", "Laos", "Africa", "Syria", "Bulgaria", "Turkey"],
        datasets: [{
          label: 'Number of student votes',
          data: [china, us, laos, africa, syria, bulgaria, turkey],
          fill: false,
          borderColor: '#f175f1',
          borderWidth: 1,
          lineTension: 0
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
              userCallback: function (label, index, labels) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }]
        }
      }
    }); // LINE CHART

    // H BAR CHART
    var ten = 0;
    var twenty = 0;
    var thirty = 0;
    var fifty = 0;
    var seventy = 0;
    var hundy = 0;
    for (i = 0; i < classData.length; i++) {
      if (classData[i].amount == "10") ten++;
      if (classData[i].amount == "20") twenty++;
      if (classData[i].amount == "30") thirty++;
      if (classData[i].amount == "50") fifty++;
      if (classData[i].amount == "70") seventy++;
      if (classData[i].amount == "100") hundy++;
    }

    console.log("Horizontal Bar chart data loaded...");
    console.log(ten, twenty, thirty, fifty, seventy, hundy);

    var hbarChart = new Chart(chart3, {
      type: 'horizontalBar',
      data: {
        labels: ["Chloe", "Lisa", "Hannah", "Lexi", "Mike", "Joe", "Dan", "Yoon", "Sam", "Maria"],
        datasets: [{
          label: 'Cash required',
          data: [70, 50, 100, 50, 20, 100, 30, 70, 50, 100],
          backgroundColor: '#f56969',
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
              userCallback: function (label, index, labels) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    }); // H BAR CHART

    // V BAR CHART
    var nachos = 0;
    var public_speaking = 0;
    var heights = 0;
    var swimming = 0;
    var dentist = 0;
    for (i = 0; i < classData.length; i++) {
      if (classData[i].item == "Nachos") nachos++;
      if (classData[i].item == "Public Speaking") public_speaking++;
      if (classData[i].item == "Heights") heights++;
      if (classData[i].item == "Swimming") swimming++;
      if (classData[i].item == "Dentist") dentist++;
    }
    console.log("Vertical Bar chart data loaded...");
    console.log(nachos, public_speaking, heights, swimming, dentist);

    var vbarChart = new Chart(chart4, {
      type: 'bar',
      data: {
        labels: ["Chloe", "Lisa", "Hannah", "Lexi", "Mike", "Joe", "Dan", "Yoon", "Sam", "Maria"],
        datasets: [{
            label: 'Nachos',
            data: [1, 5, 1, 4, 3, 3, 2, 1, 2, 5],
            backgroundColor: '#c972c9',
          },
          {
            label: 'Public Speaking',
            data: [3, 3, 4, 3, 5, 4, 4, 2, 4, 1],
            backgroundColor: '#fe76b1',
          },
          {
            label: 'Heights',
            data: [5, 2, 5, 2, 4, 5, 5, 3, 1, 4],
            backgroundColor: '#ff8991',
          },
          {
            label: 'Swimming',
            data: [2, 4, 3, 1, 1, 1, 1, 4, 3, 2],
            backgroundColor: '#ffaa74',
          },
          {
            label: 'Dentist',
            data: [4, 1, 2, 5, 2, 2, 3, 5, 5, 3],
            backgroundColor: '#ffd164',
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
              userCallback: function (label, index, labels) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }]
        }
      }
    }); // V BAR CHART

  }, // SUCCSESS

  // ERROR
  error: function (error) {
    console.log(error);
    console.log("Error loading data...");
  } //ERROR

}); // AJAX