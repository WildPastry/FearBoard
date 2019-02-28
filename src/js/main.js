console.log('Javascript connected...');

// EVENT LISTENERS
// document.getElementById('spooder').addEventListener('click', section2);
// document.getElementById('fear').addEventListener('click', section2);
// document.getElementById('charts').addEventListener('click', section2);
// document.getElementById('home').addEventListener('click', section1);

// PAGE ANIMATION
function section1() {
  $(function () {
    $("#section1").show(5);
  });
  $(function () {
    $("#section2").hide(5);
  });
}

function section2() {
  $(function () {
    $("#section2").show(5);
  });
  $(function () {
    $("#section1").hide(5);
  });
}

// ANIMSITION
$(".animsition").animsition({
  inDuration: 500,
  outDuration: 500
});