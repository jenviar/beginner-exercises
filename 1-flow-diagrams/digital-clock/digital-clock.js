"use strict"

const sumSecond = function (h,m,s) {
    s++
if (s == 60) {
    m++
    s = 0
    if(m==60){
    h++
    m = 0
    if(h==24){
    h = 0
    }
    }}
    return `${h}:${m}:${s}`
}
module.exports = sumSecond