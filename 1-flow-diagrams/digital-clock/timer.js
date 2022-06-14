"use strict"

const sumSecond = require("./digital-clock")

var s = 50
var m = 59
var h = 23

setInterval(() => {
    var currentHour = sumSecond(h,m,s)
    var timeUnits = currentHour.split(':')
    h = timeUnits[0]
    m = timeUnits[1]
    s = timeUnits[2]
    console.log(currentHour)
}, 1000)
