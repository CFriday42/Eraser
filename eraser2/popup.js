var isOn = true;

document.getElementById('turnon').addEventListener("click", function() {

    chrome.tabs.query({url: '<all_urls>'}, tabs => {

        tabs.forEach(tab =>
            chrome.tabs.sendMessage(tab.id, { isOn } )
          );
     });

   });


   var isOff = true;

   document.getElementById('turnoff').addEventListener("click", function() {

       chrome.tabs.query({url: '<all_urls>'}, tabs => {

           tabs.forEach(tab =>
               chrome.tabs.sendMessage(tab.id, { isOff } )
             );
        });

});
