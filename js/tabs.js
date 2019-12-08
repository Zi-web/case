(function () {
  var mama = document.getElementsByClassName('tabcontent');

  var _loop = function _loop(m) {
        var link = mama[m].getElementsByClassName('tablinks');
var tab = mama[m].getElementsByClassName('tab');

    var _loop2 = function _loop2(i) {
      link[i].addEventListener('click', function () {
        for (var u = 0; u < link.length; u++) {
          link[u].classList.remove('active');
          tab[u].style.display = 'none';
        }

        this.classList.add('active');
        tab[i].style.display = 'block';
      });
    };

    for (var i = 0; i < link.length; i++) {
      _loop2(i);
    }
  };

  for (var m = 0; m < mama.length; m++) {
    _loop(m);
  }
})();

/*document.getElementsByClassName('tabcontent')[0].getElementsByClassName('tablinks');*/
/*document.getElementsByClassName('tabcontent')[1].getElementsByClassName('tablinks');*/