$(document).ready(function() {
  const $valueSpan = $(".valueSpan2");
  const $value = $("#age");
  $valueSpan.html($value.val());
  $value.on("input change", () => {
    $valueSpan.html($value.val());
  });
});
