// // onload;

// window.onload = function () {
//   console.log("load");
// };

// // ready

// $(document).ready(function () {
//   console.log("ready");
// });

// $(function () {
//   console.log("hi");
// });

// // selector

// console.log($("#list-container"));

// console.log($("ul"));

// console.log($(".lists"));

// console.log($("li"));

// console.log($("ul li"));

// // children

// console.log($("#list-container").children());

// // parent

// console.log($("#list-container").children().parent());

// // find

// console.log($("#list-container").find(".lists"));

// // eq(index)

// console.log($("#list-container li").eq(2));

// // index

// $("#list-container li").on("click", function () {
//   var i = $("#list-container li").index(this);
//   console.log(i);
// });

// // class

// $("#list-container li").eq(0).addClass("first-child");
// $("#list-container li").eq(0).removeClass("lists");
// console.log($("#list-container li").eq(0).hasClass("lists"));
// $("#list-container li").on("click", function () {
//   $("#list-container li").eq(1).toggleClass("second-child");
// });

// // remove, prepend, append, appendTo, wrap

// // remove

// $("#list-container li").eq(0).remove();

// // prepend

// $("#list-container").prepend("<li>add first li</li>");

// // append

// $("#list-container").append("<li>add last li</li>");

// // appendTo

// $("<li>add append to li</li>").appendTo("#list-container");

// // wrap

// $("#list-container").wrap("<div></div>");

// // css, attr, removeAttr

// // css

// $("#list-container li").eq(0).css({ color: "red" });

// $("#list-container li").eq(1).css("color", "blue");

// // attr

// $("#list-container li").eq(0).attr("id", "red-li");

// // removeAttr

// $("#list-container li").eq(0).removeAttr("id");

// // each

// $("#list-container li").each(function (index, list) {
//   console.log(index, list);
// });

// // width, height, outerWidth, outerHeight

// // width

// $("#list-container li").css({ padding: "24px" });

// console.log($("#list-container li").eq(0).width());

// console.log($("#list-container li").eq(0).outerWidth());

// console.log($("#list-container li").eq(0).height());

// console.log($("#list-container li").eq(0).outerHeight());

// // offset, position

// // offset

// console.log($("#list-container").offset().top);

// // position

// console.log($("#list-container").position().top);

// // text, html

// // text

// $("#list-container li").eq(0).text("change text");

// // html

// $("#list-container li")
//   .eq(1)
//   .html("<p><b>change to Bold text and p tag</b></p>");

// // fadeOut, fadeIn, hide, show, animate

// // fadeOut & fadeIn

// $("#list-container li").eq(0).fadeOut(1000);

// $("#list-container li").eq(0).fadeIn(1000);

// // hide & show ||  slideUp & slideDown

// $("#list-container li").eq(1).hide(1000);

// $("#list-container li").eq(1).show(1000);

// $("#list-container li").eq(2).slideUp(1000);

// $("#list-container li").eq(2).slideDown(1000);

// animate
$("#list-container li").eq(1).css({
  backgroundColor: "red",
});
$("#list-container li").eq(1).animate(
  {
    height: "300px",
  },
  1000
);

// // scrollLeft, scrollTop

// // scrollLeft & scrollTop

// $("#list-container li").css({
//   marginBottom: "100vh",
// });

// $(window).on("scroll", function () {
//   console.log($(window).scrollTop());
// });

// // add event

// $("#list-container li").click(function () {
//   console.log("click");
// });

// $("#list-container li").on("click", function () {
//   console.log("on click");
// });

// $(window).resize(function () {
//   console.log("resize");
// });

// $(window).on("resize", function () {
//   console.log("on resize");
// });

// $("#list-container li").off();
// $(window).off();
