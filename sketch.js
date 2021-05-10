function preload() {

  //images
  bg = loadImage("Images/background.png")
  gogetaicon = loadImage("Images/gogeta.png")
  brolyicon = loadImage("Images/broly.png")
  
 //broly right
 brolystandingright = loadImage("Broly Right/standing.png")

 brolywalkingright = loadImage("Broly Right/walking.png")

 brolyattackingright1 = loadImage("Broly Right/attacking 1.png")
 brolyattackingright2 = loadImage("Broly Right/attacking 2.png")
 brolyattackingright3 = loadImage("Broly Right/attacking 3.png")
 brolyattackingright4 = loadImage("Broly Right/attacking 4.png")

 brolykiright1 = loadImage("Broly Right/ki blast 1.png")
 brolykiright2 = loadImage("Broly Right/ki blast 2.png")

 brolyevr1 = loadImage("Broly Right/energy wave 1.png")
 brolyevr2 = loadImage("Broly Right/energy wave 2.png")
 brolyevr3 = loadImage("Broly Right/energy wave 3.png")
 brolyevr4 = loadImage("Broly Right/energy wave 4.png")
 brolyevr5 = loadImage("Broly Right/energy wave 5.png")
 brolyevr6 = loadImage("Broly Right/energy wave 6.png")
 brolyevr7 = loadImage("Broly Right/energy wave 7.png")

 brolydeadright = loadImage("Broly Right/dead.png") 

 //broly left
 brolystandingleft = loadImage("Broly Left/standing.png")
 brolywalkingleft = loadImage("Broly Left/walking.png")

 brolyattackingleft1 = loadImage("Broly Left/attacking 1.png")
 brolyattackingleft2 = loadImage("Broly Left/attacking 2.png")
 brolyattackingleft3 = loadImage("Broly Left/attacking 3.png")
 brolyattackingleft4 = loadImage("Broly Left/attacking 4.png")

 brolykileft1 = loadImage("Broly Left/ki blast 1.png")
 brolykileft2 = loadImage("Broly Left/ki blast 2.png")

 brolyevl1 = loadImage("Broly Left/energy wave 1.png")
 brolyevl2 = loadImage("Broly Left/energy wave 2.png")
 brolyevl3 = loadImage("Broly Left/energy wave 3.png")
 brolyevl4 = loadImage("Broly Left/energy wave 4.png")
 brolyevl5 = loadImage("Broly Left/energy wave 5.png")
 brolyevl6 = loadImage("Broly Left/energy wave 6.png")
 brolyevl7 = loadImage("Broly Left/energy wave 7.png")

 brolydeadleft = loadImage("Broly Left/dead.png") 

 //gogeta right
 gogetastandingright = loadImage("Gogeta Right/standing.png")

 gogetawalkingright = loadImage("Gogeta Right/walking.png")

 gogetapunch1right = loadImage("Gogeta Right/attacking 1.png")
 gogetapunch2right = loadImage("Gogeta Right/attacking 2.png")
 gogetapunch3right = loadImage("Gogeta Right/attacking 3.png")
 gogetapunch4right = loadImage("Gogeta Right/attacking 4.png")
 gogetapunch5right = loadImage("Gogeta Right/attacking 5.png")
 gogetapunch6right = loadImage("Gogeta Right/attacking 6.png")

 gogetaki1right = loadImage("Gogeta Right/ki blast 1.png")
 gogetaki2right = loadImage("Gogeta Right/ki blast 2.png")
 gogetaki3right = loadImage("Gogeta Right/ki blast 3.png")

 gogetafk1right = loadImage("Gogeta Right/final kamehameha 1.png")
 gogetafk2right = loadImage("Gogeta Right/final kamehameha 2.png")
 gogetafk3right = loadImage("Gogeta Right/final kamehameha 3.png")

 gogetadeadright = loadImage("Gogeta Right/dead.png")

 //gogeta left
 gogetastandingleft = loadImage("Gogeta Left/standing.png")
 
 gogetawalkingleft = loadImage("Gogeta Left/walking.png")

 gogetapunch1left = loadImage("Gogeta Left/attacking 1.png")
 gogetapunch2left = loadImage("Gogeta Left/attacking 2.png")
 gogetapunch3left = loadImage("Gogeta Left/attacking 3.png")
 gogetapunch4left = loadImage("Gogeta Left/attacking 4.png")
 gogetapunch5left = loadImage("Gogeta Left/attacking 5.png")
 gogetapunch6left = loadImage("Gogeta Left/attacking 6.png")

 gogetaki1left = loadImage("Gogeta Left/ki blast 1.png")
 gogetaki2left = loadImage("Gogeta Left/ki blast 2.png")
 gogetaki3left = loadImage("Gogeta Left/ki blast 3.png")

 gogetafk1left = loadImage("Gogeta Left/final kamehameha 1.png")
 gogetafk2left = loadImage("Gogeta Left/final kamehameha 2.png")
 gogetafk3left = loadImage("Gogeta Left/final kamehameha 3.png")

 gogetadeadleft = loadImage("Gogeta Left/dead.png")

 //effects
 ki1 = loadImage("Effects/ki blast 1.png")
 ki2 = loadImage("Effects/ki blast 2.png")
 ki3 = loadImage("Effects/ki blast 3.png")
 ki4 = loadImage("Effects/ki blast 4.png")

 eb1right = loadImage("Effects/energy blast 1 right.png")
 eb2right = loadImage("Effects/energy blast 2 right.png")
 eb3right = loadImage("Effects/energy blast 3 right.png")

 eb1left = loadImage("Effects/energy blast 1 left.png")
 eb2left = loadImage("Effects/energy blast 2 left.png")
 eb3left = loadImage("Effects/energy blast 3 left.png")

 kiright = loadImage("Effects/energy blast right.png")
 
 kileft = loadImage("Effects/energy blast left.png")

 fkright = loadImage("Effects/final kamehameha right.png")
 fkleft = loadImage("Effects/final kamehameha left.png")
 

}

