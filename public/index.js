// accordion
var items = document.querySelectorAll(".accordion p");

function toggleAccordion(){
  this.classList.toggle('active');
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    this.querySelector('.accordion-icon').classList.replace('fa-minus', 'fa-plus');
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    this.querySelector('.accordion-icon').classList.replace('fa-plus', 'fa-minus');
  } 
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



// SMOOTH LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// END SMOOTH LINKS



// BACK TO TOP BTN 
var mybutton = document.getElementById("back-to-top");


window.onscroll = function() {
  if (document.body.scrollTop > 2 * window.innerHeight || document.documentElement.scrollTop > 2 * window.innerHeight) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


mybutton.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
// END BACK TO TOP BTN 




// HEADER SCROLL HIDE 
var header = document.getElementById('header');
let headerNav = document.querySelector('header nav');
var lastScroll = 0;

window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.style.top = '0';
    } else if (currentScroll > lastScroll) {
        header.style.top = '-70px'; // Замените '50px' на высоту вашего заголовка
        headerNav.style.marginTop = "66px";
    } else {
        header.style.top = '0';
        headerNav.style.marginTop = "0px";
    }
    lastScroll = currentScroll;
}, false);
// END HEADER SCROLL HIDE 



// slice blog item text 

function truncateText(text) {
    if (text.length > 140) {
        return text.substring(0, 140) + "...";
    } else {
        return text;
    }
}

let blogTexts = document.querySelectorAll('section.news .news-item p.descr');

if (blogTexts) {
    blogTexts.forEach((el) => {
        let slicedText = truncateText(el.textContent);
        el.innerText = slicedText;
    });
}


// end slice blog item text 





// READING TIME 

function readingTime() {
    // Получаем все текстовые элементы на странице
    var textElements = [...document.getElementsByTagName('p'), 
                        ...document.getElementsByTagName('li'), 
                        ...document.getElementsByTagName('h1'), 
                        ...document.getElementsByTagName('h2'), 
                        ...document.getElementsByTagName('h3'), 
                        ...document.getElementsByTagName('h4'), 
                        ...document.getElementsByTagName('h5'), 
                        ...document.getElementsByTagName('h6')];

    // Инициализируем счетчик слов
    var wordCount = 0;

    // Проходим по каждому текстовому элементу
    for (var i = 0; i < textElements.length; i++) {
        // Получаем текст элемента
        var text = textElements[i].innerText;

        // Разбиваем текст на слова
        var words = text.split(' ');

        // Добавляем количество слов в счетчик
        wordCount += words.length;
    }

    // Вычисляем время чтения (150 слов в минуту)
    var readingTime = Math.ceil(wordCount / 100);

    // Возвращаем время чтения
    return readingTime;
}




let reading = document.querySelector('.watch_time strong');
if (reading) {
    reading.innerText = readingTime();
}

// END READING TIME 



// ПРОСТАВЛЕНИЕ ЦИФР В СОДЕРЖАНИЕ 
// var listItems = document.querySelectorAll('#table-of-contents ul li');

// if (listItems) {

//     function numbersList() {
//         for (var i = 0; i < listItems.length; i++) {
//             var listItem = listItems[i];
//             var numberCircle = document.createElement('span');
//             numberCircle.style.border = '1px solid white';
//             numberCircle.style.background = 'white';
//             numberCircle.style.borderRadius = '50%';
//             numberCircle.style.width = '16px';
//             numberCircle.style.height = '16px';
//             numberCircle.style.display = 'inline-block';
//             numberCircle.style.textAlign = 'center';
//             numberCircle.style.marginRight = '10px';
//             numberCircle.style.color = 'black';
//             numberCircle.style.fontWeight = '800';
//             numberCircle.style.fontSize = '13px';
//             numberCircle.innerText = i + 1;
//             listItem.insertBefore(numberCircle, listItem.firstChild);
//         }
//     }
//     numbersList();
// }


// END ПРОСТАВЛЕНИЕ ЦИФР В СОДЕРЖАНИЕ 









	function animateWithRandomNumber(myClass, from, to) {
		TweenLite.fromTo(
		  myClass,
		  Math.floor(Math.random() * 20 + 1),
		  { y: from },
		  {
			y: to,
			onComplete: animateWithRandomNumber,
			onCompleteParams: [myClass, from, to],
			ease: Linear.easeNone
		  }
		);
	  }
	  
	  const itemsDown = [
		".light4",
		".light5",
		".light6",
		".light7",
		".light8",
		".light11",
		".light12",
		".light13",
		".light14",
		".light15",
		".light16"
	  ].forEach((e) => animateWithRandomNumber(e, -1080, 1080));
	  const itemsUp = [
		".light1",
		".light2",
		".light3",
		".light9",
		".light10",
		".light17"
	  ].forEach((e) => animateWithRandomNumber(e, 1080, -1080));
	  
	
	



























// STARS 
// Wobble by @neave

window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback) {
		setTimeout(callback, 1000 / 60);
	};

