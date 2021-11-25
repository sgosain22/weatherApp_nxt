function GetInfo() {
  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");

  const today = new Date();
  // console.log(today.getHours())
  cityName.innerHTML = "* " + newName.value + " *";

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      newName.value +
      "&appid=c3784919fef5acbc46a727e187ad10e8"
  )
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min: " +
          Number(data.list[i].main.temp_min - 273.15).toFixed(1) +
          "°";
        // console.log(data.list[i].dt_txt);

        //   var newDate = moment(data.list[i].dt_txt).format('ll');
        //   console.log(newDate)
        //   document.getElementById('da' + (i + 1)).innerHTML = newDate;

        var newDate = moment(data.list[0].dt_txt).format("ll");
        //   console.log(newDate)
        document.getElementById("da").innerHTML = newDate;

        var newDate = moment(data.list[6].dt_txt).format("ll");
        //   console.log(newDate)
        document.getElementById("da2").innerHTML = newDate;

        var newDate = moment(data.list[14].dt_txt).format("ll");
        //   console.log(newDate)
        document.getElementById("da3").innerHTML = newDate;

        var newDate = moment(data.list[22].dt_txt).format("ll");
        //   console.log(newDate)
        document.getElementById("da4").innerHTML = newDate;

        var newDate = moment(data.list[30].dt_txt).format("ll");
        //   console.log(newDate)
        document.getElementById("da5").innerHTML = newDate;
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max: " +
          Number(data.list[i].main.temp_max - 273.15).toFixed(2) +
          "°";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }

      console.log(data);
    })

    .catch((err) => alert("Wrong City Name!"));
}

function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = "Goa";
  GetInfo();
}

var d = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

var input = document.getElementById("cityInput");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    document.getElementById("subtn").click();

    document.querySelectorAll(".mytr").forEach(function (a) {
      a.remove();
    });
  }
});

function iconone() {
  var inpuval = document.getElementById("cityInput");
  document.querySelectorAll(".mytr").forEach(function (a) {
    a.remove();
  });

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inpuval.value +
      "&units=metric&appid=56d6cb4edc01e1c035ad557f2cab09f7"
  )
    .then((response) => response.json())
    .then((data) => {
      const d = new Date();
      let year = d.getFullYear();
      let moun = d.getMonth() + 1;
      let ddate = d.getDate();
      //   let showTime = moment(data.list[i].dt_txt).format('LT');
      // console.log(showTime)
      // document.getElementById('da').innerHTML = newDate;
      let fulldate = year + "-0" + moun + "-" + ddate;
      for (i = 0; i < 4; i++) {
        let mydt = moment(data.list[i].dt_txt).format("LT");
        console.log(mydt);
        // let mys = mydt.slice(0, 10);
        //  console.log(mys);

        let addDiv = document.createElement("tr");
        addDiv.className += "mytr";

        addDiv.innerHTML = ` 
            <td>${mydt}</td>
            <td>${Number(data.list[i].main.temp_min).toFixed(1)} °</td>
            <td>${Number(data.list[i].main.temp_max).toFixed(1)} °</td>`;

        document.getElementById("hourreport").appendChild(addDiv);
        console.log(data.list[i].main.temp_min);
      }
    })
    .catch((err) => alert("na na na "));
}

// data.list[4].dt_txt

function icontwo() {
  var inpuval = document.getElementById("cityInput");
  document.querySelectorAll(".mytr").forEach(function (a) {
    a.remove();
  });

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inpuval.value +
      "&units=metric&appid=56d6cb4edc01e1c035ad557f2cab09f7"
  )
    .then((response) => response.json())
    .then((data) => {
      const d = new Date();
      let year = d.getFullYear();
      let moun = d.getMonth() + 1;
      let ddate = d.getDate();
      let fulldate = year + "-0" + moun + "-" + ddate;
      for (i = 4; i < 12; i++) {
        let mydt = moment(data.list[i].dt_txt).format("LT");
        console.log(mydt);
        // let mys = mydt.slice(0, 10);
        //  console.log(mys);

        let addDiv = document.createElement("tr");
        addDiv.className += "mytr";

        addDiv.innerHTML = ` 
            <td>${mydt}</td>
            <td>${Number(data.list[i].main.temp_min).toFixed(1)} °</td>
            <td>${Number(data.list[i].main.temp_max).toFixed(1)} °</td>`;

        document.getElementById("hourreport").appendChild(addDiv);
        console.log(data.list[i].main.temp_min);
      }
    })
    .catch((err) => alert("na na na "));
}

