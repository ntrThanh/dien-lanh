var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#top-menu-mobile").click(function () {
    $j("#nav-mobile").slideToggle("slow");
  });
});


var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#more1").click(function () {
    $j("#more-list1").slideToggle("slow");
  });
});

var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#more2").click(function () {
    $j("#more-list2").slideToggle("slow");
  });
});

var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#more3").click(function () {
    $j("#more-list3").slideToggle("slow");
  });
});

var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#more4").click(function () {
    $j("#more-list4").slideToggle("slow");
  });
});

var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#question1").click(function () {
    $j("#answer1").slideToggle("slow");
  });
});

$j(document).ready(function () {
  $j("#question2").click(function () {
    $j("#answer2").slideToggle("slow");
  });
});

var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#question3").click(function () {
    $j("#answer3").slideToggle("slow");
  });
});

var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("#question4").click(function () {
    $j("#answer4").slideToggle("slow");
  });
});

// JavaScript để kiểm tra vị trí cuộn và hiển thị nút điện thoại
window.addEventListener("scroll", function () {
  const phoneButton = document.getElementById("phoneButton");
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= viewportHeight / 3) {
    phoneButton.classList.add("show");
  } else {
    phoneButton.classList.remove("show");
  }
});

var $j = jQuery.noConflict();

// JavaScript để kiểm tra vị trí cuộn và hiển thị nút điện thoại
window.addEventListener("scroll", function () {
  const phoneButton = document.getElementById("zaloButton");
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= viewportHeight / 3) {
    phoneButton.classList.add("show");
  } else {
    phoneButton.classList.remove("show");
  }
});
