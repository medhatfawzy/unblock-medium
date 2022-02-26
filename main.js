var currentURL = window.location.href;
 if (currentURL.includes("medium.com")){
     window.location.assign(`https://mirror-medium.com/?m=${currentURL}`);
 }