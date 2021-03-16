chrome.runtime.onMessage.addListener(request => {

  if(request.name) {
   document.title = request.name

  if(request.isOn) {

    document.addEventListener('click', function(e) {
          e.preventDefault();
           e = e || window.event;
           var target = e.target || e.srcElement,
               text = target.textContent || target.innerText;
               console.log(target);
               target.style.visibility = "hidden"

       }, false);

  }
  else if (request.isOff){
    document.addEventListener('click', function(e) {
          e.preventDefault();
           e = e || window.event;
           var target = e.target || e.srcElement,
               text = target.textContent || target.innerText;
               console.log(target);
               target.style.visibility = "visible"

       }, false);

  }
};})
