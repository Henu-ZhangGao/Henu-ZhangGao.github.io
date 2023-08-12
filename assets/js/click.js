var a_idx = 0;
jQuery(document).ready(function ($) {
  var a;
  $.ajax({
    url: "/assets/json/main.json",
    success: function (result) {
      a = Array.from(result.string);
    }
  });
  $("body").click(function (e) {
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
      "white-space": "nowrap",
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