function setup() {
  createCanvas(600,350)

  brolyhp = 500
  gogetahp = 500

 b1 = createSprite(1,175,1,350)
 b1.visible = false

 b2 = createSprite(599,175,1,350)
 b2.visible = false

   gameState = 0
   brolyDirection = "right"

  broly = createSprite(100,150)
  broly.addImage(brolystandingright)
  broly.scale = 1.9

  gogeta = createSprite(500,150)
  gogeta.addImage(gogetastandingleft)
  gogeta.scale = 2

  gogetaDirection = "left"

  ground = createSprite(400,280,800,20)
  ground.visible = false

  attackcounter = createSprite(0,0,10,20)
  attackcounter.visible = false

  attackcharge = 0

  kiblastcounter = createSprite(20,0,10,20)
  kiblastcounter.visible = false

  kiblastcharge = 0

  kicounter = createSprite(40,0,10,20)
  kicounter.visible = false

  kicharge = 0

  kiblast = createSprite(0,0)
  kiblast.visible = false
  kiblast.addImage(ki1)
  kiblast.scale = 1.8

  energyblastcounter = createSprite(60,0,10,20)
  energyblastcounter.visible = false

  energyblastcharge = 0

  energyblast = createSprite(10,10)
  energyblast.addImage(eb1right)
  energyblast.scale = 2
  energyblast.visible = false

  energycounter = createSprite(80,0,10,20)
  energycounter.visible = false

  energycharge = 0

  

  attackco = createSprite(100,0,10,20)
  attackco.visible = false

  attackch = 0

  ki = createSprite(120,0,10,20)
  ki.addImage(kiright)
  ki.scale = 1.7
  ki.visible = false

  kibcounter = createSprite(120,0,10,20)
  kibcounter.visible = false
  
  kibcharge = 0

  fk = createSprite(100,100)
  fk.addImage(fkright)
  fk.visible = false

  fkcounter = createSprite(140,0,10,20)
  fkcounter.visible = false

  fkcharge = 0

  gog = createSprite(560,40)
  gog.addImage(gogetaicon)
  gog.scale = 0.2

  bro = createSprite(35,40)
  bro.addImage(brolyicon)
  bro.scale = 0.07

  kiblascounter = createSprite(160,0,10,20)
  kiblascounter.visible = false

  kiblascharge = 0


  kiblcounter = createSprite(180,0,10,20)
  kiblcounter.visible = false

  kiblcharge = 0

  ewcounter = createSprite(200,0,10,20)
  ewcounter.visible = false

  ewcharge = 0

  fkco = createSprite(220,0,10,20)
  fkco.visible = false

  fkch = 0

}

