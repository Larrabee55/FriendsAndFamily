function drpJSON() {
  var data_file = "FriendsAndFamily.json";
  var http_request = new XMLHttpRequest();
  try {
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();

  } catch (e) {
    // Internet Explorer Browsers
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }
    }
  }
  http_request.onreadystatechange = function () {
    if (http_request.readyState == 4) {
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);

      // jsonObj variable now contains the data structure and can
      // be accessed as jsonObj.name and jsonObj.country.
      var Name = "";
      var Relation = "";
      for (var i = 0; i < jsonObj.people.length; i++) {
        if (jsonObj.people[i].relation == document.getElementById("relationSel").value && document.getElementById("relationSel").value != 0) {
          Name = Name + jsonObj.people[i].name + " " + jsonObj.people[i].lname + "<br>";
          Relation = Relation + jsonObj.people[i].relation + "<br>";

          var selection = i;
        }
      }
      console.log(selection + "using my code");
      document.getElementById("Name").innerHTML = Name;
      document.getElementById("Relation").innerHTML = Relation;
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}
// for the write in element
function wrtJSON() {

  var data_file = "FriendsAndFamily.json";
  var http_request = new XMLHttpRequest();

  try {
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();

  } catch (e) {
    // Internet Explorer Browsers
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }
    }
  }
  http_request.onreadystatechange = function () {
    if (http_request.readyState == 4) {
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);

      // jsonObj variable now contains the data structure and can
      // be accessed as jsonObj.name and jsonObj.country.
      var Name = "";
      var Relation = "";

      for (var i = 0; i < jsonObj.people.length; i++) {
        console.log(i)
        if (jsonObj.people[i].name.indexOf(document.getElementById("RelationName").value) > -1 && document.getElementById("RelationName").value != "") {
          Name = Name + jsonObj.people[i].name + " " + jsonObj.people[i].lname + "<br>";
          Relation = Relation + jsonObj.people[i].relation + "<br>";

          var selection = i;
        } else if (jsonObj.people[i].lname.indexOf(document.getElementById("RelationName").value) > -1 && document.getElementById("RelationName").value != "") {
          Name = Name + jsonObj.people[i].name + " " + jsonObj.people[i].lname + "<br>";
          Relation = Relation + jsonObj.people[i].relation + "<br>";

          var selection = i;
        }
      }
      console.log(selection + "Using my code");
      document.getElementById("Name").innerHTML = Name;
      document.getElementById("Relation").innerHTML = Relation;
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

function bothJSON() {

  var data_file = "FriendsAndFamily.json";
  var http_request = new XMLHttpRequest();

  try {
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();

  } catch (e) {
    // Internet Explorer Browsers
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }
    }
  }
  http_request.onreadystatechange = function () {
    if (http_request.readyState == 4) {
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);

      // jsonObj variable now contains the data structure and can
      // be accessed as jsonObj.name and jsonObj.country.
      var Name = "";
      var Relation = "";

      for (var i = 0; i < jsonObj.people.length; i++) {
        console.log(i)
        if (jsonObj.people[i].name.indexOf(document.getElementById("nameAndRelation").value) > -1 && document.getElementById("nameAndRelation").value != "") {
          Name = Name + jsonObj.people[i].name + " " + jsonObj.people[i].lname + "<br>";
          Relation = Relation + jsonObj.people[i].relation + "<br>";

          var selection = i;
        } else if (jsonObj.people[i].lname.indexOf(document.getElementById("nameAndRelation").value) > -1 && document.getElementById("nameAndRelation").value != "") {
          Name = Name + jsonObj.people[i].name + " " + jsonObj.people[i].lname + "<br>";
          Relation = Relation + jsonObj.people[i].relation + "<br>";

          var selection = i;
        } else if (jsonObj.people[i].relation.indexOf(document.getElementById("nameAndRelation").value) > -1 && document.getElementById("nameAndRelation").value != "") {
          Name = Name + jsonObj.people[i].name + " " + jsonObj.people[i].lname + "<br>";
          Relation = Relation + jsonObj.people[i].relation + "<br>";

          var selection = i;
        }
      }
      console.log(selection + "Using my code");
      document.getElementById("Name").innerHTML = Name;
      document.getElementById("Relation").innerHTML = Relation;
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

function allJSON() {

  var data_file = "FriendsAndFamily.json";
  var http_request = new XMLHttpRequest();

  try {
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();

  } catch (e) {
    // Internet Explorer Browsers
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }
    }
  }
  http_request.onreadystatechange = function () {
    if (http_request.readyState == 4) {
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);

      // jsonObj variable now contains the data structure and can
      // be accessed as jsonObj.name and jsonObj.country.
      var Name = "";
      var Relation = "";

      for (var i = 0; i < jsonObj.people.length; i++) {
        console.log(i)
        Name = Name + jsonObj.people[i].name + " " + jsonObj.people[i].lname + "<br>";
        Relation = Relation + jsonObj.people[i].relation + "<br>";
      }

      document.getElementById("Name").innerHTML = Name;
      document.getElementById("Relation").innerHTML = Relation;
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}