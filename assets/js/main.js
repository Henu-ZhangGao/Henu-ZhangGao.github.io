var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    var a = new Array(
      "*孤单心事*",
      "雨下在我窗前",
      "玻璃也在流眼泪",
      "街上的人都看起来",
      "比我幸福一点",
      "用寂寞来测验",
      "还是最想要你陪",
      "曾一起走过的夏天",
      "我常常会梦见",
      "我猜不到你真正的感觉",
      "思念写成脸上的黑眼圈",
      "有的时候我宁愿",
      "你对我坏一点",
      "无法停止幻想我们的永远",
      "爱你是孤单的心事",
      "不懂你微笑的意思",
      "只能像一朵向日葵",
      "在夜里默默的坚持",
      "爱你是孤单的心事",
      "多希望你对我的诚实",
      "一直爱着你",
      "用我自己的方式",
      "我在你的心里",
      "有没有一点特别",
      "就怕你终究没发现",
      "我还是在你身边",
      "我猜不到你真正的感觉",
      "思念写成脸上的黑眼圈",
      "有的时候我宁愿",
      "你对我坏一点",
      "无法停止幻想我们的永远",
      "爱你是孤单的心事",
      "不懂你微笑的意思",
      "只能像一朵向日葵",
      "在夜里默默的坚持",
      "爱你是孤单的心事",
      "多希望你对我的诚实",
      "一直爱着你",
      "用我自己的方式",
      "爱你是孤单的心事",
      "不懂你微笑的意思",
      "只能像一朵向日葵",
      "在夜里默默的坚持",
      "爱你是孤单的心事",
      "多希望你对我的诚实",
      "一直爱着你",
      "用我自己的方式"
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
  slideIndex=n-1;
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