function iconthree() {
  var inpuval = document.getElementById("cityInput");
  document.querySelectorAll(".mytr").forEach(function (a) {
    a.remove();
  });

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inpuval.value +
      "&units=metric&appid=56d6cb4edc01e1c035ad557f2cab09f7"
  )
    .then((response) => response.json())
    .then((data) => {
      const d = new Date();
      let year = d.getFullYear();
      let moun = d.getMonth() + 1;
      let ddate = d.getDate();
      //   let showTime = moment(data.list[i].dt_txt).format('LT');
      // console.log(showTime)
      // document.getElementById('da').innerHTML = newDate;
      let fulldate = year + "-0" + moun + "-" + ddate;
      for (i = 12; i < 20; i++) {
        let mydt = moment(data.list[i].dt_txt).format("LT");
        console.log(mydt);
        // let mys = mydt.slice(0, 10);
        //  console.log(mys);

        let addDiv = document.createElement("tr");
        addDiv.className += "mytr";

        addDiv.innerHTML = ` 
            <td>${mydt}</td>
            <td>${Number(data.list[i].main.temp_min).toFixed(1)} °</td>
            <td>${Number(data.list[i].main.temp_max).toFixed(1)} °</td>`;

        document.getElementById("hourreport").appendChild(addDiv);
        console.log(data.list[i].main.temp_min);
      }
    })
    .catch((err) => alert("na na na "));
}

function iconfour() {
  var inpuval = document.getElementById("cityInput");
  document.querySelectorAll(".mytr").forEach(function (a) {
    a.remove();
  });

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inpuval.value +
      "&units=metric&appid=56d6cb4edc01e1c035ad557f2cab09f7"
  )
    .then((response) => response.json())
    .then((data) => {
      const d = new Date();
      let year = d.getFullYear();
      let moun = d.getMonth() + 1;
      let ddate = d.getDate();
      //   let showTime = moment(data.list[i].dt_txt).format('LT');
      // console.log(showTime)
      // document.getElementById('da').innerHTML = newDate;
      let fulldate = year + "-0" + moun + "-" + ddate;
      for (i = 20; i < 28; i++) {
        let mydt = moment(data.list[i].dt_txt).format("LT");
        console.log(mydt);
        // let mys = mydt.slice(0, 10);
        //  console.log(mys);

        let addDiv = document.createElement("tr");
        addDiv.className += "mytr";

        addDiv.innerHTML = ` 
            <td>${mydt}</td>
            <td>${Number(data.list[i].main.temp_min).toFixed(1)} °</td>
            <td>${Number(data.list[i].main.temp_max).toFixed(1)} °</td>`;

        document.getElementById("hourreport").appendChild(addDiv);
        console.log(data.list[i].main.temp_min);
      }
    })
    .catch((err) => alert("na na na "));
}

function iconfive() {
  var inpuval = document.getElementById("cityInput");
  document.querySelectorAll(".mytr").forEach(function (a) {
    a.remove();
  });

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inpuval.value +
      "&units=metric&appid=56d6cb4edc01e1c035ad557f2cab09f7"
  )
    .then((response) => response.json())
    .then((data) => {
      const d = new Date();
      let year = d.getFullYear();
      let moun = d.getMonth() + 1;
      let ddate = d.getDate();
      //   let showTime = moment(data.list[i].dt_txt).format('LT');
      // console.log(showTime)
      // document.getElementById('da').innerHTML = newDate;
      let fulldate = year + "-0" + moun + "-" + ddate;
      for (i = 0; i < 4; i++) {
        let mydt = moment(data.list[i].dt_txt).format("LT");
        console.log(mydt);
        // let mys = mydt.slice(0, 10);
        //  console.log(mys);

        let addDiv = document.createElement("tr");
        addDiv.className += "mytr";

        addDiv.innerHTML = ` 
            <td>${mydt}</td>
            <td>${Number(data.list[i].main.temp_min).toFixed(1)} °</td>
            <td>${Number(data.list[i].main.temp_max).toFixed(1)} °</td>`;

        document.getElementById("hourreport").appendChild(addDiv);
        console.log(data.list[i].main.temp_min);
      }
    })
    .catch((err) => alert("na na na "));
}
