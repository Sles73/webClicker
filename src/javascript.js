let body = 0;
console.log(getCookie("bod"));

if(parseInt(parseInt(getCookie("bod"))) > 0){
    body = parseInt(getCookie("bod"));
    document.getElementById("bod").innerHTML = body;
}



console.log(body);

function hh(){
    body += 1;
    console.log(body);
    document.getElementById("bod").innerHTML = body;
    setCookie("bod",body,5);
    console.log(body.toString());
    console.log(getCookie("bod"));
}

let nav = false;

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function Nav(){
    if(nav){
      openNav()
    }else{
      closeNav()
    }
    nav=!nav;
  }



  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("topbar").style.height = "250px";
    document.getElementById("topbar").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("topbar").style.height = "0";
    document.getElementById("topbar").style.width = "0";
  }