function draw() {
  background(bg)
  broly.collide(ground)
    gogeta.collide(ground)
    broly.collide(b1)
    broly.collide(b2)
    gogeta.collide(b1)
    gogeta.collide(b2)
  if(gameState === 0){
    if(frameCount >=10 && frameCount<=60){
      textFont('Georgia');
      fill("yellow")
      textSize(65)
      text("3",260,150);
    }
    if(frameCount >=70 && frameCount<=120){
      textFont('Georgia');
      fill("yellow")
      textSize(65)
      text("2",260,150);
    }
    if(frameCount >=130 && frameCount<=180){
      textFont('Georgia');
      fill("yellow")
      textSize(65)
      text("1",260,150);
    }
  
    if(frameCount >=190 && frameCount<=240){
      textFont('Georgia');
      fill("yellow")
      textSize(65)
      text("Go!",255,150);
    }
    if(frameCount >=250){
      gameState = 1;
    }
  }
 
   if(gameState !== 0){
    drawSprites()
    
     fill("white")
     textSize(20)
     textFont('Gorgia')
     text("Press F",20,310)
     text("To Punch",10,340)
     text("Press G",95,310)
     textSize(18)
     text("To use Ki",90,340)
     text("Press H",192,310)
     text("To use",195,325)
     text("Energy Wave",170,340)
     textSize(20)
     text("Press J",330,310)
     text("To Punch",325,340)
     text("Press K",420,310)
     text("To use Ki",410,340)
     text("Press L",515,310)
     text("To use",515,325)
     textSize(12)
     text("Final",530,335)
     text("Kamehameha",515,345)
     rect(0,280,700,10)
     rect(300,290,10,70)
     fill("green")
     rect(70,20,brolyhp/2.5,20)
     rect(320,20,gogetahp/2.5,20)
      damage()

      textSize(20)
      fill("black")
      textFont('Gorgia')
      text("Press W to jump",30,100)
      text("Press A & D to move",20,120)

      text("Press UP to jump",410,100)
      textSize(17)
      text("Press LEFT & RIGHT to move",380,120)

      fill(rgb(43,194,186))
      if(attackcharge !== 0){
        rect(70,45,1,5)
      }

      if(attackcharge === 0){
        rect(70,45,200,5)
      }

      if(attackch !== 0){
        rect(320,45,1,5)
      }

      if(attackch === 0){
        rect(320,45,200,5)
      }

      if(kiblascharge === 0){
        rect(70,55,200,5)
      }

      if(kiblascharge !== 0){
        rect(70,55,kiblascharge*13.3333333,5)
      }

      if(kiblcharge === 0){
        rect(320,55,200,5)
      }

      if(kiblcharge !== 0){
        rect(320,55,kiblcharge*20,5)
      }

      if(ewcharge === 0){
        rect(70,65,200,5)
      }

      if(ewcharge !== 0){
        rect(70,65,ewcharge*5.71428571,5)
      }

      if(fkch === 0){
        rect(320,65,200,5)
      }

      if(fkch !== 0){
        rect(320,65,fkch*5,5)
      }

      broly.velocityY = broly.velocityY + 0.8
      gogeta.velocityY = gogeta.velocityY + 0.8

    if(gameState === 1){

     if(kiblast.velocityX === 0){
     if(brolyDirection === "right"){
       kiblast.x = broly.x + 20
       kiblast.y = broly.y
     }
     if(brolyDirection === "left"){
       kiblast.x = broly.x - 20
       kiblast.y = broly.y
     }
    }

    if(energyblast.velocityX === 0){
      if(brolyDirection === "right"){
        energyblast.x = broly.x + 20
        energyblast.y = broly.y
      }
      if(brolyDirection === "left"){
        energyblast.x = broly.x - 20
        energyblast.y = broly.y
      }
     }
          
    if(keyDown("d")){
      broly.addImage(brolywalkingright)
      broly.x = broly.x + 4
      brolyDirection = "right"
    }
    else{
      if(brolyDirection === "right"){
        broly.addImage(brolystandingright)
      }
    }

    if(keyDown("a")){
      broly.addImage(brolywalkingleft)
      broly.x = broly.x - 4
      brolyDirection = "left"
    }
    else{
      if(brolyDirection === "left"){
        broly.addImage(brolystandingleft)
      }
    }

    if(keyDown("w")&broly.y > 180){
      broly.velocityY = -13
    }

    if(keyDown("f")){
      attackcounter.velocityY = 50
      if(brolyDirection === "right"){
        broly.addImage(brolyattackingright1)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyattackingleft1)
      }
    }

    if(attackcharge === 1){
      if(brolyDirection === "right"){
        broly.addImage(brolyattackingright2)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyattackingleft2)
      }
    }

    if(attackcharge === 2){
      if(brolyDirection === "right"){
        broly.addImage(brolyattackingright3)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyattackingleft3)
      }
    }

    if(attackcharge === 3){
      if(brolyDirection === "right"){
        broly.addImage(brolyattackingright4)
        if(brolyDirection === "left"){
          broly.addImage(brolyattackingleft4)
        }
      }
    }

    if(attackcharge === 4){
      if(brolyDirection === "right"){
        broly.addImage(brolystandingright)
        attackcharge = 0
        attackcounter.y = 0
        attackcounter.velocityY = 0
      }
      if(brolyDirection === "left"){
        broly.addImage(brolystandingleft)
        attackcharge = 0
        attackcounter.y = 0
        attackcounter.velocityY = 0
      }
    }

    if(attackcounter.y === 300){
      attackcounter.y = 0
      attackcharge = attackcharge + 1
    }

   if(keyDown("g")&&kiblascharge === 0){
     kiblastcounter.velocityY = 50
     kiblascounter.velocityY = 50
     kicounter.velocityY = 50
     kiblast.x = broly.x 
     kiblast.y = broly.y
     if(brolyDirection === "right"){
     broly.addImage(brolykiright1)
     }
     if(brolyDirection === "left"){
      broly.addImage(brolykileft1)
      }
   }

   if(kiblastcharge === 1){
     kiblast.visible = true
     if(brolyDirection === "right"){
      kiblast.x = broly.x + 20
      kiblast.y = broly.y
    }
    if(brolyDirection === "left"){
      kiblast.x = broly.x - 20
      kiblast.y = broly.y
    }
     if(brolyDirection === "right"){
     broly.addImage(brolykiright2)
     kiblast.velocityX = 12
     }
     if(brolyDirection === "left"){
      broly.addImage(brolykileft2)
      kiblast.velocityX = -12
      }
   }

   if(kiblastcharge === 3){
     kiblastcounter.velocityY = 0
     kiblastcounter.y = 0
     kiblastcharge = 0
     if(brolyDirection === "right"){
     broly.addImage(brolystandingright)
     }
     if(brolyDirection === "left"){
      broly.addImage(brolystandingleft)
      }
   }

   if(kiblastcounter.y === 300){
     kiblastcounter.y = 0
     kiblastcharge = kiblastcharge + 1
   }

   if(kicounter.y === 300){
     kicounter.y = 0
     kicharge = kicharge + 1
   }

   

   if(kicharge === 1){
     kiblast.addImage(ki2)
   }
   if(kicharge === 2){
    kiblast.addImage(ki3)
  }
  if(kicharge === 3){
    kiblast.addImage(ki4)
  }
  if(kicharge === 4){
    kiblast.addImage(ki1)
   }
   if(kicharge === 5){
    kiblast.addImage(ki2)
  }
  if(kicharge === 6){
    kiblast.addImage(ki3)
  }
  if(kicharge === 7){
    kiblast.addImage(ki4)
  }
  if(kicharge === 8){
    kiblast.addImage(ki1)
  }

  if(kicharge === 9){
    kiblast.addImage(ki2)
  }
  if(kicharge === 10){
    kiblast.addImage(ki3)
  }

  if(kicharge === 11){
    kiblast.addImage(ki4)
  }

  if(kicharge === 12){
    kiblast.addImage(ki1)
  }

  if(kicharge === 13){
    kiblast.addImage(ki2)
  }

  if(kicharge === 14){
    kiblast.addImage(ki3)
  }

  if(kicharge === 15){
    kiblast.addImage(ki4)

    
  }
