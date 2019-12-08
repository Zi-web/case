document.getElementById("menu__icon").onclick = function() {open()};
      function open() {
    document.getElementById("menu").classList.toggle("menu_state_open");
}

document.getElementById("call__btn").onclick = function() {showForm()};
      function showForm() {
    document.querySelector('.overlay').classList.add("show");
    document.querySelector('.form-wrapper').classList.add("show-form");
}

document.getElementById("closeform").onclick = function() {closeForm()};
      function closeForm() {
    document.querySelector('.overlay').classList.remove("show");
    document.querySelector('.form-wrapper').classList.remove("show-form");
}


document.getElementById("btn--stat").onclick = function() {showForm2()};
      function showForm2() {
    document.querySelector('.overlay2').classList.add("show2");
    document.querySelector('.form-wrapper2').classList.add("show-form2");
}

document.getElementById("closeform2").onclick = function() {closeForm2()};
      function closeForm2() {
    document.querySelector('.overlay2').classList.remove("show2");
    document.querySelector('.form-wrapper2').classList.remove("show-form2");
}

/*----------progress-bar---------*/
/*
function move() {
	var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar1");
    var elemin = document.getElementById("myBar__percent1");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 55) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elemin.innerHTML = width  + "%";
      }
    }
  }
};
setTimeout(move, 1000);
  
function move2() {
	var i2 = 0;
  if (i2 == 0) {
    i2 = 1;
    var elem2 = document.getElementById("myBar2");
    var elemin2 = document.getElementById("myBar__percent2");
    var width2 = 10;
    var id2 = setInterval(frame2, 10);
    function frame2() {
      if (width2 >= 72) {
        clearInterval(id2);
        i2 = 0;
      } else {
        width2++;
        elem2.style.width = width2 + "%";
        elemin2.innerHTML = width2  + "%";
      }
    }
  }
};
setTimeout(move2, 1000);


function move3() {
	var i3 = 0;
  if (i3 == 0) {
    i3 = 1;
    var elem3 = document.getElementById("myBar3");
    var elemin3 = document.getElementById("myBar__percent3");
    var width3 = 10;
    var id3 = setInterval(frame3, 10);
    function frame3() {
      if (width3 >= 98) {
        clearInterval(id3);
        i3 = 0;
      } else {
        width3++;
        elem3.style.width = width3 + "%";
        elemin3.innerHTML = width3  + "%";
      }
    }
  }
};
setTimeout(move3, 1000);


function move4() {
	var i4 = 0;
  if (i4 == 0) {
    i4 = 1;
    var elem4 = document.getElementById("myBar4");
    var elemin4 = document.getElementById("myBar__percent4");
    var width4 = 10;
    var id4 = setInterval(frame4, 10);
    function frame4() {
      if (width4 >= 85) {
        clearInterval(id4);
        i4 = 0;
      } else {
        width4++;
        elem4.style.width = width4 + "%";
        elemin4.innerHTML = width4  + "%";
      }
    }
  }
};
setTimeout(move4, 1000);


function move5() {
	var i5 = 0;
  if (i5 == 0) {
    i5 = 1;
    var elem5 = document.getElementById("myBar5");
    var elemin5 = document.getElementById("myBar__percent5");
    var width5 = 10;
    var id5 = setInterval(frame5, 10);
    function frame5() {
      if (width5 >= 70) {
        clearInterval(id5);
        i5 = 0;
      } else {
        width5++;
        elem5.style.width = width5 + "%";
        elemin5.innerHTML = width5  + "%";
      }
    }
  }
};
setTimeout(move5, 1000);

 
*/
/*----------progress-bar scrolling ---------*/
/*function isOnVisibleSpace(element) {
	var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset   = elemRect.top;// - bodyRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

// глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
var listenedElements = [];
// обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements 
// на предмет попадания(выпадения) в зону видимости
window.onscroll = function() {
	listenedElements.forEach(item=>{
    // проверяем находится ли элемент в зоне видимости
  	var result = isOnVisibleSpace(item.el);
    
    // если элемент находился в зоне видимости и вышел из нее
    // вызываем обработчик выпадения из зоны видимости
    if(item.el.isOnVisibleSpace && !result){
    	item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    // если элемент находился вне зоны видимости и вошел в нее
    // вызываем обработчик попадания в зону видимости
    if(!item.el.isOnVisibleSpace && result){
    	item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}

// функция устанавливает обработчики событий 
// появления элемента в зоне видимости и
// выхода из нее
function onVisibleSpaceListener(elementId, cbIn, cbOut) {
	// получаем ссылку на объект элемента
  var el = document.getElementById("statistics_content");
  // добавляем элемент и обработчики событий 
  // в массив отслеживаемых элементов
  listenedElements.push({
  	el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut    
  });
}

// устанавливаем обработчики для элемента "video"
onVisibleSpaceListener("statistics_content", 
	el=>{
		// функция вызываемая при попадании элемента в зону видимости
    // тут вставляем код запуска анимации
    function move() {
	var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar1");
    var elemin = document.getElementById("myBar__percent1");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 55) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elemin.innerHTML = width  + "%";
      }
    }
  }
}; move();
  
function move2() {
	var i2 = 0;
  if (i2 == 0) {
    i2 = 1;
    var elem2 = document.getElementById("myBar2");
    var elemin2 = document.getElementById("myBar__percent2");
    var width2 = 10;
    var id2 = setInterval(frame2, 10);
    function frame2() {
      if (width2 >= 72) {
        clearInterval(id2);
        i2 = 0;
      } else {
        width2++;
        elem2.style.width = width2 + "%";
        elemin2.innerHTML = width2  + "%";
      }
    }
  }
}; move2();


function move3() {
	var i3 = 0;
  if (i3 == 0) {
    i3 = 1;
    var elem3 = document.getElementById("myBar3");
    var elemin3 = document.getElementById("myBar__percent3");
    var width3 = 10;
    var id3 = setInterval(frame3, 10);
    function frame3() {
      if (width3 >= 98) {
        clearInterval(id3);
        i3 = 0;
      } else {
        width3++;
        elem3.style.width = width3 + "%";
        elemin3.innerHTML = width3  + "%";
      }
    }
  }
}; move3();

    function move4() {
	var i4 = 0;
  if (i4 == 0) {
    i4 = 1;
    var elem4 = document.getElementById("myBar4");
    var elemin4 = document.getElementById("myBar__percent4");
    var width4 = 10;
    var id4 = setInterval(frame4, 10);
    function frame4() {
      if (width4 >= 85) {
        clearInterval(id4);
        i4 = 0;
      } else {
        width4++;
        elem4.style.width = width4 + "%";
        elemin4.innerHTML = width4  + "%";
      }
    }
  }
}; move4();

    function move5() {
	var i5 = 0;
  if (i5 == 0) {
    i5 = 1;
    var elem5 = document.getElementById("myBar5");
    var elemin5 = document.getElementById("myBar__percent5");
    var width5 = 10;
    var id5 = setInterval(frame5, 10);
    function frame5() {
      if (width5 >= 70) {
        clearInterval(id5);
        i5 = 0;
      } else {
        width5++;
        elem5.style.width = width5 + "%";
        elemin5.innerHTML = width5  + "%";
      }
    }
  }
};move5()
    
	},
	el=>{
		// функция вызываемая при выпадении элемента из зоны видимости
    // тут вставляем код остановки анимации
   }
);


/*------------------тоже самое для ie11!!!!!!!!!!--------------------------*/
// функция определяет нахождение элемента в области видимости
// если элемент видно - возвращает true
// если элемент невидно - возвращает false
function isOnVisibleSpace(element) {
  var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset = elemRect.top; // - bodyRect.top;

  if (offset < 0) return false;
  if (offset > bodyHeight) return false;
  return true;
} // глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости

var listenedElements = []; // обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements
// на предмет попадания(выпадения) в зону видимости

window.onscroll = function() {
  listenedElements.forEach(function(item) {
    // проверяем находится ли элемент в зоне видимости
    var result = isOnVisibleSpace(item.el); // если элемент находился в зоне видимости и вышел из нее
    // вызываем обработчик выпадения из зоны видимости

    if (item.el.isOnVisibleSpace && !result) {
      item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    } // если элемент находился вне зоны видимости и вошел в нее
    // вызываем обработчик попадания в зону видимости

    if (!item.el.isOnVisibleSpace && result) {
      item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}; // функция устанавливает обработчики событий
// появления элемента в зоне видимости и
// выхода из нее

function onVisibleSpaceListener(elementId, cbIn, cbOut) {
  // получаем ссылку на объект элемента
  var el = document.getElementById("statistics_content"); // добавляем элемент и обработчики событий
  // в массив отслеживаемых элементов

  listenedElements.push({
    el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut
  });
} // устанавливаем обработчики для элемента "video"

onVisibleSpaceListener(
  "statistics_content",
  function(el) {
    // функция вызываемая при попадании элемента в зону видимости
    // тут вставляем код запуска анимации
    function move() {
      var i = 0;

      if (i == 0) {
        var frame = function frame() {
          if (width >= 55) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elemin.innerHTML = width + "%";
          }
        };

        i = 1;
        var elem = document.getElementById("myBar1");
        var elemin = document.getElementById("myBar__percent1");
        var width = 0;
        var id = setInterval(frame, 10);
      }
    }

    move();

    function move2() {
      var i2 = 0;

      if (i2 == 0) {
        var frame2 = function frame2() {
          if (width2 >= 72) {
            clearInterval(id2);
            i2 = 0;
          } else {
            width2++;
            elem2.style.width = width2 + "%";
            elemin2.innerHTML = width2 + "%";
          }
        };

        i2 = 1;
        var elem2 = document.getElementById("myBar2");
        var elemin2 = document.getElementById("myBar__percent2");
        var width2 = 10;
        var id2 = setInterval(frame2, 10);
      }
    }

    move2();

    function move3() {
      var i3 = 0;

      if (i3 == 0) {
        var frame3 = function frame3() {
          if (width3 >= 98) {
            clearInterval(id3);
            i3 = 0;
          } else {
            width3++;
            elem3.style.width = width3 + "%";
            elemin3.innerHTML = width3 + "%";
          }
        };

        i3 = 1;
        var elem3 = document.getElementById("myBar3");
        var elemin3 = document.getElementById("myBar__percent3");
        var width3 = 10;
        var id3 = setInterval(frame3, 10);
      }
    }

    move3();

    function move4() {
      var i4 = 0;

      if (i4 == 0) {
        var frame4 = function frame4() {
          if (width4 >= 85) {
            clearInterval(id4);
            i4 = 0;
          } else {
            width4++;
            elem4.style.width = width4 + "%";
            elemin4.innerHTML = width4 + "%";
          }
        };

        i4 = 1;
        var elem4 = document.getElementById("myBar4");
        var elemin4 = document.getElementById("myBar__percent4");
        var width4 = 10;
        var id4 = setInterval(frame4, 10);
      }
    }

    move4();

    function move5() {
      var i5 = 0;

      if (i5 == 0) {
        var frame5 = function frame5() {
          if (width5 >= 70) {
            clearInterval(id5);
            i5 = 0;
          } else {
            width5++;
            elem5.style.width = width5 + "%";
            elemin5.innerHTML = width5 + "%";
          }
        };

        i5 = 1;
        var elem5 = document.getElementById("myBar5");
        var elemin5 = document.getElementById("myBar__percent5");
        var width5 = 10;
        var id5 = setInterval(frame5, 10);
      }
    }

    move5();
  },
  function(el) {
    // функция вызываемая при выпадении элемента из зоны видимости
    // тут вставляем код остановки анимации
  }
);
