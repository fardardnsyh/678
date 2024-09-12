/** function that allows us to filter projects */

window.filterObjects = function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
  }
}

window.addClass = function addClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for(i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1){
      element.className += " " + arr2[i];
    }
  }
}

window.removeClass = function removeClass(element, name ){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for(i = 0; i < arr2.length; i++){
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ");
}

window.filterObjects("all");