if(kicharge === 16){
      kiblast.addImage(ki1)
      kicharge = 0
      kicounter.velocityY = 0
      kicounter.y = 0
      if(kiblast.velocityX === 0){
        
       }
    }

    if(keyDown("h")&&ewcharge === 0){
      ewcounter.velocityY = 50
      energyblastcounter.velocityY = 50
      energyblast.x = broly.x
      energyblast.y = broly.y
      energyblastcharge = 0
      energycharge = 0
      if(brolyDirection === "right"){
        broly.addImage(brolyevr1)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyevl1)
      }
    }

    if(energyblastcharge === 1){

      if(brolyDirection === "right"){
        broly.addImage(brolyevr2)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyevl2)
      }
    }

    if(energyblastcharge === 2){
      if(brolyDirection === "right"){
        broly.addImage(brolyevr3)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyevl3)
      }
    }

    if(energyblastcharge === 3){
      if(brolyDirection === "right"){
        broly.addImage(brolyevr4)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyevl4)
      }
    }

    if(energyblastcharge === 4){
      if(brolyDirection === "right"){
        broly.addImage(brolyevr5)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyevl5)
      }
    }

    if(energyblastcharge === 5){
      if(brolyDirection === "right"){
        broly.addImage(brolyevr6)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyevl6)
      }
    }

    if(energyblastcharge === 6){
      if(brolyDirection === "right"){
        broly.addImage(brolyevr7)
      }
      if(brolyDirection === "left"){
        broly.addImage(brolyevl7)
      }
    }
   
    if(energyblastcharge === 7){
      energyblastcharge = 0
      energyblastcounter.y = 0
      energyblastcounter.velocityY = 0
      energyblast.visible = true
      energyblast.x = broly.x 
      energyblast.y = broly.y
      energycounter.velocityY = 50
      if(brolyDirection === "right"){
        broly.addImage(brolystandingright)
        energyblast.velocityX = 10
      }
      if(brolyDirection === "left"){
        broly.addImage(brolystandingleft)
        energyblast.velocityX = -10
      }
    }

    if(energyblastcounter.y === 300){
      energyblastcharge = energyblastcharge + 1
      energyblastcounter.y = 0
    }

    if(energycounter.y === 300){
     energycounter.y = 0
     energycharge = energycharge + 1
    }

    if(energycharge > 1 && energycharge < 3){
      if(brolyDirection === "right"){
      energyblast.addImage(eb1right)
      }
      if(brolyDirection === "left"){
        energyblast.addImage(eb1left)
        }
    }

    if(energycharge > 3 && energycharge < 5){
      if(brolyDirection === "right"){
      energyblast.addImage(eb2right)
      }
      if(brolyDirection === "left"){
        energyblast.addImage(eb2left)
        }
    }

    if(energycharge > 5 && energycharge < 20){
      if(brolyDirection === "right"){
      energyblast.addImage(eb3right)
      }
      if(brolyDirection === "left"){
        energyblast.addImage(eb3left)
        }
    }

    if(energycharge === 21){
      energyblast.velocityX = 0
      energycharge = 0
      energycounter.velocityY = 0
      energycounter.y = 0
      energyblast.visible = false
      if(brolyDirection === "right"){
      energyblast.addImage(eb1right)
      }
      if(brolyDirection === "left"){
        energyblast.addImage(eb1left)
        }
    }

    if(keyDown("right")){
      gogeta.addImage(gogetawalkingright)
      gogeta.x = gogeta.x + 4
      gogetaDirection = "right"
    }
    else{
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetastandingright)
      }
    }

    if(keyDown("left")){
      gogeta.addImage(gogetawalkingleft)
      gogeta.x = gogeta.x - 4
      gogetaDirection = "left"
    }
    else{
      if(gogetaDirection === "left"){
        gogeta.addImage(gogetastandingleft)
      }
    }

    if(keyDown("up")&gogeta.y > 180){
      gogeta.velocityY = -13
    }
    

    if(keyDown("j")){
      attackco.velocityY = 50
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetapunch1right)
      }
      if(gogetaDirection === "left"){
        gogeta.addImage(gogetapunch1left)
      }
    }

    if(attackch === 1){
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetapunch2right)
      }
      if(brolyDirection === "left"){
        gogeta.addImage(gogetapunch2left)
      }
    }

    if(attackch === 2){
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetapunch3right)
      }
      if(gogetaDirection === "left"){
        gogeta.addImage(gogetapunch3left)
      }
    }

    if(attackch === 3){
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetapunch4right)
      }
        if(gogetaDirection === "left"){
          gogeta.addImage(gogetapunch4left)
      }
    }

    if(attackch === 4){
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetapunch5right)
      }
        if(gogetaDirection === "left"){
          gogeta.addImage(gogetapunch5left)
      }
    }

    if(attackch === 5){
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetapunch6right)
      }
        if(gogetaDirection === "left"){
          gogeta.addImage(gogetapunch6left)
      }
    }

    if(attackch === 6){
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetastandingright)
        attackch = 0
        attackco.y = 0
        attackco.velocityY = 0
      }
      if(gogetaDirection === "left"){
        gogeta.addImage(gogetastandingleft)
        attackch = 0
        attackco.y = 0
        attackco.velocityY = 0
      }
    }

    if(attackco.y === 300){
      attackco.y = 0
      attackch = attackch + 1
    }

    if(attackch === 7){
      attackco.y = 0
      attackch = 0
      attackco.velocityY = 0
    }

    if(keyDown("k")&&kiblcharge === 0){
      kiblcounter.velocityY = 50
      kibcounter.velocityY = 50
      if(gogetaDirection === "right"){
      gogeta.addImage(gogetaki1right)
      }
      if(gogetaDirection === "left"){
        gogeta.addImage(gogetaki1left)
        }
    }

    if(kibcharge === 1){
    if(gogetaDirection === "right"){
      gogeta.addImage(gogetaki2right)
      }
      if(gogetaDirection === "left"){
        gogeta.addImage(gogetaki2left)
        }
    }

    if(kibcharge === 2){
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetaki3right)
        }
        if(gogetaDirection === "left"){
          gogeta.addImage(gogetaki3left)
          }
      }

      if(kibcharge === 3){
       ki.x = gogeta.x
       ki.y = gogeta.y - 10
      kibcharge = 0
      kibcounter.velocityY = 0
      kibcounter.y = 0
      ki.visible = true
      if(gogetaDirection === "right"){
        gogeta.addImage(gogetastandingright)
        ki.addImage(kiright)
        ki.velocityX = 15
      }
      if(gogetaDirection === "left"){
        gogeta.addImage(gogetastandingleft)
        ki.addImage(kileft)
        ki.velocityX = -15
      }
      }

    if(kibcounter.y === 300){
      kibcounter.y = 0
      kibcharge = kibcharge + 1
    }

   if(keyDown("l")&&fkch === 0){
     fkco.velocityY = 50
     fkcounter.velocityY = 50
     if(gogetaDirection === "right"){
     gogeta.addImage(gogetafk1right)
     }
     if(gogetaDirection === "left"){
      gogeta.addImage(gogetafk1left)
      }
   }

   if(fkcharge > 0 && fkcharge < 4){
    if(gogetaDirection === "right"){
      gogeta.addImage(gogetafk2right)
      }
      if(gogetaDirection === "left"){
       gogeta.addImage(gogetafk2left)
       }
   }

   if(fkcharge > 3 && fkcharge < 14){
     fk.visible = true
    if(gogetaDirection === "right"){
      gogeta.addImage(gogetafk3right)
      fk.addImage(fkright)
      fk.x = gogeta.x + 160
      fk.y = gogeta.y
      }
      if(gogetaDirection === "left"){
       gogeta.addImage(gogetafk3left)
       fk.addImage(fkleft)
       fk.x = gogeta.x - 160
       fk.y = gogeta.y
       }
   }



   if(fkcounter.y === 350){
     fkcounter.y = 0
     fkcharge = fkcharge + 1
   }

   if(fkcharge === 15){
    fkcounter.y = 0
    fkcharge = 0
    fkcounter.velocityY = 0
    fk.visible = false
  }

  if(kiblascounter.y === 300){
    kiblascounter.y = 0
    kiblascharge = kiblascharge + 1
  }

  if(kiblascharge === 15){
    kiblascounter.y = 0
    kiblascharge = 0
    kiblascounter.velocityY = 0
  }

  if(kiblcounter.y === 300){
    kiblcounter.y = 0
    kiblcharge = kiblcharge + 1
  }

  if(kiblcharge === 10){
    kiblcounter.y = 0
    kiblcharge = 0
    kiblcounter.velocityY = 0
  }

  if(ewcounter.y === 300){
    ewcounter.y = 0
    ewcharge = ewcharge + 1
  }

  if(ewcharge === 35){
    ewcharge = 0
    ewcounter.y = 0
    ewcounter.velocityY = 0
  }

  if(fkco.y === 300){
    fkco.y = 0
    fkch = fkch + 1
  }

  if(fkch === 40){
    fkch = 0
    fkco.y = 0
    fkco.velocityY = 0
  }

    }

  if(gogetahp < -2){
    gameState = 2
    fill("white")
    textSize(60)
    textFont('Gorgia')
    text("Broly Wins!",140,150)
    fk.y = 1000
    ki.y = 1000
    kiblast.y = 1000
    energyblast.y = 1000
    gogeta.y = 270
    if(gogetaDirection === "right"){
      gogeta.addImage(gogetadeadright)
    }
    if(gogetaDirection === "left"){
      gogeta.addImage(gogetadeadleft)
    }
  }

  if(brolyhp < -2){
    gameState = 2
    fill("white")
    textSize(60)
    textFont('Gorgia')
    text("Gogeta Wins!",140,150)
    fk.y = 1000
    ki.y = 1000
    kiblast.y = 1000
    energyblast.y = 1000
    if(brolyDirection === "right"){
      broly.addImage(brolydeadright)
      broly.y = 270
    }
    if(brolyDirection === "left"){
      broly.addImage(brolydeadleft)
      broly.y = 270
    }
  }

}

