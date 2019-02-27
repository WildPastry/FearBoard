var chart1 = document.getElementById("pieChart");
var chart2 = document.getElementById("lineChart");
var chart3 = document.getElementById("hbarChart");
var chart4 = document.getElementById("vbarChart");

Chart.defaults.global.defaultFontColor = '#f0f0f0';

var pieChart = new Chart(chart1, {
  type: 'pie',
  data: {
    labels: ["Mouse", "Spider", "Shark", "Bear", "Snake"],
    datasets: [{
      label: 'Creature',
      data: [1, 2, 5, 1, 1],
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
});

var lineChart = new Chart(chart2, {
  type: 'line',
  data: {
    // labels: ["Chloe", "Lisa", "Hannah", "Lexi", "Mike", "Joe", "Dan", "Yoon", "Sam", "Maria"],
    labels: ["China", "U.S", "Laos", "Africa", "Syria", "Bulgaria", "Turkey"],
    datasets: [{
        label: '# of Votes',
        data: [2, 3, 1, 1, 1, 1, 1],
        // backgroundColor: '#3cdff5',
        fill: false,
        borderColor: '#f175f1',
        borderWidth: 1,
        lineTension: 0
      }
      // {
      //   label: 'U.S',
      //   data: [5, 5, 5, 5, 4, 3, 2, 1, 2, 3],
      //   fill: false,
      //   borderColor: [
      //     '#ffe5dd'
      //   ],
      //   borderWidth: 3,
      //   lineTension: 0

      // },
      // {
      //   label: 'Africa',
      //   data: [5, 3, 3, 2, 1, 1, 3, 4, 3, 1],
      //   fill: false,
      //   borderColor: [
      //     '#f3aaa1'
      //   ],
      //   borderWidth: 3,
      //   lineTension: 0

      // },
      // {
      //   label: 'Turkey',
      //   data: [5, 3, 3, 2, 1, 1, 3, 4, 3, 1],
      //   fill: false,
      //   borderColor: [
      //     '#e1f1ff1'
      //   ],
      //   borderWidth: 3,
      //   lineTension: 0

      // }
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
});

var hbarChart = new Chart(chart3, {
  type: 'horizontalBar',
  data: {
    labels: ["Chloe", "Lisa", "Hannah", "Lexi", "Mike", "Joe", "Dan", "Yoon", "Sam", "Maria"],
    datasets: [{
        label: 'Cash required',
        data: [70, 50, 100, 50, 20, 100, 30, 70, 50, 100],
        backgroundColor: '#90ace1',
      }
      // {
      //   label: 'NEVER',
      //   data: [0, 1000, 0, 1000, 0, 0, 0, 1000, 1000, 0],
      //   backgroundColor: '#ffe5dd',
      // }
      // {
      //   label: 'Public Speaking',
      //   data: [3, 3, 4, 3, 1, 1, 4, 2, 4, 1],
      //   backgroundColor: '#fe76b1',
      // },
      // {
      //   label: 'Heights',
      //   data: [2, 2, 3, 2, 4, 5, 5, 3, 1, 4],
      //   backgroundColor: '#ff8991',
      // },
      // {
      //   label: 'Swimming',
      //   data: [5, 4, 5, 1, 5, 4, 1, 4, 3, 2],
      //   backgroundColor: '#ffaa74',
      // },
      // {
      //   label: 'Dentist',
      //   data: [4, 1, 2, 5, 2, 2, 3, 5, 5, 3],
      //   backgroundColor: '#ffd164',
      // }
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
});

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
});