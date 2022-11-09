// $(document).ready(function () {
//   $(".item-product").slice(0, 3).show();
//   if ($(".blogBox:hidden").length != 0) {
//     $("#loadMore").show();
//   }
//   $("#loadMore").on("click", function (e) {
//     e.preventDefault();
//     $(".item-product:hidden").slice(0, 6).slideDown();
//     if ($(".item-product:hidden").length == 0) {
//       $("#loadMore").fadeOut("slow");
//     }
//   });
// });

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
  getElementByAll;
}

$(document).ready(function () {
  $(".item-product").slice(0, 4).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".item-product:hidden").slice(0, 1).slideDown();
    if ($(".item-product:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("emptyList");
    }
  });
});

var buttonPlus = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this).parent(".qty-container").find(".input-qty");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this).parent(".qty-container").find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 1);
  }
});
