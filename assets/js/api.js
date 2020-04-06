$("#load").hide();
var myHeaders = new Headers();
myHeaders.append("App-Id", "25c59b49");
myHeaders.append("App-Key", "99493e3b1e6e826aa4888f18065daf21");
myHeaders.append("Content-Type", "application/json");

function starter() {
  if (document.getElementById("male").checked) {
    var sex = "male";
  }
  if (document.getElementById("female").checked) {
    var sex = "female";
  }
  raw1 = {
    sex: sex,
    age: parseInt(document.getElementById("age").value),
    evidence: []
  };
  console.log(raw1);
  document.getElementById("ques").innerHTML = "";
  document.getElementById("first-item").innerHTML = "";
  buttonHandler(raw1);
}

function buttonHandler(raw1) {
  $("#next1").hide();
  $("#load").show();
  var raw = JSON.stringify(raw1);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://api.infermedica.com/covid19/diagnosis", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      $("#load").hide();
      $("#next1").show();
      if (!result.should_stop) {
        var ques_type = result.question.type;
        console.log(ques_type);
        if (ques_type == "single") {
          func_single(result);
        }
        if (ques_type == "group_single") {
          func_group_single(result);
        }
        if (ques_type == "group_multiple") {
          func_group_multiple(result);
        }
      } else {
        fetch("https://api.infermedica.com/covid19/triage", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            $("#load").hide();
            $("#next1").hide();
            if (result.triage_level == "no_risk") {
              document.getElementById("top-img-div").style.backgroundColor =
                "#A7e074";
              document.getElementById("img-info").src = "assets/img/succ.png";
              document.getElementById(
                "ques"
              ).innerHTML = `${result.label}<br /><h2 style="font-size: 15px;font-weight: 200;color: #47536e; margin-top: 30px;font-family: Poppins;"
              class="list-head">${result.description}</h2>`;
            }
            if (
              result.triage_level == "self_monitoring" ||
              result.triage_level == "quarantine"
            ) {
              document.getElementById("top-img-div").style.backgroundColor =
                "#eac03b";
              document.getElementById("img-info").src =
                "assets/img/covidWarn.png";
              document.getElementById(
                "ques"
              ).innerHTML = `${result.label}<br /><h2 style="font-size: 15px;font-weight: 200;color: #47536e;margin-top: 30px;font-family: Poppins;"
              class="list-head">${result.description}</h2><hr>`;
              result.serious.forEach(serious);
            }
            if (
              result.triage_level == "isolation_call" ||
              result.triage_level == "call_doctor" ||
              result.triage_level == "isolation_ambulance"
            ) {
              document.getElementById("top-img-div").style.backgroundColor =
                "#f65656";
              document.getElementById("img-info").src =
                "assets/img/covidWarn.png";
              document.getElementById(
                "ques"
              ).innerHTML = `${result.label}<br /><h2 style="font-size: 15px;font-weight: 200;color: #47536e;margin-top: 30px;font-family: Poppins;"
              class="list-head">${result.description}</h2><hr>`;
              document.getElementById(
                "first-item"
              ).innerHTML = `<p style="margin-left:30px">Symptoms:<p>`;
              result.serious.forEach(serious);
            }
          })
          .catch(error => console.log("error", error));
      }
    })
    .catch(error => console.log("error", error));
}
function serious(item) {
  document.getElementById(
    "first-item"
  ).innerHTML += `<li style="margin-left: 30px; text-align: left">
  ${item.name}
</li>`;
}
function display_ques(ques) {
  document.getElementById("ques").innerHTML = ques;
}

function func_single(result) {
  document.getElementById(
    "next1"
  ).innerHTML = `<button class="btn btn-primary" id="next1" type="button" onclick="next_single()">
  Next
</button>`;
  display_ques(result.question.text);
  result.question.items.forEach(display_item_single);
}

function func_group_single(result) {
  document.getElementById(
    "next1"
  ).innerHTML = `<button class="btn btn-primary" id="next1" type="button" onclick="next_group_single()">
  Next
</button>`;
  display_ques(result.question.text);
  result.question.items.forEach(display_item_group_single);
}

function func_group_multiple(result) {
  document.getElementById(
    "next1"
  ).innerHTML = `<button class="btn btn-primary" id="next1" type="button" onclick="next_group_multiple()">
  Next
</button>`;
  display_ques(result.question.text);
  result.question.items.forEach(display_item_group_multiple);
}

function display_item_single(item, index) {
  document.getElementById(
    "first-item"
  ).innerHTML += `<li class="list-group-item">
  <h2 style="font-size: 18px;font-weight: 200;color: #5777ba;font-family: Poppins;"
      class="list-head">${item.name}</h2>

      <label class="radio-inline">
      <input type="radio" class="rad" name=${item.id} value="present">&ensp;&ensp;Yes&emsp;&emsp;
    </label>
    <label class="radio-inline">
     <input type="radio" class="rad" name=${item.id} value="absent">&ensp;&ensp;No&emsp;&emsp;
    </label>


</li>`;
}

function display_item_group_multiple(item, index) {
  // console.log("item no:"+ index);
  document.getElementById(
    "first-item"
  ).innerHTML += `<li class="list-group-item">
  <h2 style="font-size: 18px;font-weight: 200;color: #5777ba;font-family: Poppins;"
      class="list-head">${item.name}</h2>
  
      <label class="radio-inline">
        <input type="radio" class="rad" name=${item.id} value="present">&ensp;&ensp;Yes&emsp;&emsp;
      </label>
      <label class="radio-inline">
       <input type="radio" class="rad" name=${item.id} value="absent">&ensp;&ensp;No&emsp;&emsp;
      </label>
</li>`;
  //   item.choices.forEach(function(choice, index) {
  //     document.getElementById(
  //       "item"
  //     ).innerHTML += `<input type="radio" class="rad" name=${item.id} value=${choice.id}>
  //     ${choice.label}<br>`;
  //   });
}

function display_item_group_single(item, index) {
  document.getElementById(
    "first-item"
  ).innerHTML += `<li class="list-group-item">
  <h2 style="font-size: 18px;font-weight: 200;color: #5777ba;font-family: Poppins;"
      class="list-head">${item.name}</h2><input type="radio"  class="rad" 
      name="group_single" value=${item.id}>
  
 
  </li>`;

  // document.getElementById("item").innerHTML += item.name + ": <br>";

  // document.getElementById(
  //   "item"
  // ).innerHTML += `<input type="radio" class="rad" name="group_single" value=${item.id}>
  //   <br>`;
}
