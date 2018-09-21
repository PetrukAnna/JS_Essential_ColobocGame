window.onload = function() {

	// Main level buttonns
	var rabbit = document.getElementById("rabbit_level_action");
	var fox = document.getElementById("fox_level_action");
	var wolf = document.getElementById("wolf_level_action");
	var bear = document.getElementById("bear_level_action");
	
	rabbit.addEventListener("click", rabbitOpen);
	fox.addEventListener("click", foxOpen);
	wolf.addEventListener("click", wolfOpen);
	bear.addEventListener("click", bearOpen);

	// Level 1 (rabbit)
	var block_r1 = document.getElementById("block_rabbit_1");
	var block_r2 = document.getElementById("block_rabbit_2");
	var block_r3 = document.getElementById("block_rabbit_3");
	var block_r4 = document.getElementById("block_rabbit_4");

	block_r1.addEventListener("click", r1Handler);
	block_r2.addEventListener("click", r2Handler);
	block_r3.addEventListener("click", r3Handler);
	block_r4.addEventListener("click", r4Handler);

	//Level 2 (fox)
	var block_f1 = document.getElementById("block_fox_1");
	var block_f2 = document.getElementById("block_fox_2");
	var block_f3 = document.getElementById("block_fox_3");
	var block_f4 = document.getElementById("block_fox_4");
	var block_f5 = document.getElementById("block_fox_5");
	var block_f6 = document.getElementById("block_fox_6");

	block_f1.addEventListener("click", f1Handler);
	block_f2.addEventListener("click", f2Handler);
	block_f3.addEventListener("click", f3Handler);
	block_f4.addEventListener("click", f4Handler);
	block_f5.addEventListener("click", f5Handler);
	block_f6.addEventListener("click", f6Handler);

	// Level 3 (wolf)
	var block_w1 = document.getElementById("block_wolf_1");
	var block_w2 = document.getElementById("block_wolf_2");
	var block_w3 = document.getElementById("block_wolf_3");
	var block_w4 = document.getElementById("block_wolf_4");
	var block_w5 = document.getElementById("block_wolf_5");
	var block_w6 = document.getElementById("block_wolf_6");
	var block_w7 = document.getElementById("block_wolf_7");
	var block_w8 = document.getElementById("block_wolf_8");

	block_w1.addEventListener("click", w1Handler);
	block_w2.addEventListener("click", w2Handler);
	block_w3.addEventListener("click", w3Handler);
	block_w4.addEventListener("click", w4Handler);
	block_w5.addEventListener("click", w5Handler);
	block_w6.addEventListener("click", w6Handler);
	block_w7.addEventListener("click", w7Handler);
	block_w8.addEventListener("click", w8Handler);

	//Level 4 (bear)
	var block_b1 = document.getElementById("block_bear_1");
	var block_b2 = document.getElementById("block_bear_2");
	var block_b3 = document.getElementById("block_bear_3");
	var block_b4 = document.getElementById("block_bear_4");
	var block_b5 = document.getElementById("block_bear_5");
	var block_b6 = document.getElementById("block_bear_6");
	var block_b7 = document.getElementById("block_bear_7");
	var block_b8 = document.getElementById("block_bear_8");
	var block_b9 = document.getElementById("block_bear_9");
	var block_b10 = document.getElementById("block_bear_10");
	var block_b11 = document.getElementById("block_bear_11");
	var block_b12 = document.getElementById("block_bear_12");

	block_b1.addEventListener("click", b1Handler);
	block_b2.addEventListener("click", b2Handler);
	block_b3.addEventListener("click", b3Handler);
	block_b4.addEventListener("click", b4Handler);
	block_b5.addEventListener("click", b5Handler);
	block_b6.addEventListener("click", b6Handler);
	block_b7.addEventListener("click", b7Handler);
	block_b8.addEventListener("click", b8Handler);
	block_b9.addEventListener("click", b9Handler);
	block_b10.addEventListener("click", b10Handler);
	block_b11.addEventListener("click", b11Handler);
	block_b12.addEventListener("click", b12Handler);

	// Coins and lives
	var lives_field = document.getElementById("lives");
	var coins_field = document.getElementById("coins");
	lives_field.innerHTML = colobok.lives;
	coins_field.innerHTML = colobok.coins;

	var alertOK = document.getElementById("alert_control");
	alertOK.addEventListener("click", alertClose);

	setTimeout( function() {
		var text = "Колобок заблукав в лісі. За кожне правильно виконане завдання звірята будуть давати монети. Виконай завдання мешканців лісу та збери не менше ніж 900 монет, щоб колобок повернувся додому.";
		alertOpen(text);
	}, 400);
}

