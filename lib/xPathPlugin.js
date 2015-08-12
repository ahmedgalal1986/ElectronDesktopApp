// return context from xPath
function getContext(STR_XPATH) {
  var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
  var xnodes = [];
  var xres;
  while (xres = xresult.iterateNext()) {
    xnodes.push(xres);
  }
   return xnodes;
}

function fireClickEvent(STR_XPATH){
  var strContext = getContext(STR_XPATH);
  $(strContext).trigger('click');
}

function clickHello(){
  alert('Click Event Successed !');
}

function onClickTest(){
  fireClickEvent('/html/body/button[1]');
}
