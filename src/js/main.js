/*jslint browser:true */
console.log('JS WORKING');

// EVENT LISTENERS
document.getElementById('section2').addEventListener('click', section1);
document.getElementById('section1').addEventListener('click', section2);

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