function alertOpen(text) {
	var textArea = document.getElementById("alert_text");
	textArea.innerHTML = text;
	$(".alert_container").fadeIn();
}

function alertClose() {
	$(".alert_container").fadeOut();
	setTimeout( function() {
		var checkAlert = document.getElementById("alert_container");
		checkAlert.style.display = "none";
	}, 2000);
}

function confirmOpen(text) {
	var textSpace = document.getElementById("confirm_text");
	textSpace.innerHTML = text;
	$(".confirm_container").fadeIn();
}

// Colobok object
var colobok = new Object();

colobok.lives = 10;
colobok.coins = 100;


function setLives() {
	var lives_field = document.getElementById("lives");
	lives_field.innerHTML = colobok.lives;
}

function setCoins() {
	var coins_field = document.getElementById("coins");
	coins_field.innerHTML = colobok.coins;
}

function rabbitOpen() {
	$("#colobok").animate({
	    	marginLeft: "140px",
	    	marginTop: "30px"
  	}, 2000 );

	setTimeout( function() {	
		var coins_field = document.getElementById("coins");
		if (coins_field.innerHTML < 170) {
			alertOpen("Збери пари та зароби монети у зайчика!");

			setTimeout( function() {	
				var rabbit_level = document.getElementById("rabbit_level_action_pannel");
				var r1 = document.getElementById("block_rabbit_1")
				var r2 = document.getElementById("block_rabbit_2")
				var r3 = document.getElementById("block_rabbit_3")				
				var r4 = document.getElementById("block_rabbit_4")

				rabbit_level.style.display = "block";

				r1.style.visibility = "visible";
				r2.style.visibility = "visible";
				r3.style.visibility = "visible";
				r4.style.visibility = "visible";

				r1.style.backgroundImage = "none";
				r2.style.backgroundImage = "none";
				r3.style.backgroundImage = "none";
				r4.style.backgroundImage = "none";

				var level_coins = document.getElementById("coins_level_1");
				level_coins.innerHTML = 100;
			}, 3200);	
		} else {
			alertOpen("У вас є достатня кількість монет для переходу на інший рівень!");
		}	
	}, 2200);	
}

function r1Handler() {
	var cell = document.getElementById("block_rabbit_1");
	var image = "url('Images/leaf.png')";
	rabbitHandler(cell, image);
}

function r2Handler() {
	var cell = document.getElementById("block_rabbit_2");
	var image = "url('Images/flower.png')";
	rabbitHandler(cell, image);
}

function r3Handler() {
	var cell = document.getElementById("block_rabbit_3");
	var image = "url('Images/flower.png')";
	rabbitHandler(cell, image);
}

function r4Handler() {
	var cell = document.getElementById("block_rabbit_4");
	var image = "url('Images/leaf.png')";
	rabbitHandler(cell, image);
}

