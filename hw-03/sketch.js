//practice 
//create a class of bubbles with black fill and white stroke
//create an array of objects which are the bubbles 
//make many of those bubbles appear in a grid formation on the screen 
    //using algorithm that spaces out the x, y values of the bubbles

    var bubbles = [];
    var rects = [];

    var sizeofGrid;

    var numofSquaHoriz = 20;

    var rectDivs = 2;

    var animationGoing = true;

    var smolSlider;
    var strkSlider; 


    

    function setup(){
        createCanvas(windowWidth, windowHeight);

        sizeofGrid = width / numofSquaHoriz;

        var myButton = select ('#butt1'); 
        myButton.mousePressed(StartStop);
    
       
        smolSlider = createSlider(0, 7, 0);
        strkSlider = createSlider(0, 5,0);
    

    for(var x= 0; x< width; x+= sizeofGrid){
        for(var y=0; y< height; y+= sizeofGrid){
            bubbles.push(new smolBubble(x +50, y +50, 37, color(255, 255, 0)));
            bubbles.push(new smolBubble(x +50, y +50, 27, color(139,69,19)));
            bubbles.push(new smolBubble(x +50, y +50, 17, 0));
            bubbles.push(new Bubble(x + 62, y +70, 68, 1));
            bubbles.push(new Bubble(x +55, y +55, 100, 3));
        }
    }
    for (var x = 0; x < width; x += sizeofGrid * rectDivs)
    {
      for (var y = 0; y < height; y += sizeofGrid * rectDivs)
      {
        rects.push(new rectGrid(x, y));
      }
    }


    }

    function StartStop(){
        animationGoing = !animationGoing;
    }


    function draw(){
        background(0);
        for (var r=0; r<rects.length; r++){
            rects[r].changeColor();
            rects[r].renderR();
        }

            for (var y=0; y<bubbles.length; y++){
                if(animationGoing){
        bubbles[y].changeColor();
                }
        bubbles[y].render();
    }
    }
    
    class Bubble {
        constructor(bubX, bubY, size, strkWeight){ //tells what the bubble will look like 
            this.x = bubX; 
            this.y = bubY;
            this.size = size;
            this.weight = strkWeight;
          

            this.strkStartingColor = color(random(102), random(1,4), random(64,112));
            this.strkEndingColor = color(random(191), 4, random(4, 14));
            this.strkValue = 0;
        }
    
        render(){
            var strkColor = lerpColor(this.strkStartingColor, this.strkEndingColor, cos(this.strkValue));
            stroke(strkColor);
            strokeWeight(this.weight);
            noFill(); 
            ellipse(this.x, this.y, this.size, this.size);
        }

        changeColor(){
            this.strkValue += 0.06;
        }
      
        
    }

    class smolBubble {
        constructor(bubX, bubY, size, col){ //tells what the bubble will look like 
            this.x = bubX; 
            this.y = bubY;
            this.size = size;
            this.color = col;
        
        }
    
        render(){
            stroke(255);
            strokeWeight(smolSlider.value());
            fill (this.color); 
            ellipse(this.x, this.y, this.size, this.size);
        }

        changeColor(){

        }
    }

    class rectGrid {
        constructor(bubX, bubY){ //tells what the bubble will look like 
            this.x = bubX; 
            this.y = bubY;

            this.rectStartingColor = color(random(4), random(89), random(24));
            this.rectEndingColor = color(0, random(10,58), random(10, 45));
            this.rectValue= 0;
        
        }
    
        renderR(){
            var rectColor = lerpColor(this.rectStartingColor, this.rectEndingColor, cos(this.rectValue));
            fill(rectColor);
            strokeWeight(strkSlider.value());
            stroke(color(255,0, 0));
            rect(this.x , this.y , width/4, height/2);
        }

        changeColor(){
            this.rectValue += 0.03;
        }
    }

    