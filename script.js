function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    const today = new Date()
    // console.log(today.getHours())
    cityName.innerHTML = "--" + newName.value + "--";

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=c3784919fef5acbc46a727e187ad10e8')
        .then(response => response.json())
        .then(data => {



            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";

            }

            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
            }





            for (i = 0; i < 5; i++) {
                document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
                    data.list[i].weather[0].icon
                    + ".png";
            }


            // for(i=0;i < 40;i++){
            //     let mydt =data.list[i].dt_txt;
            //     console.log(mydt);
            //     let mys = mydt.slice(0, 10);
            //     console.log(mys);


            // }





            console.log(data)



        })

        .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "Mohali";
    GetInfo();
}



var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
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


        document.querySelectorAll('.mytr').forEach(function (a) {
        a.remove()
    })
    }
   
});



function iconone() {
    var inpuval = document.getElementById("cityInput");
    document.querySelectorAll('.mytr').forEach(function (a) {
        a.remove()
    })

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inpuval.value + '&appid=c3784919fef5acbc46a727e187ad10e8')
        .then(response => response.json())
        .then(data => {

            // const d = new Date("2021-09-22 09:00:00");
            // var data_filter = data.filter(element => element.list[i].dt_txt == "2021-09-22")
            // console.log(data_filter)
            // if (d == mydt) {
            //         alert('yes');
            //     } else {
            //         alert('no');
            //         console.log(mys);
            //     }

            const d = new Date();
            let year = d.getFullYear();
            let moun = d.getMonth() + 1;
            let ddate = d.getDate();

            let fulldate = year + '-0' + moun + '-' + (ddate);
            for (i = 0; i < 4; i++) {
                let mydt = data.list[i].dt_txt;
                // console.log(mydt);
                let mys = mydt.slice(0, 10);
                // console.log(mys);

                if (fulldate == mys) {
                    let addDiv = document.createElement('tr');
                    addDiv.className += "mytr";

                    addDiv.innerHTML = ` 
                    <td>${data.list[i].dt_txt.slice(11,19)} °</td>
            <td>${Number(data.list[i].main.temp_min - 273.15).toFixed(1)} °</td>
                <td>${Number(data.list[i].main.temp_max - 273.15).toFixed(1)} °</td>`;


                    document.getElementById("hourreport").appendChild(addDiv);
                    ;


                 } 
                 else {
                    alert('no');
                    console.log(mys);
                    console.log(fulldate);
                }




            }





        }).catch(err => alert("na na na "))
}

function icontwo() {
    var inpuval = document.getElementById("cityInput");
    document.querySelectorAll('.mytr').forEach(function (a) {
        a.remove()
    })


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inpuval.value + '&appid=c3784919fef5acbc46a727e187ad10e8')
        .then(response => response.json())
        .then(data => {

            // const d = new Date("2021-09-22 09:00:00");
            // var data_filter = data.filter(element => element.list[i].dt_txt == "2021-09-22")
            // console.log(data_filter)
            // if (d == mydt) {
            //         alert('yes');
            //     } else {
            //         alert('no');
            //         console.log(mys);
            //     }

            const d = new Date();
            let year = d.getFullYear();
            let moun = d.getMonth();
            let ddate = d.getDate();


            let fulldate = year + '-0' + (moun + 1) + '-' + (ddate + 1);
            for (i = 4; i < 10; i++) {
                let mydt = data.list[i].dt_txt;
                // console.log(mydt);
                let mys = mydt.slice(0, 10);
                // console.log(mys);

                if (fulldate == mys) {
                    let addDiv = document.createElement('tr');
                    addDiv.className += "mytr";


                    addDiv.innerHTML = ` 
                    <td>${data.list[i].dt_txt.slice(11,19)} °</td>
            <td>${Number(data.list[i].main.temp_min - 273.15).toFixed(1)} °</td>
                <td>${Number(data.list[i].main.temp_max - 273.15).toFixed(1)} °</td>`;


                    document.getElementById("hourreport").appendChild(addDiv);


                } else {
                    // alert('no');
                    // console.log(mys);
                    // console.log(fulldate);
                }




            }





        }).catch(err => alert("na na na "))
}
function iconthree() {
    var inpuval = document.getElementById("cityInput");
    document.querySelectorAll('.mytr').forEach(function (a) {
        a.remove()
    })


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inpuval.value + '&appid=c3784919fef5acbc46a727e187ad10e8')
        .then(response => response.json())
        .then(data => {

            // const d = new Date("2021-09-22 09:00:00");
            // var data_filter = data.filter(element => element.list[i].dt_txt == "2021-09-22")
            // console.log(data_filter)
            // if (d == mydt) {
            //         alert('yes');
            //     } else {
            //         alert('no');
            //         console.log(mys);
            //     }

            const d = new Date();
            let year = d.getFullYear();
            let moun = d.getMonth();
            let ddate = d.getDate();


            let fulldate = year + '-0' + (moun + 1) + '-' + (ddate + 2);
            for (i = 11; i < 18; i++) {
                let mydt = data.list[i].dt_txt;
                // console.log(mydt);
                let mys = mydt.slice(0, 10);
                // console.log(mys);

                if (fulldate == mys) {
                    let addDiv = document.createElement('tr');
                    addDiv.className += "mytr";


                    addDiv.innerHTML = ` 
                    <td>${data.list[i].dt_txt.slice(11,19)} °</td>
            <td>${Number(data.list[i].main.temp_min - 273.15).toFixed(1)} °</td>
                <td>${Number(data.list[i].main.temp_max - 273.15).toFixed(1)} °</td>`;


                    document.getElementById("hourreport").appendChild(addDiv);


                } else {
                    alert('no');
                    console.log(mys);
                    console.log(fulldate);
                }




            }





        }).catch(err => alert("na na na "))
}