function rabbitHandler(cell, image) {
	var r1 = document.getElementById("block_rabbit_1")
	var r2 = document.getElementById("block_rabbit_2")
	var r3 = document.getElementById("block_rabbit_3")
	var r4 = document.getElementById("block_rabbit_4")

	var images = [ r1, r2, r3, r4 ];

	var openedCards = [];

	for(var i = 0; i < images.length; i++) {
		if((window.getComputedStyle(images[i]).backgroundImage != "none") && (window.getComputedStyle(images[i]).visibility == "visible")) {
			openedCards.push(images[i]);
		}
	}

	if(openedCards.length == 0) {
		cell.style.backgroundImage = image;
	} else if(openedCards.length == 1) {
		cell.style.backgroundImage = image;
		if(window.getComputedStyle(openedCards[0]).backgroundImage == window.getComputedStyle(cell).backgroundImage) {
			setTimeout( function() {	
				cell.style.visibility = "hidden";
				openedCards[0].style.visibility = "hidden";
			}, 1000);
		} else {
			setTimeout( function() {
				cell.style.backgroundImage = "none";
				openedCards[0].style.backgroundImage = "none";

				var level_coins = document.getElementById("coins_level_1");
				level_coins.innerHTML = level_coins.innerHTML - 30;
				if(level_coins.innerHTML < 0) {
					level_coins.innerHTML = 0;
				}
			}, 1000);
		}
	} else {
		alertOpen("Можна відкрити лише 2 картки");
	}

	setTimeout( function() {
		checkResultLevel_1();
	}, 1200);
}

function checkResultLevel_1() {
	var r1 = document.getElementById("block_rabbit_1")
	var r2 = document.getElementById("block_rabbit_2")
	var r3 = document.getElementById("block_rabbit_3")
	var r4 = document.getElementById("block_rabbit_4")

	if(r1.style.visibility == "hidden" && r2.style.visibility == "hidden" && r3.style.visibility == "hidden" && r4.style.visibility == "hidden") {
			var rabbit_level = document.getElementById("rabbit_level_action_pannel");
			rabbit_level.style.display = "none";

			var level_coins = document.getElementById("coins_level_1");
			var coins_all = document.getElementById("coins");
			var lives_all = document.getElementById("lives");

			coins_all.innerHTML = parseInt(coins_all.innerHTML) + parseInt(level_coins.innerHTML);

			if(parseInt(coins_all.innerHTML) < 170) {
				alertOpen("На жаль, ви отримали дуже мало монет для переходу на наступний рівень.");
				lives_all.innerHTML = parseInt(lives_all.innerHTML) - 1;
			} else {
				alertOpen("Вітаю!!! Ви успішно пройшли 1 рівень!");
			}	
		}
}

function foxOpen() {
	$("#colobok").animate({
	    	marginLeft: "360px",
	    	marginTop: "40px"
  	}, 2000 );

	setTimeout( function() {	
		var coins_field = document.getElementById("coins");
		var level_coins_1 = document.getElementById("coins_level_1");
		var level_coins_2 = document.getElementById("coins_level_2");

		if(coins_field.innerHTML >= 290 && level_coins_2.innerHTML >= 120) {
			alertOpen("У вас є достатня кількість монет для переходу на інший рівень!");
		} else if ((coins_field.innerHTML >= 170 && coins_field.innerHTML < 1000) && level_coins_1.innerHTML >=70) {
			alertOpen("Збери пари та зароби монети у лисички!");
			
			setTimeout( function() {
				var fox_level = document.getElementById("fox_level_action_pannel");
				var f1 = document.getElementById("block_fox_1");
				var f2 = document.getElementById("block_fox_2");
				var f3 = document.getElementById("block_fox_3");
				var f4 = document.getElementById("block_fox_4");
				var f5 = document.getElementById("block_fox_5");
				var f6 = document.getElementById("block_fox_6");

				fox_level.style.display = "block";

				f1.style.visibility = "visible";
				f2.style.visibility = "visible";
				f3.style.visibility = "visible";
				f4.style.visibility = "visible";
				f5.style.visibility = "visible";
				f6.style.visibility = "visible";

				f1.style.backgroundImage = "none";
				f2.style.backgroundImage = "none";
				f3.style.backgroundImage = "none";
				f4.style.backgroundImage = "none";
				f5.style.backgroundImage = "none";
				f6.style.backgroundImage = "none";

				var level_coins_2 = document.getElementById("coins_level_2");
				level_coins_2.innerHTML = 200;
			}, 3200);
		} else {
			alertOpen("У вас не достатня кількість монет для переходу на інший рівень!");
		}	
	}, 2200);	
}

