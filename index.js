//main vars used to manipulate html
var mainTitle = document.getElementById("mainTitle");
var buttonStyle = document.getElementById("buttonStyle");
var buttonClick = 0;
var audio = new Audio('darude.mp3');

// //Link colours
// var colors=new Array();
// colors[0]="blue";
// colors[1]="green";
// colors[2]="red";
// colors[3]="gray";
// colors[4]="orange";
// colors[5]="aqua";
// colors[6]="brown";
// colors[7]="black";
// colors[8]="purple";
// colors[9]="chocolate";
// colors[10]="magenta";
// colors[11]="violet";
// colors[12]="indigo";
// colors[13]="sienna";
// colors[14]="yellow";
// var i=0;

// //Spaz the link colours
// function writemess(){   
// 	if (i==15){
// 		i=0; 
// 	}
// 	document.getElementById("indexLink").style.color = colors[i];
// 	i++;  
// 	setTimeout(writemess(),5);
// }

//iterate var at onClick
function addOne(){
	buttonClick++;
}

//main function changing display at each onClick
function displayTitle() {
	if(buttonClick == 1) {
		mainTitle = "Well Fucken Congrats Kid, Cause We Have A Product For You!";
		buttonStyle = "What Is It?"
		document.getElementById("mainTitle").innerHTML = mainTitle;
		document.getElementById("buttonStyle").innerHTML = buttonStyle;
	}
	if(buttonClick == 2) {
		mainTitle = "Only The Best Mother Fucken Product Ever!";
		buttonStyle = "Can I Know Please?"
		document.getElementById("mainTitle").innerHTML = mainTitle;
		document.getElementById("buttonStyle").innerHTML = buttonStyle;
	}
	if(buttonClick == 3) {
		mainTitle = "Keep Your Dick Together Cause This Is The Brown Towel!";
		audio.play();
		buttonStyle = "R U SRS?"
		document.getElementById("mainTitle").innerHTML = mainTitle;
		document.getElementById("buttonStyle").innerHTML = buttonStyle;
		document.body.style.backgroundImage = "url('brown_towel_bg.gif')";
		
	}
	if(buttonClick == 4) {
		mainTitle = "Now Get That Bitch Ass Into The Website! <br><a href='home.html' id='indexLink'>Get Me In!</a>";
		document.getElementById("buttonStyle").style.display = "none";
		document.getElementById("mainTitle").innerHTML = mainTitle;
	}
}