var SweetSelector = (function(){

  var select = function(tag){
    var selectorType = tag.charAt(0)
    var selector = cropTag(tag, selectorType)
    var elements = elementSelector(selectorType, selector)
    return elements
  };

  var cropTag = function(tag, selectorType) {
    if (selectorType === '.' || selectorType === '#') {
      return (tag.substr(1,tag.length ));
    } else {
      return tag;
    }
  };

  var elementSelector = function(selectorType, selector){
    switch(selectorType) {
      case '.':
        return document.getElementsByClassName(selector);
      case '#':
        return document.getElementById(selector);
      default:
        return document.querySelectorAll(selector);
    }
  };

  return {
    select: select
  };


})();


var DOM = (function(){

  var hide = function(tag){
    var attrName = 'style'
    var attrValue = 'display: none;'
    var elements = wrapSingleElement(SweetSelector.select(tag))
    addAttr(elements, attrName, attrValue);
  }

  var show = function(tag){
    var attrName = 'style'
    var attrValue = 'display: block;'
    var elements = wrapSingleElement(SweetSelector.select(tag))
    addAttr(elements, attrName, attrValue);
  }

  var addClass = function(tag, newClass){
    var elements = wrapSingleElement(SweetSelector.select(tag))
    updateClass(elements, newClass)
  }

  var updateClass = function(elements, newClass){
    for(var i = 0; i < elements.length; i++){
      elements[i].classList.add(newClass)

    }

  }

  var addAttr = function(elements, attrName, attrValue){
    for(var i = 0; i < elements.length; i++){
      elements[i].setAttribute(attrName, attrValue)
    }
  }

  var wrapSingleElement = function(elements){
    if (Object.prototype.toString.call(elements) === "[object HTMLDivElement]"){
      elements = [elements];
    };
    return elements;
  }

  return {
    hide: hide,
    show: show,
    addClass: addClass

  }

})()





