function f1Handler() {
	var cell = document.getElementById("block_fox_1");
	var image = "url('Images/worm.png')";
	foxHandler(cell, image);
}

function f2Handler() {
	var cell = document.getElementById("block_fox_2");
	var image = "url('Images/bird.png')";
	foxHandler(cell, image);
}

function f3Handler() {
	var cell = document.getElementById("block_fox_3");
	var image = "url('Images/bird.png')";
	foxHandler(cell, image);
}

function f4Handler() {
	var cell = document.getElementById("block_fox_4");
	var image = "url('Images/pencil.png')";
	foxHandler(cell, image);
}

function f5Handler() {
	var cell = document.getElementById("block_fox_5");
	var image = "url('Images/pencil.png')";
	foxHandler(cell, image);
}

function f6Handler() {
	var cell = document.getElementById("block_fox_6");
	var image = "url('Images/worm.png')";
	foxHandler(cell, image);
}

function foxHandler(cell, image) {
	var f1 = document.getElementById("block_fox_1");
	var f2 = document.getElementById("block_fox_2");
	var f3 = document.getElementById("block_fox_3");
	var f4 = document.getElementById("block_fox_4");
	var f5 = document.getElementById("block_fox_5");
	var f6 = document.getElementById("block_fox_6");

	var images = [ f1, f2, f3, f4, f5, f6 ];

	var openedCards = [];

	for(var i = 0; i < images.length; i++) {
		if((window.getComputedStyle(images[i]).backgroundImage != "none") && (window.getComputedStyle(images[i]).visibility == "visible")) {
			openedCards.push(images[i]);
		}
	}

	if(openedCards.length == 0) {
		cell.style.backgroundImage = image;
	} else if(openedCards.length == 1) {
		cell.style.backgroundImage = image;
		if(window.getComputedStyle(openedCards[0]).backgroundImage == window.getComputedStyle(cell).backgroundImage) {
			setTimeout( function() {	
				cell.style.visibility = "hidden";
				openedCards[0].style.visibility = "hidden";
			}, 1000);
		} else {
			setTimeout( function() {
				cell.style.backgroundImage = "none";
				openedCards[0].style.backgroundImage = "none";

				var level_coins_2 = document.getElementById("coins_level_2");
				level_coins_2.innerHTML = level_coins_2.innerHTML - 40;
				if(level_coins_2.innerHTML < 0) {
					level_coins_2.innerHTML = 0;
				}
			}, 1000);
		}
	} else {
		alertOpen("Можна відкрити лише 2 картки");
	}

	setTimeout( function() {
		checkResultLevel_2();
	}, 1200);
}

function checkResultLevel_2() {
	var f1 = document.getElementById("block_fox_1")
	var f2 = document.getElementById("block_fox_2")
	var f3 = document.getElementById("block_fox_3")
	var f4 = document.getElementById("block_fox_4")
	var f5 = document.getElementById("block_fox_5")
	var f6 = document.getElementById("block_fox_6")

	if(f1.style.visibility == "hidden" && f2.style.visibility == "hidden" && f3.style.visibility == "hidden" && 
		f4.style.visibility == "hidden" && f5.style.visibility == "hidden" && f6.style.visibility) {
			var fox_level = document.getElementById("fox_level_action_pannel");
			fox_level.style.display = "none";

			var level_coins_2 = document.getElementById("coins_level_2");
			var coins_all = document.getElementById("coins");
			var lives_all = document.getElementById("lives");

			coins_all.innerHTML = parseInt(coins_all.innerHTML) + parseInt(level_coins_2.innerHTML);

			if(parseInt(level_coins_2.innerHTML) < 120) {
				alertOpen("На жаль, ви отримали дуже мало монет для переходу на наступний рівень.");
				lives_all.innerHTML = parseInt(lives_all.innerHTML) - 1;
			} else {
				alertOpen("Вітаю!!! Ви успішно пройшли 2 рівень!");
			}	
		}
}