function damage() {
  if(brolyDirection ==="right"&&attackcharge > 0&&gogeta.x>broly.x&&broly.isTouching(gogeta)){
    gogetahp = gogetahp - 2
    if(gogetaDirection === "left"){
    gogeta.x = gogeta.x + 1
    }
    if(gogetaDirection === "right"){
      gogeta.x = gogeta.x - 1
      }
  }

  if(brolyDirection ==="left"&&attackcharge > 0&&gogeta.x<broly.x&&broly.isTouching(gogeta)){
    gogetahp = gogetahp - 2
    if(gogetaDirection === "left"){
    gogeta.x = gogeta.x + 1
    }
    if(gogetaDirection === "right"){
      gogeta.x = gogeta.x - 1
      }
       }

       if(brolyDirection === "right"&&kiblast.velocityX!== 0&&kiblast.isTouching(gogeta)){
        gogetahp = gogetahp - 3
        if(gogetaDirection === "left"){
        gogeta.x = gogeta.x + 1
        }
        if(gogetaDirection === "right"){
          gogeta.x = gogeta.x - 1
          }
      } 
  
      if(brolyDirection === "left"&&kiblast.velocityX!== 0&&kiblast.isTouching(gogeta)){
        gogetahp = gogetahp - 3
        if(gogetaDirection === "left"){
        gogeta.x = gogeta.x + 1
        }
        if(gogetaDirection === "right"){
          gogeta.x = gogeta.x - 1
          }
      } 

  if(brolyDirection === "right"&&energyblast.velocityX!== 0&&energyblast.isTouching(gogeta)&&energyblast.visible === true){
    gogetahp = gogetahp - 4
    if(gogetaDirection === "left"){
    gogeta.x = gogeta.x + 1
    }
    if(gogetaDirection === "right"){
      gogeta.x = gogeta.x - 1
      }
  } 

  if(brolyDirection === "left"&&energyblast.velocityX!== 0&&energyblast.isTouching(gogeta)&&energyblast.visible === true){
    gogetahp = gogetahp - 4
    if(gogetaDirection === "left"){
    gogeta.x = gogeta.x + 1
    }
    if(gogetaDirection === "right"){
      gogeta.x = gogeta.x - 1
      }
  } 

 if(gogeta.isTouching(broly)&&attackch!==0&&gogetaDirection === "right"&&gogeta.x < broly.x){
   brolyhp = brolyhp - 1
   if(brolyDirection === "left"){
     broly.x = broly.x + 1
   }
   if(brolyDirection === "right"){
    broly.x = broly.x - 1
  }
 }

 if(gogeta.isTouching(broly)&&attackch!==0&&gogetaDirection === "left"&&gogeta.x > broly.x){
  brolyhp = brolyhp - 1
  if(brolyDirection === "left"){
    broly.x = broly.x + 1
  }
  if(brolyDirection === "right"){
   broly.x = broly.x - 1
 }
}

if(ki.isTouching(broly)&&ki.visible === true){
  brolyhp = brolyhp - 2
  if(gogeta.x < broly.x){
    if(brolyDirection === "right"){
      broly.x = broly.x + 1
    }
    if(brolyDirection === "left"){
      broly.x = broly.x + 1
    }
  }
  
  if(gogeta.x > broly.x){
    if(brolyDirection === "right"){
      broly.x = broly.x - 1
    }
    if(brolyDirection === "left"){
      broly.x = broly.x - 1
    }
  }

}

if(fk.isTouching(broly)&&fk.visible === true){
  brolyhp = brolyhp - 3
  if(gogeta.x < broly.x){
    if(brolyDirection === "right"){
      broly.x = broly.x + 1
    }
    if(brolyDirection === "left"){
      broly.x = broly.x + 1
    }
  }
  
  if(gogeta.x > broly.x){
    if(brolyDirection === "right"){
      broly.x = broly.x - 1
    }
    if(brolyDirection === "left"){
      broly.x = broly.x - 1
    }
  }

}

if(ki.isTouching(kiblast)&&ki.visible === true&&kiblast.visible === true){
  kibcharge = 0
  kibcounter.y = 0
  kibcounter.velocityY = 0
  ki.visible = false
  ki.velocityX = 0
  kibcharge = 0
  ki.x = gogeta.x 
  ki.y = gogeta.y
  kiblastcounter.y = 0
  kibcounter.velocityY = 0
  kiblast.visible = false
  kiblast.velocityX = 0
  kiblast.y = 1000
}

if(fk.isTouching(energyblast)&&fk.visible === true&&energyblast.visible === true){
  fkcharge = 0
  fkcounter.y = 0
  fkcounter.velocityY = 0
  fk.visible = false
  energyblastcharge = 0
  energyblastcounter.y = 0
  energyblastcounter.velocityY = 0
  energyblast.visible = false
  energycharge = 0
  energycounter.velocityY = 0
  energycounter.y = 0
  fk.y = 1000
  energyblast.y = 1000
}

if(fk.isTouching(kiblast)&&fk.visible === true&&kiblast.visible === true){
  kiblastcounter.y = 0
  kibcounter.velocityY = 0
  kiblast.visible = false
  kiblast.velocityX = 0
  kiblast.x = broly.x 
  kiblast.y = broly.y
}

if(energyblast.isTouching(ki)&&energyblast.visible === true&&ki.visible === true){
  kibcharge = 0
  kibcounter.y = 0
  kibcounter.velocityY = 0
  ki.visible = false
  ki.velocityX = 0
  kibcharge = 0
  ki.x = gogeta.x 
  ki.y = gogeta.y
}

}
}
