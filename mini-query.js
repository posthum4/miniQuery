

var SweetSelector = (function(){

  var select = function(anchorTag){
    var selector = anchorTag.charAt(0)
    console.log(selector)
    var word = croptAnchorTag(anchorTag, selector)
    console.log (word)
    switch(selector) {
      case '.':
        console.log("I am in the class path")
        console.log(word)
        var elements = document.getElementsByClassName(word);
        break
      default:
        console.log('element not returned');
    }
    return elements
  }

  var croptAnchorTag = function(anchorTag, selector) {
    if (selector === '.' || selector === '#') {
      var x = (anchorTag.substr(1,anchorTag.length ));
      console.log(x)
      return x
    } else {
      return anchorTag;
    }
  }


  return {
    select: select
  }


})();


