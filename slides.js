(function () {
  setInterval(function () {
      var container = document.querySelector('.slider');
      var img = container.querySelector('img:first-child');
      container.appendChild(img);
  }, 3000)
})()