Array.prototype.shuffle = function() {
	var j, temp;
	for (var i = this.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};

Math.clamp = function(n, min, max) {
	return Math.max(min, Math.min(n, max));
};

var get = document.querySelector.bind(document),
	on = document.addEventListener.bind(document),
	mouseOff = -1000,
	mouseX,
	mouseY,
	viscosity = 25,
	damping = 0.1,
	totalPoints,
	dist,
	scale,
	canvas,
	context,
	surfaces,
	palleteNum = 0,
	palleteFirst = ['343541', '444654', '202123', '343541', '444654'],
	palletes = [
		['343541', '444654', '202123', '343541', '444654'],
		['202123', '343541', '444654', '202123', '343541'],
		['444654', '202123', '343541', '444654', '202123']
	];

function Point(x, y) {
	this.x = x;
	this.y = y;

	this.ix = x;
	this.iy = y;

	this.vx = 0;
	this.vy = 0;
}

Point.prototype.move = function() {
	// var width = canvas.width / scale;
	// var height = canvas.height / scale;
    var parent = canvas.parentNode;
    var width = parent.clientWidth;
    var height = parent.clientHeight;
	this.vx += (this.ix - this.x) / viscosity * width;
	this.vy += (this.iy - this.y) / viscosity * height;

	var dx = this.x * width - mouseX / scale,
		dy = this.y * height - mouseY / scale;

	if (Math.sqrt(dx * dx + dy * dy) < dist) {
		var a = Math.atan2(dy, dx);
		this.vx += (Math.cos(a) * viscosity - dx) / viscosity;
		this.vy -= (Math.sin(a) * viscosity - dy) / viscosity;
	}

	this.vx *= (1 - damping);
	this.vy *= (1 - damping);
	this.x += this.vx / width;
	this.y += this.vy / height;

	if (this.y < 0) {
		this.y = 0;
	} else if (this.y > 1) {
		this.y = 1;
	}
};

function Surface(y) {
	this.y = y;
	this.resize();
}

Surface.prototype.draw = function() {
	var p = this.points[totalPoints - 1],
		cx,
		cy;

	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(p.x * canvas.width, p.y * canvas.height);

	for (var i = totalPoints - 1; i > 0; i--) {
		p = this.points[i];
		p.move();

		cx = (p.x + this.points[i - 1].x) / 2 * canvas.width;
		cy = (p.y + this.points[i - 1].y) / 2 * canvas.height;

		if (i === 1) {
			cx = canvas.width;
		} else if (i === totalPoints - 1) {
			context.bezierCurveTo(p.x * canvas.width, p.y * canvas.height, cx, cy, cx, cy);
			p.x = 0;
		}

		context.bezierCurveTo(p.x * canvas.width, p.y * canvas.height, cx, cy, cx, cy);
	}

	context.lineTo(canvas.width, canvas.height);
	context.lineTo(0, canvas.height);
	context.closePath();
	context.fill();
};

Surface.prototype.resize = function() {
	this.points = [];
	for (var i = totalPoints; i--; ) {
		this.points.push(new Point(i / (totalPoints - 3), this.y));
	}
};

Surface.prototype.wobble = function() {
	for (var i = totalPoints - 1; i > 0; i--) {
		this.points[i].vy += (Math.random() - 0.5) * dist * 0.6;
	}
};

function setPallete() {
	canvas.style.backgroundColor = '#' + palletes[palleteNum][0];
	for (var i = surfaces.length; i--; ) {
		surfaces[surfaces.length - i - 1].color = '#' + palletes[palleteNum][i + 1];
	}
}

function nextPallete() {
	palleteNum++;
	if (palleteNum >= palletes.length) {
		palleteNum = 0;
		palletes.shuffle();
	}
	setPallete();
}

function wobbleSuraces() {
	resizeSuraces();

	for (var i = surfaces.length; i--; ) {
		surfaces[i].wobble();
	}
	nextPallete();
}

function drawSurfaces() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = surfaces.length; i--; ) {
		surfaces[i].draw();
	}
}

function resizeSuraces() {
	scale = window.devicePixelRatio || 1;

	canvas.width = innerWidth * scale;
	canvas.height = innerHeight * scale;
	canvas.style.width = innerWidth + 'px';
	canvas.style.height = innerHeight + 'px';

	totalPoints = Math.round(Math.clamp(Math.pow(Math.random() * 8, 2), 16, innerWidth / 35));
	dist = Math.clamp(innerWidth / 4, 150, 200);

	for (var i = surfaces.length; i--; ) {
		surfaces[i].resize();
	}
	drawSurfaces();
}

function update() {
	requestAnimationFrame(update);
	drawSurfaces();
}

function init() {
	canvas = get('canvas');
	context = canvas.getContext('2d');

	canvas.ontouchmove = function(event) {
		mouseX = event.targetTouches[0].pageX * scale;
		mouseY = event.targetTouches[0].pageY * scale;
	};

	canvas.ontouchstart = function(event) {
		event.preventDefault();
	};

	canvas.ontouchend = function(event) {
		wobbleSuraces();
		mouseX = mouseY = mouseOff;
	};

	canvas.onmousemove = function(event) {
		mouseX = event.pageX * scale;
		mouseY = event.pageY * scale;
	};

	canvas.onmousedown = wobbleSuraces;

	canvas.onmouseleave = function() {
		mouseX = mouseY = mouseOff;
	};

	surfaces = [
		new Surface(4/5),
		new Surface(3/5),
		new Surface(2/5),
		new Surface(1/5)
	];

	palletes.shuffle();
	palletes.unshift(palleteFirst);
	setPallete(0);

	window.onresize = resizeSuraces;
	resizeSuraces();
	update();
}

on('DOMContentLoaded', init);


// END STARS 