function wolfOpen() {
	$("#colobok").animate({
	    	marginLeft: "590px",
	    	marginTop: "20px"
  	}, 2000 );

	setTimeout( function() {	
		var coins_field = document.getElementById("coins");
		var level_coins_2 = document.getElementById("coins_level_2");
		var level_coins_3 = document.getElementById("coins_level_3");

		if(coins_field.innerHTML >= 700 && level_coins_3.innerHTML >= 150) {
			alertOpen("У вас є достатня кількість монет для переходу на інший рівень!");
		} else if ((coins_field.innerHTML >= 290 && coins_field.innerHTML <= 750) && level_coins_2.innerHTML >= 120) {
			alertOpen("Збери пари та зароби монети у вовка!");
			
			setTimeout( function() {
				var wolf_level = document.getElementById("wolf_level_action_pannel");
				var w1 = document.getElementById("block_wolf_1");
				var w2 = document.getElementById("block_wolf_2");
				var w3 = document.getElementById("block_wolf_3");
				var w4 = document.getElementById("block_wolf_4");
				var w5 = document.getElementById("block_wolf_5");
				var w6 = document.getElementById("block_wolf_6");
				var w7 = document.getElementById("block_wolf_7");
				var w8 = document.getElementById("block_wolf_8");

				wolf_level.style.display = "block";

				w1.style.visibility = "visible";
				w2.style.visibility = "visible";
				w3.style.visibility = "visible";
				w4.style.visibility = "visible";
				w5.style.visibility = "visible";
				w6.style.visibility = "visible";
				w7.style.visibility = "visible";
				w8.style.visibility = "visible";

				w1.style.backgroundImage = "none";
				w2.style.backgroundImage = "none";
				w3.style.backgroundImage = "none";
				w4.style.backgroundImage = "none";
				w5.style.backgroundImage = "none";
				w6.style.backgroundImage = "none";
				w7.style.backgroundImage = "none";
				w8.style.backgroundImage = "none";

				var level_coins_3 = document.getElementById("coins_level_3");	
				level_coins_3.innerHTML = 300;	
			}, 3200);
		} else {
			alertOpen("У вас не достатня кількість монет для переходу на інший рівень!");
		}	
	}, 2200);	
}

function w1Handler() {
	var cell = document.getElementById("block_wolf_1");
	var image = "url('Images/snail.png')";
	wolfHandler(cell, image);
}

function w2Handler() {
	var cell = document.getElementById("block_wolf_2");
	var image = "url('Images/frog.png')";
	wolfHandler(cell, image);
}

function w3Handler() {
	var cell = document.getElementById("block_wolf_3");
	var image = "url('Images/star.png')";
	wolfHandler(cell, image);
}

function w4Handler() {
	var cell = document.getElementById("block_wolf_4");
	var image = "url('Images/cat.png')";
	wolfHandler(cell, image);
}

function w5Handler() {
	var cell = document.getElementById("block_wolf_5");
	var image = "url('Images/snail.png')";
	wolfHandler(cell, image);
}

function w6Handler() {
	var cell = document.getElementById("block_wolf_6");
	var image = "url('Images/frog.png')";
	wolfHandler(cell, image);
}

function w7Handler() {
	var cell = document.getElementById("block_wolf_7");
	var image = "url('Images/star.png')";
	wolfHandler(cell, image);
}

function w8Handler() {
	var cell = document.getElementById("block_wolf_8");
	var image = "url('Images/cat.png')";
	wolfHandler(cell, image);
}

