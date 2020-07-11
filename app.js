var min = 0
var sec = 0
var msec = 0


var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var sDisable = document.getElementById("start")
var interval;
//var record1 = document.getElementById("record1")

var firstmin = document.getElementById("min")
var firstsec = document.getElementById("sec")
var firstmsec = document.getElementById("msec")

// var secondmin = document.getElementById("min")
// var secondsec = document.getElementById("sec")
// var secondmsec = document.getElementById("msec")



function timer() {
msec++
msecHeading.innerHTML = msec;
if (msec >= 100) {
    sec++
    secHeading.innerHTML = sec
    msec = 0;
}

else if(sec >= 60)  {
    min++
    minHeading.innerHTML = min;
    sec =0 
}
}

function start(){

    interval = setInterval(timer, 10)
   
    sDisable.disabled = true
}

function stop() {
clearInterval(interval)
sDisable.disabled = false
}

function reset() {

    
  


    // document.write()
    // document.write()
    // document.write()
    
    
    min = 0
    sec = 0
    msec = 0

    msecHeading.innerHTML = msec
    secHeading.innerHTML = sec
    minHeading.innerHTML = min
    stop()

}


function record(){

    firstmin = min
    firstsec = sec
    firstmsec = msec
    
    //return 
    
    //record1.getElementById =   document.getElementById("record1")     
    recordm.innerHTML = (firstmin+" Minutes"+"\n")
    records.innerHTML = (firstsec+" Seconds"+"\n")
    recordms.innerHTML = (firstmsec+" M.Seconds"+"</br>")
 //   document.write(firstmin+" Minutes"+firstsec+" Seconds"+firstmsec+" M.Seconds"+"</br>")
    
    
    // document.innerHTML= "<H1>HIGH LOW</H1>"
//     document.innerHTML= "<div><h1 class="record1" id="recordm"></h1>
//     <h1 class="record1" id="records"></h1>
//     <h1 class="record1" id="recordms"></h1>
// </div>"

    firstmin = 0
    firstsec = 0
    firstmsec = 0


}