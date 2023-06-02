
slides = false;

let pistures = ["../img/confused.jpeg","../img/jidlo.jpeg","../img/koule.jpeg","../img/sad.jpeg","../img/znacka.jpeg"];
let i = 0;


function slideshow(){
  i = (i+1)%5;
  console.log("i = " + i);
  console.log(pistures[i]);
  document.getElementById("slideshow").src = pistures[i];
  if(slides){
    setTimeout(() => { slideshow();},2000);
  }
}

function slide(){
  slides = !slides;
  console.log(slides);
  if(slides){
    document.getElementById("slid").style.height = "600px";
    setTimeout(() => { document.getElementById("slideshow").style.visibility = "visible";},500);
  }else{
    document.getElementById("slid").style.height = "10px";
    document.getElementById("slideshow").style.visibility = "hidden";
  }
}

let nav = false;

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


function setupp(){
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;  // Add 1 because months are zero-based (0-11)
  const year = currentDate.getFullYear();
  
  const numericDate = `${day}. ${month}. ${year}`;
  
  console.log(numericDate);
  document.getElementById("date").innerHTML = numericDate;
}
  