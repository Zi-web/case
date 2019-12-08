/*const ITEMS_COUNT_PER_CLICK = 5;

const showButton = document.querySelector('.show_more');
const items = document.querySelectorAll('.column');
const itemsCount = items.length;
let i = ITEMS_COUNT_PER_CLICK;

for (; i < itemsCount; ++i) {
	items[i].style.display = 'none';
}

i = ITEMS_COUNT_PER_CLICK;

const callback = (event) => {
	if (i >= itemsCount) {
  	/*alert('nothing to show!');*/
    /*showButton.removeEventListener('click', callback);*/
    /*showButton.outerHTML = '';*/
    /*return;
  }
  
  items[i++].style.display = '';
  if (i < itemsCount) {
  	items[i++].style.display = '';
  }
};

showButton.addEventListener('click', callback);
*/

/*
let showProduct = function() {
  let li = document.getElementsByTagName('li');
  let count = 4;
  for (item of li) {
    if (getComputedStyle(item).display == 'none' && count > 0) {
      item.style.display = 'block';
      count--;
    }
  }
}*/

var showProduct = function showProduct() {
  var li = document.getElementsByClassName("column");
  var count = 5;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (
      var _iterator = li[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      item = _step.value;

      if (getComputedStyle(item).display == "none" && count > 0) {
        item.style.display = "block";
        count--;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};


/*--------------*/

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;*/
}