function wolfHandler(cell, image) {
	var w1 = document.getElementById("block_wolf_1")
	var w2 = document.getElementById("block_wolf_2")
	var w3 = document.getElementById("block_wolf_3")
	var w4 = document.getElementById("block_wolf_4")
	var w5 = document.getElementById("block_wolf_5")
	var w6 = document.getElementById("block_wolf_6")
	var w7 = document.getElementById("block_wolf_7")
	var w8 = document.getElementById("block_wolf_8")

	var images = [ w1, w2, w3, w4, w5, w6, w7, w8 ];

	var openedCards = [];

	for(var i = 0; i < images.length; i++) {
		if((window.getComputedStyle(images[i]).backgroundImage != "none") && (window.getComputedStyle(images[i]).visibility == "visible")) {
			openedCards.push(images[i]);
		}
	}

	if(openedCards.length == 0) {
		cell.style.backgroundImage = image;
	} else if(openedCards.length == 1) {
		cell.style.backgroundImage = image;
		if(window.getComputedStyle(openedCards[0]).backgroundImage == window.getComputedStyle(cell).backgroundImage) {
			setTimeout( function() {	
				cell.style.visibility = "hidden";
				openedCards[0].style.visibility = "hidden";
			}, 1000);
		} else {
			setTimeout( function() {
				cell.style.backgroundImage = "none";
				openedCards[0].style.backgroundImage = "none";

				var level_coins_3 = document.getElementById("coins_level_3");
				level_coins_3.innerHTML = level_coins_3.innerHTML - 50;
				if(level_coins_3.innerHTML < 0) {
					level_coins_3.innerHTML = 0;
				}
			}, 1000);
		}
	} else {
		alertOpen("Можна відкрити лише 2 картки");
	}

	setTimeout( function() {
		checkResultLevel_3();
	}, 1200);
}

function checkResultLevel_3() {
	var w1 = document.getElementById("block_wolf_1")
	var w2 = document.getElementById("block_wolf_2")
	var w3 = document.getElementById("block_wolf_3")
	var w4 = document.getElementById("block_wolf_4")
	var w5 = document.getElementById("block_wolf_5")
	var w6 = document.getElementById("block_wolf_6")
	var w7 = document.getElementById("block_wolf_7")
	var w8 = document.getElementById("block_wolf_8")

	if(w1.style.visibility == "hidden" && w2.style.visibility == "hidden" && w3.style.visibility == "hidden" && 
		w4.style.visibility == "hidden" && w5.style.visibility == "hidden" && w6.style.visibility == "hidden" && 
		w7.style.visibility == "hidden" && w8.style.visibility == "hidden") {
			var wolf_level = document.getElementById("wolf_level_action_pannel");
			wolf_level.style.display = "none";

			var level_coins_3 = document.getElementById("coins_level_3");
			var coins_all = document.getElementById("coins");
			var lives_all = document.getElementById("lives");

			coins_all.innerHTML = parseInt(coins_all.innerHTML) + parseInt(level_coins_3.innerHTML);

			if(parseInt(level_coins_3.innerHTML) < 150) {
				alertOpen("На жаль, ви отримали дуже мало монет для переходу на наступний рівень.");
				lives_all.innerHTML = parseInt(lives_all.innerHTML) - 1;
			} else {
				alertOpen("Вітаю!!! Ви успішно пройшли 3 рівень!");
			}	
		}
}

