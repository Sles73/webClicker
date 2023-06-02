


function hh(){
    body += 1;
    console.log(body);
    document.getElementById("bod").innerHTML = body.toFixed(1);
    setCookie("bod",body,5);
    console.log(body.toString());
    console.log(getCookie("bod"));
}

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


  function cursor(whitch){
    switch(whitch) {
      case 1:
        if(body>=15){
          body -= 15
          cursors += 1;
          setCookie("cursors",cursors,5);
          document.getElementById("bod").innerHTML = body.toFixed(1);
          document.getElementById("cursors").innerHTML = cursors;
        }else{
          document.getElementById("cost_" + whitch).style.color = "red";
          setTimeout(() => { document.getElementById("cost_" + whitch).style.color = "#FFB20F";},200);
        }
        break;
      case 2:
        if(body>=200){
          body -= 200
          granny += 1;
          setCookie("granny",granny,5);
          document.getElementById("bod").innerHTML = body.toFixed(1);
          document.getElementById("granny").innerHTML = granny;
        }else{
          document.getElementById("cost_" + whitch).style.color = "red";
          setTimeout(() => { document.getElementById("cost_" + whitch).style.color = "#FFB20F";},200);
        }
        break;
      default:
        // code block
    }
    
  }

function calculate_cookies(){
    console.log(body);
    body += cursors/10 + granny;
    setCookie("bod",body,5);
    document.getElementById("bod").innerHTML = body.toFixed(1);
    setTimeout(() => { calculate_cookies();},100);
}

function reset(){
  setCookie("bod",0,5);
  setCookie("cursors",0,5);
  setCookie("granny",0,5);
  body = 0;
  cursors = 0;
  granny = 0;
  document.getElementById("granny").innerHTML = granny;
  document.getElementById("cursors").innerHTML = cursors;
  document.getElementById("bod").innerHTML = body;
}

let body = 0;
let cursors = 0;
let granny = 0;

function setup(){

  console.log(getCookie("bod"));

  if(parseInt(parseInt(getCookie("granny"))) > 0){
    granny = parseInt(getCookie("granny"));
  }

  if(parseInt(parseInt(getCookie("cursors"))) > 0){
    cursors = parseInt(getCookie("cursors"));
  }

  if(parseInt(parseInt(getCookie("bod"))) > 0){
      body = parseFloat(getCookie("bod"));
  }
  document.getElementById("granny").innerHTML = granny;
  document.getElementById("cursors").innerHTML = cursors;
  document.getElementById("bod").innerHTML = body;

  calculate_cookies();

  console.log(body);
}

