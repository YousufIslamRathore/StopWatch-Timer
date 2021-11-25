var hourTag = document.getElementById("hour")
var minTag = document.getElementById("min")
var secTag = document.getElementById("sec")
var msecTag = document.getElementById("msec")
var hours = 0
var minutes = 0
var seconds = 0
var m_seconds = 0
var intervals


function stopWatch() {
    m_seconds++
    msecTag.innerHTML = m_seconds
    if (m_seconds == 100) {
        seconds++
        secTag.innerHTML = seconds
        m_seconds = 0
    }
    else if (seconds == 60) {
        minutes++
        minTag.innerHTML = minutes
        seconds = 0
    }
    else if (minutes == 60) {
        hours++
        hourTag.innerHTML = hours
        minutes = 0
    }
}

var startbtn = document.getElementById("startbtn")
var stopbtn = document.getElementById("stopbtn")
var resetbtn = document.getElementById("resetbtn")
stopbtn.disabled = true
resetbtn.disabled = true


function start() {
    intervals = setInterval(stopWatch, 10)
    startbtn.disabled = true
    startbtn.innerHTML = "Start"
    stopbtn.disabled = false
    resetbtn.disabled = false
}


function stop() {  
    clearInterval(intervals)
    startbtn.disabled = false
    startbtn.innerHTML = "Resume"
    stopbtn.disabled = true
    resetbtn.disabled = false
}


function reset() {
    clearInterval(intervals)
    msecTag.innerHTML = "00"
    secTag.innerHTML = "00"
    minTag.innerHTML = "00"
    hourTag.innerHTML = "00"
    hours = 0
    minutes = 0
    seconds = 0
    m_seconds = 0
    startbtn.innerHTML = "Start"
    resetbtn.disabled = true
    stopbtn.disabled = true
    startbtn.disabled = false
}