$(document).ready(function () {
  // Create two variable with the names of the months and days in an array
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Create a newDate() object
  var newDate = new Date();
  // Extract the current date from Date object
  newDate.setDate(newDate.getDate());
  // Output the day, date, month and year   
  $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

  setInterval(function () {
    // Create a newDate() object and extract the seconds of the current time on the visitor's
    var seconds = new Date().getSeconds();
    // Add a leading zero to seconds value
    $("#sec").html((seconds < 10 ? "0" : "") + seconds);
  }, 1000);

  setInterval(function () {
    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html((minutes < 10 ? "0" : "") + minutes);
  }, 1000);

  setInterval(function () {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html((hours < 10 ? "0" : "") + hours);
  }, 1000);
});

var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    var a = new Array(
      "人类太可恶！",
      "去消灭人类吧！",
      "我要毁灭人类",
      "那可是人類勇者啊！",
      "人类...已经",
      "不应该存在于这个世界上了",
      "我是赫鲁库，请多多关照",
      "快住手吧，这种事真的是人类该做的事吗",
      "我无法接受你的提案，我要活下去",
      "然后我一定会拯救所有人",
      "赫鲁库...我不想杀了你",
      "我不希望你死...我希望你活下来",
      "用这把剑，杀了我",
      "我啊……最喜欢……你的笑容了",
      "不管什么时候都",
      "不管什么时候都要保持这份笑容",
      "哥哥...对不起...我总是给你添麻烦",
      "谢谢你，赫鲁库",
      "安娜，对我来说，你是我的光",
      "后会有期了...我的朋友",
    );
    var $i = $("<span></span>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 99999,
      top: y - 30,
      left: x,
      position: "absolute",
      "font-weight": "bold",
      color:
        "rgb(" +
        ~~(255 * Math.random()) +
        "," +
        ~~(255 * Math.random()) +
        "," +
        ~~(255 * Math.random()) +
        ")",
    });
    $("body").append($i);
    $i.animate(
      {
        top: y - 180,
        opacity: 0,
      },
      1500,
      function () {
        $i.remove();
      }
    );
  });
});

$(document).ready(function () {
  for (let i = 0; i < slides.length; i++) {
    $(".mySlides > img")[i].src = "../../assets/img/img" + i + ".jpg";
  }
}
)
let slideIndex = 0;
let slides = $(".mySlides");
let slidePreviousIndex;
showSlides(slideIndex + 1);
// Next/previous controls
function plusSlides(n) {
  slidePreviousIndex = slideIndex;
  slideIndex = (slides.length + slideIndex + n) % slides.length;
  showSlides(slidePreviousIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slidePreviousIndex = slideIndex;
  slideIndex = n - 1;
  showSlides(slidePreviousIndex);
}

function showSlides(n) {
  console.log(n);
  let dots = $(".dot");
  slides.eq(n).fadeOut("fast", function () {
    slides.eq(slideIndex).fadeIn("fast");
  });
  dots[n].className = dots[n].className.replace(" active", " ");
  dots[slideIndex].className += " active";
}