function bearOpen() {
	$("#colobok").animate({
	    	marginLeft: "785px",
	    	marginTop: "5px"
  	}, 2000 );

	setTimeout( function() {	
		var coins_field = document.getElementById("coins");
		var level_coins_3 = document.getElementById("coins_level_3");
		var level_coins_4 = document.getElementById("coins_level_4");

		if ((coins_field.innerHTML >= 650 && coins_field.innerHTML <= 11000) && level_coins_3.innerHTML >= 150) {
			alertOpen("Збери пари та зароби монети у ведмедика!");
			
			setTimeout( function() {	
				var bear_level = document.getElementById("bear_level_action_pannel");
				var b1 = document.getElementById("block_bear_1");
				var b2 = document.getElementById("block_bear_2");
				var b3 = document.getElementById("block_bear_3");
				var b4 = document.getElementById("block_bear_4");
				var b5 = document.getElementById("block_bear_5");
				var b6 = document.getElementById("block_bear_6");
				var b7 = document.getElementById("block_bear_7");
				var b8 = document.getElementById("block_bear_8");
				var b9 = document.getElementById("block_bear_9");
				var b10 = document.getElementById("block_bear_10");
				var b11 = document.getElementById("block_bear_11");
				var b12 = document.getElementById("block_bear_12");

				bear_level.style.display = "block";

				b1.style.visibility = "visible";
				b2.style.visibility = "visible";
				b3.style.visibility = "visible";
				b4.style.visibility = "visible";
				b5.style.visibility = "visible";
				b6.style.visibility = "visible";
				b7.style.visibility = "visible";
				b8.style.visibility = "visible";
				b9.style.visibility = "visible";
				b10.style.visibility = "visible";
				b11.style.visibility = "visible";
				b12.style.visibility = "visible";

				b1.style.backgroundImage = "none";
				b2.style.backgroundImage = "none";
				b3.style.backgroundImage = "none";
				b4.style.backgroundImage = "none";
				b5.style.backgroundImage = "none";
				b6.style.backgroundImage = "none";
				b7.style.backgroundImage = "none";
				b8.style.backgroundImage = "none";
				b9.style.backgroundImage = "none";
				b10.style.backgroundImage = "none";
				b11.style.backgroundImage = "none";
				b12.style.backgroundImage = "none";

				var level_coins_4 = document.getElementById("coins_level_4");
				level_coins_4.innerHTML = 400;	
			}, 3200);
		} else {
			alertOpen("У вас не достатня кількість монет для переходу на інший рівень!");
		}	
	}, 2200);	
}

function b1Handler() {
	var cell = document.getElementById("block_bear_1");
	var image = "url('Images/owl.png')";
	bearHandler(cell, image);
}

function b2Handler() {
	var cell = document.getElementById("block_bear_2");
	var image = "url('Images/moon.png')";
	bearHandler(cell, image);
}

function b3Handler() {
	var cell = document.getElementById("block_bear_3");
	var image = "url('Images/butterfly.png')";
	bearHandler(cell, image);
}

function b4Handler() {
	var cell = document.getElementById("block_bear_4");
	var image = "url('Images/squirrel.png')";
	bearHandler(cell, image);
}

function b5Handler() {
	var cell = document.getElementById("block_bear_5");
	var image = "url('Images/triangle.png')";
	bearHandler(cell, image);
}

function b6Handler() {
	var cell = document.getElementById("block_bear_6");
	var image = "url('Images/sun.png')";
	bearHandler(cell, image);
}

function b7Handler() {
	var cell = document.getElementById("block_bear_7");
	var image = "url('Images/butterfly.png')";
	bearHandler(cell, image);
}

function b8Handler() {
	var cell = document.getElementById("block_bear_8");
	var image = "url('Images/owl.png')";
	bearHandler(cell, image);
}

function b9Handler() {
	var cell = document.getElementById("block_bear_9");
	var image = "url('Images/moon.png')";
	bearHandler(cell, image);
}

function b10Handler() {
	var cell = document.getElementById("block_bear_10");
	var image = "url('Images/triangle.png')";
	bearHandler(cell, image);
}

function b11Handler() {
	var cell = document.getElementById("block_bear_11");
	var image = "url('Images/sun.png')";
	bearHandler(cell, image);
}

function b12Handler() {
	var cell = document.getElementById("block_bear_12");
	var image = "url('Images/squirrel.png')";
	bearHandler(cell, image);
}

