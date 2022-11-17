var countDownDate = new Date("april 5, 2023 12:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var month = Math.floor (distance / (1000 * 60 * 60 * 24*30));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24*30)) / (1000 * 60 * 60*24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = "<div>"+month + " <span>MONTHS</span></div><div>" + days + " <span>DAYS</span></div><div>" +hours + " <span>HOURS</span></div><div>" + minutes + " <span>MINUTES</span></div><div>"  + seconds + " <span>SEC</span></div>";
}, 1000);
