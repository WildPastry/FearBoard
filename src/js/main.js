/*jslint browser:true */
console.log('Javascript connected...');

// EVENT LISTENERS
// document.getElementById('section2').addEventListener('click', section1);
document.getElementById('spooder').addEventListener('click', show2from1);
document.getElementById('show1from2').addEventListener('click', show1from2);
document.getElementById('show2from3').addEventListener('click', show2from3);
document.getElementById('show3from2').addEventListener('click', show3from2);
document.getElementById('show3from4').addEventListener('click', show3from4);
document.getElementById('show4from3').addEventListener('click', show4from3);
document.getElementById('show4from5').addEventListener('click', show4from5);
document.getElementById('show1from5').addEventListener('click', show1from5);
document.getElementById('show5from4').addEventListener('click', show5from4);

// PAGE ANIMATION
function show1from2() {
  $(function () {
    $("#section1").show();
  });
  $(function () {
    $("#section2").hide();
  });
}

function show1from5() {
  $(function () {
    $("#section1").show();
  });
  $(function () {
    $("#section5").hide();
  });
}

function show2from1() {
  $(function () {
    $("#section2").show();
  });
  $(function () {
    $("#section1").hide();
  });
}

function show2from3() {
  $(function () {
    $("#section2").show();
  });
  $(function () {
    $("#section3").hide();
  });
}

function show3from2() {
  $(function () {
    $("#section3").show();
  });
  $(function () {
    $("#section2").hide();
  });
}

function show3from4() {
  $(function () {
    $("#section3").show();
  });
  $(function () {
    $("#section4").hide();
  });
}

function show4from3() {
  $(function () {
    $("#section4").show();
  });
  $(function () {
    $("#section3").hide();
  });
}

function show4from5() {
  $(function () {
    $("#section4").show();
  });
  $(function () {
    $("#section5").hide();
  });
}

function show5from4() {
  $(function () {
    $("#section5").show();
  });
  $(function () {
    $("#section4").hide();
  });
}

// ANIMSITION
$(".animsition").animsition({
  inDuration: 800,
  outDuration: 800
});