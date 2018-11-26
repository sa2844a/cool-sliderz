var Cx, Cy;
var Diameter= 360;
var Radius = Diameter/2;
var sliderz

function setup() {
	createCanvas(windowWidth, windowHeight);
	Cx= windowWidth/2;
	Cy= windowHeight/2;
	angleMode(DEGREES);
	colorMode(HSB,360,100,100);

	sliderz = createSlider(75,260,75);
sliderz.position(90,90);
sliderz.size(100,100);
	
		var rNumber = sliderz.value();
	text(["r = "+rNumber],125,30);
}

function draw() {
			background(sliderz.value())


		
	ellipse(Cx,Cy,Radius/4,Radius/4);

	
Colored_ellipse(0,100,100,Radius);
Colored_ellipse(20,100,100,Radius);
	Colored_ellipse(40,100,100,Radius);
	Colored_ellipse(60,100,100,Radius);
	Colored_ellipse(80,100,100,Radius);
	Colored_ellipse(100,100,100,Radius);
	Colored_ellipse(120,100,100,Radius);
	Colored_ellipse(140,100,100,Radius);
	Colored_ellipse(160,100,100,Radius);
	Colored_ellipse(180,100,100,Radius);
	Colored_ellipse(200,100,100,Radius);
	Colored_ellipse(220,100,100,Radius);
	Colored_ellipse(240,100,100,Radius);
	Colored_ellipse(260,100,100,Radius);
	Colored_ellipse(280,100,100,Radius);
	Colored_ellipse(300,100,100,Radius);
	Colored_ellipse(320,100,100,Radius);
	Colored_ellipse(340,100,100,Radius);
	Colored_ellipse(360,100,100,Radius);
	
	Colored_ellipse(frameCount%360,100,100,Radius)
	
	Colored_ellipse(15,50,100,Radius/4);
Colored_ellipse(20,50,100,Radius/4);
	Colored_ellipse(40,50,100,Radius/4);
	Colored_ellipse(60,50,100,Radius/4);
	Colored_ellipse(80,50,100,Radius/4);
	Colored_ellipse(100,50,100,Radius/4);
	Colored_ellipse(120,50,100,Radius/4);
	Colored_ellipse(140,50,100,Radius/4);
	Colored_ellipse(160,50,100,Radius/4);
	Colored_ellipse(180,50,100,Radius/4);
	Colored_ellipse(200,50,100,Radius/4);
	Colored_ellipse(220,50,100,Radius/4);
	Colored_ellipse(240,100,100,Radius/4);
	Colored_ellipse(260,100,100,Radius/4);
	Colored_ellipse(280,100,100,Radius/4);
	Colored_ellipse(300,100,100,Radius/4);
	Colored_ellipse(320,100,100,Radius/4);
	Colored_ellipse(340,100,100,Radius/4);
	Colored_ellipse(360,100,100,Radius/4);

	Colored_ellipse(frameCount%360,100,100,Radius/4)

}

function Colored_ellipse(HueAng,Sat,Brightness,Rad) {
	
	var Xpos = Cx + Radius*sin(HueAng);
	var Ypos = Cy + Radius*tan(HueAng);
	fill(HueAng, Sat, Brightness);
	noStroke();
	ellipse(Xpos, Ypos, 20,20);
}