function iconfour() {
    var inpuval = document.getElementById("cityInput");
    document.querySelectorAll('.mytr').forEach(function (a) {
        a.remove()
    })


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inpuval.value + '&appid=c3784919fef5acbc46a727e187ad10e8')
        .then(response => response.json())
        .then(data => {

            // const d = new Date("2021-09-22 09:00:00");
            // var data_filter = data.filter(element => element.list[i].dt_txt == "2021-09-22")
            // console.log(data_filter)
            // if (d == mydt) {
            //         alert('yes');
            //     } else {
            //         alert('no');
            //         console.log(mys);
            //     }

            const d = new Date();
            let year = d.getFullYear();
            let moun = d.getMonth();
            let ddate = d.getDate();


            let fulldate = year + '-0' + (moun + 1) + '-' + (ddate + 3);
            for (i = 19; i < 26; i++) {
                let mydt = data.list[i].dt_txt;
                // console.log(mydt);
                let mys = mydt.slice(0, 10);
                // console.log(mys);

                if (fulldate == mys) {
                    let addDiv = document.createElement('tr');
                    addDiv.className += "mytr";


                    addDiv.innerHTML = `
                    <td>${data.list[i].dt_txt.slice(11,19)} °</td> 
            <td>${Number(data.list[i].main.temp_min - 273.15).toFixed(1)} °</td>
                <td>${Number(data.list[i].main.temp_max - 273.15).toFixed(1)} °</td>`;


                    document.getElementById("hourreport").appendChild(addDiv);


                } else {
                    alert('no');
                    console.log(mys);
                    console.log(fulldate);
                }




            }





        }).catch(err => alert("na na na "))
}


function iconfive() {
    var inpuval = document.getElementById("cityInput");
    document.querySelectorAll('.mytr').forEach(function (a) {
        a.remove()
    })


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inpuval.value + '&appid=c3784919fef5acbc46a727e187ad10e8')
        .then(response => response.json())
        .then(data => {

            // const d = new Date("2021-09-22 09:00:00");
            // var data_filter = data.filter(element => element.list[i].dt_txt == "2021-09-22")
            // console.log(data_filter)
            // if (d == mydt) {
            //         alert('yes');
            //     } else {
            //         alert('no');
            //         console.log(mys);
            //     }

            const d = new Date();
            let year = d.getFullYear();
            let moun = d.getMonth();
            let ddate = d.getDate();


            let fulldate = year + '-0' + (moun + 1) + '-' + (ddate + 4);
            for (i = 27; i < 34; i++) {
                let mydt = data.list[i].dt_txt;
                // console.log(mydt);
                let mys = mydt.slice(0, 10);
                // console.log(mys);

                if (fulldate == mys) {
                    let addDiv = document.createElement('tr');
                    addDiv.className += "mytr";


                    addDiv.innerHTML = ` 
                    <td>${data.list[i].dt_txt.slice(11,19)} °</td>
            <td>${Number(data.list[i].main.temp_min - 273.15).toFixed(1)} °</td>
                <td>${Number(data.list[i].main.temp_max - 273.15).toFixed(1)} °</td>`;


                    document.getElementById("hourreport").appendChild(addDiv);


                } else {
                    alert('no');
                    console.log(mys);
                    console.log(fulldate);
                }




            }





        }).catch(err => alert("na na na "))
}