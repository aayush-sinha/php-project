function next_group_multiple() {
  $(".rad").each(function() {
    if ($(this).is(":checked")) {
      var choice_id = $(this).val();
      var id = $(this).attr("name");
      raw1.evidence.push({
        id: id,
        choice_id: choice_id
      });
    } else {
      // Or an unchecked one here...
    }
  });
  console.log(raw1);
  document.getElementById("ques").innerHTML = "";
  document.getElementById("first-item").innerHTML = "";
  buttonHandler(raw1);
}

function next_group_single() {
  $(".rad").each(function() {
    if ($(this).is(":checked")) {
      var choice_id = "present";
      var id = $(this).attr("value");
      raw1.evidence.push({
        id: id,
        choice_id: choice_id
      });
    } else {
      // Or an unchecked one here...
    }
  });
  console.log(raw1);
  document.getElementById("ques").innerHTML = "";
  document.getElementById("first-item").innerHTML = "";
  buttonHandler(raw1);
}
function next_single() {
  $(".rad").each(function() {
    if ($(this).is(":checked")) {
      var choice_id = $(this).val();
      var id = $(this).attr("name");
      raw1.evidence.push({
        id: id,
        choice_id: choice_id
      });
    } else {
      // Or an unchecked one here...
    }
  });
  console.log(raw1);
  document.getElementById("ques").innerHTML = "";
  document.getElementById("first-item").innerHTML = "";
  buttonHandler(raw1);
}
