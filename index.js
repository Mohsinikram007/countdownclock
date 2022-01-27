let day = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let det = document.getElementsByClassName("details");
let container = document.querySelector('.container');


function enter()
{
    let yourdate =document.getElementById("yourdate").value;
    console.log(yourdate);
}



var countDownDate = new Date("Jan 14, 2022 18:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"

  day.innerHTML =days+" DAYS"
hour.innerHTML = hours +" HOURS"
min.innerHTML =minutes +" MINS"
sec.innerHTML =seconds+ " SEC "
  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    container.style.display = "none"
    document.write("EXPIRED").style.fontSize = "72px";


  }
}, 1000);