function bearHandler(cell, image) {
	var b1 = document.getElementById("block_bear_1");
	var b2 = document.getElementById("block_bear_2");
	var b3 = document.getElementById("block_bear_3");
	var b4 = document.getElementById("block_bear_4");
	var b5 = document.getElementById("block_bear_5");
	var b6 = document.getElementById("block_bear_6");
	var b7 = document.getElementById("block_bear_7");
	var b8 = document.getElementById("block_bear_8");
	var b9 = document.getElementById("block_bear_9");
	var b10 = document.getElementById("block_bear_10");
	var b11 = document.getElementById("block_bear_11");
	var b12 = document.getElementById("block_bear_12");

	var images = [ b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12 ];

	var openedCards = [];

	for(var i = 0; i < images.length; i++) {
		if((window.getComputedStyle(images[i]).backgroundImage != "none") && (window.getComputedStyle(images[i]).visibility == "visible")) {
			openedCards.push(images[i]);
		}
	}

	if(openedCards.length == 0) {
		cell.style.backgroundImage = image;
	} else if(openedCards.length == 1) {
		cell.style.backgroundImage = image;
		if(window.getComputedStyle(openedCards[0]).backgroundImage == window.getComputedStyle(cell).backgroundImage) {
			setTimeout( function() {	
				cell.style.visibility = "hidden";
				openedCards[0].style.visibility = "hidden";
			}, 1000);
		} else {
			setTimeout( function() {
				cell.style.backgroundImage = "none";
				openedCards[0].style.backgroundImage = "none";

				var level_coins_4 = document.getElementById("coins_level_4");
				level_coins_4.innerHTML = level_coins_4.innerHTML - 50;
				if(level_coins_4.innerHTML < 0) {
					level_coins_4.innerHTML = 0;
				}
			}, 1000);
		}
	} else {
		alertOpen("Можна відкрити лише 2 картки");
	}

	setTimeout( function() {
		checkResultLevel_4();
	}, 1200);
}

function checkResultLevel_4() {
	var b1 = document.getElementById("block_bear_1");
	var b2 = document.getElementById("block_bear_2");
	var b3 = document.getElementById("block_bear_3");
	var b4 = document.getElementById("block_bear_4");
	var b5 = document.getElementById("block_bear_5");
	var b6 = document.getElementById("block_bear_6");
	var b7 = document.getElementById("block_bear_7");
	var b8 = document.getElementById("block_bear_8");
	var b9 = document.getElementById("block_bear_9");
	var b10 = document.getElementById("block_bear_10");
	var b11 = document.getElementById("block_bear_11");
	var b12 = document.getElementById("block_bear_12");

	if(b1.style.visibility == "hidden" && b2.style.visibility == "hidden" && b3.style.visibility == "hidden" && 
		b4.style.visibility == "hidden" && b5.style.visibility == "hidden" && b6.style.visibility == "hidden" && 
		b7.style.visibility == "hidden" && b8.style.visibility == "hidden" && b9.style.visibility == "hidden" && 
		b10.style.visibility == "hidden" && b11.style.visibility == "hidden" && b12.style.visibility == "hidden") {
			var bear_level = document.getElementById("bear_level_action_pannel");
			bear_level.style.display = "none";

			var level_coins_4 = document.getElementById("coins_level_4");
			var coins_all = document.getElementById("coins");
			var lives_all = document.getElementById("lives");

			coins_all.innerHTML = parseInt(coins_all.innerHTML) + parseInt(level_coins_4.innerHTML);

			if(parseInt(level_coins_4.innerHTML) < 250) {
				alertOpen("На жаль, ви отримали дуже мало монет для переходу на наступний рівень.");
				lives_all.innerHTML = parseInt(lives_all.innerHTML) - 1;
			} else {
				alertOpen("Вітаю!!! Ви успішно пройшли 4 рівень!");

				setTimeout( function() {
					$("#colobok").animate({
				    	marginLeft: "1185px",
				    	marginTop: "10px"
			  		}, 2000 );
			  	}, 2200);

				setTimeout( function() {
					alertOpen("Ура!!! Ви допомогли колобку дістатись додому!");
				

					setTimeout( function() {
						confirmOpen("Чи бажаєте ви почати гру знову?");
							
						$("#confirm_yes").click(function() {
							$(".confirm_container").fadeOut();
							window.location.reload();
						});

						$("#confirm_cancel").click(function() {
							$(".confirm_container").fadeOut();
							window.close();
						});
					}, 2000);	
				}, 4000);						
			}	
		}
}