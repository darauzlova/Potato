function popCl(){
alert('Предупреждение! Вы сейчас перейдете на другую страницу.');
}
window.onload = function(){
 window.setInterval(function(){
      var now = new Date();
       var clock = document.getElementById("clock");
     clock.innerHTML = now.toLocaleTimeString();
 }, 1000);
};