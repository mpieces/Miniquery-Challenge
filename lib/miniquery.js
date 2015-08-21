var sweetSelector = (function(){


  var select = function(selector){
    var type = selector[0]
    console.log(selector.substr(1))
    if(type === "#"){ return document.getElementById(selector.substr(1)) }
    else if(type === "."){ return document.getElementsByClassName(selector.substr(1)) }
    else{return document.querySelectorAll(selector)}
      }

  return {
    select: select
  }

})()

// var aim = sweetSelector.select("#target")
// console.log(aim)
// var getClass = sweetSelector.select(".peeperrams")
// console.log(getClass)
// var getTagName = sweetSelector.select("h1")
// console.log(getTagName);


var DOM = (function() {
  var hide = function(selector){
    var element = sweetSelector.select(selector)
    // console.log(element)
    element.style.visibility = "hidden";
  }

  var add = function(selector, newClass){
    var element = sweetSelector.select(selector)
    element.className = element.className + " " + newClass
  }

  var remove = function(selector, oldClass){
    var element = sweetSelector.select(selector)
    element.className = ""
  }
  return {
    hide: hide,
    add: add,
    remove: remove
  }
})()

// DOM.hide("#target")
// DOM.add("#target2", "target3")
// DOM.remove("#target2", "#target3")

var EventDispatcher = (function(){

  var on = function(selector){
    var element = sweetSelector.select(selector)
    console.log(element)
    element.addEventListener("click", function(){console.log('awesome')})
  }
  return { on:on}
})()

// EventDispatcher.on("#target4")




