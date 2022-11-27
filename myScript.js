
var donaldDuck = new Image();
donaldDuck.src = "pictures/donaldDuck.png";

var donaldDuck2 = new Image();
donaldDuck2.src = "pictures/donaldDuck.png";

var donaldDuckMove = new Image();
donaldDuckMove.src = "pictures/donaldDuck.png";

var jeffBezos = new Image();
jeffBezos.src = "pictures/jeffBezos.png";

var jeffBezos2 = new Image();
jeffBezos2.src = "pictures/jeffBezos.png";

var jeffBezosMove = new Image();
jeffBezosMove.src = "pictures/jeffBezos.png";

var peterGriffin = new Image();
peterGriffin.src = "pictures/peterGriffen.png";

var peterGriffin2 = new Image();
peterGriffin2.src = "pictures/peterGriffen.png";

var peterGriffinMove = new Image();
peterGriffinMove.src = "pictures/peterGriffen.png";

var amongUs = new Image();
amongUs.src = "pictures/blueAmongUs.png";

var amongUs2 = new Image();
amongUs2.src = "pictures/blueAmongUs.png";

var amongUsMove = new Image();
amongUsMove.src = "pictures/blueAmongUs.png";

var stoneWall = new Image();
stoneWall.src = "pictures/stoneWall.jpg";

var stoneWall2 = new Image();
stoneWall2.src = "pictures/stoneWall.jpg";

var stoneWall3 = new Image();
stoneWall3.src = "pictures/stoneWall.jpg";

var stoneWall4 = new Image();
stoneWall4.src = "pictures/stoneWall.jpg";

var stoneWall5 = new Image();
stoneWall5.src = "pictures/stoneWall.jpg";

var stoneWall6 = new Image();
stoneWall6.src = "pictures/stoneWall.jpg";

var stoneWall7 = new Image();
stoneWall7.src = "pictures/stoneWall.jpg";

var stoneWall8 = new Image();
stoneWall8.src = "pictures/stoneWall.jpg";

var stoneWall9 = new Image();
stoneWall9.src = "pictures/stoneWall.jpg";

var floorCaf = new Image();
floorCaf.src = "pictures/cafeteriaFloor.png";

var angryCafGuy = new Image();
angryCafGuy.src = "pictures/angryLunchGuy.png";

var myMan = new Image();

var toiletPaper = new Image();
toiletPaper.src = "pictures/toilet paper.png";

var ukraineFlag = new Image();
ukraineFlag.src = "pictures/ukraineFlag.jpg";

var oscarsAward = new Image();
oscarsAward.src = "pictures/oscarsAward.png";

var marchMadnessLogo = new Image();
marchMadnessLogo.src = "pictures/marchMadnessLogo.png";

var bitCoin = new Image();
bitCoin.src = "pictures/bitCoin.png";

var africa = new Image();
africa.src = "pictures/africa.png";

var dorito = new Image();
dorito.src = "pictures/dorito.png";

var nyanCat = new Image();
nyanCat.src = "pictures/nyanCatBackground.png";

var bulletBill = new Image();
bulletBill.src = "pictures/Bullet_Bill.webp";

var backpack = new Image();
backpack.src = "pictures/backpackDora.webp";

var rocket = new Image();
rocket.src = "pictures/rocketType1.png";

var tesla1 = new Image();
tesla1.src = "pictures/tesla1.png";

var tesla2 = new Image();
tesla2.src = "pictures/tesla2.png";

var nft1 = new Image();
nft1.src = "pictures/nft1.png";

var nft2 = new Image();
nft2.src = "pictures/nft2.jpg";

var characterChoosen;

var africaX = getRandomInt(0,400);
var africaY = getRandomInt(0,500);

var bitCoinsX = getRandomInt(0,400);
var bitCoinsY = getRandomInt(0,500);

var marchMadnessX = getRandomInt(0,400);
var marchMadnessY = getRandomInt(0,500);

var oscarsX = getRandomInt(550,950);
var oscarsY = getRandomInt(0,500);

var ukraineX = getRandomInt(550,950);
var ukraineY = getRandomInt(0,500);

var toiletPaperX = getRandomInt(550,950);
var toiletPapeY = getRandomInt(0,500);

var heart = new Image();
heart.src = "pictures/heart.png"

var doritoArray = [];

///////////////////////////////////////
var cabinets1 = new Image();
cabinets1.src = "pictures/cabinet.png"

var cabinets2 = new Image();
cabinets2.src = "pictures/cabinet.png"

var bookshelf1 = new Image();
bookshelf1.src = "pictures/book shelf.png"

var bookshelf2 = new Image();
bookshelf2.src = "pictures/book shelf.png"

var garbageCan = new Image();
garbageCan.src = "pictures/garbage can.png"

var plant1 = new Image();
plant1.src = "pictures/plant.png"

var plant2 = new Image();
plant2.src = "pictures/plant.png"

var plant3 = new Image();
plant3.src = "pictures/plant.png"

var plant4 = new Image();
plant4.src = "pictures/plant.png"

var blackBoard = new Image();
blackBoard.src = "pictures/blackBoard.png"

var desk1 = new Image();
desk1.src = "pictures/school desk.png"

var desk2 = new Image();
desk2.src = "pictures/school desk.png"

var desk3 = new Image();
desk3.src = "pictures/school desk.png"

var desk4 = new Image();
desk4.src = "pictures/school desk.png"

var carpet = new Image();
carpet.src = "pictures/Carpets.png"

var paper1 = new Image();
paper1.src = "pictures/paper.png"

var paper2 = new Image();
paper2.src = "pictures/paper.png"

var paper3 = new Image();
paper3.src = "pictures/paper.png"

var box1 = new Image();
box1.src = "pictures/box.png"

var box2 = new Image();
box2.src = "pictures/box.png"

var duck = new Image();
duck.src = "pictures/Duck.webp"

var goomba = new Image()
goomba.src = "pictures/Goomba.webp"

var door = new Image()
door.src = "pictures/download.jpg"

var itemsArray = [];

var questionsArray = ["25 * 7", "Who Wrote the Harry Potter Series", "Red + Blue = "];

var inputedQuestions = [""];

var answersArray = ["175", "J.K Rollin", "Purple"];

var inputedAnswers = [""];

var timer;

var correct;

var clue1 = true;

var clue2 = false;

var clue3 = false;

var tim = 300;

var finalKeypad = [];

var enteredKeypad = [];

var goombaArray = [];

var level = 3;


function pickDonaldDuck(){
    var ctx = document.getElementById("canvas").getContext("2d");

    characterChoosen = "donaldDuck";
    document.getElementById("butPickDonald").disabled = true;
    document.getElementById("butJeffBezos").disabled = true;
    document.getElementById("butPeterGriffen").disabled = true;
    document.getElementById("butAmongUs").disabled = true;

    donaldDuck2 = createImage(donaldDuck2.src,1060,150,150,150);
    ctx.drawImage(donaldDuck2,donaldDuck2.X,donaldDuck2.Y, donaldDuck2.width,donaldDuck2.height);


    myMan.src = "pictures/donaldDuck.png";

    myMan = createImage(myMan.src,0,550,75,75);
    ctx.drawImage(myMan,myMan.X,myMan.Y, myMan.width,myMan.height);
}

function pickJeffrey(){
    var ctx = document.getElementById("canvas").getContext("2d");

    characterChoosen = "jeffBezos";
    document.getElementById("butPickDonald").disabled = true;
    document.getElementById("butJeffBezos").disabled = true;
    document.getElementById("butPeterGriffen").disabled = true;
    document.getElementById("butAmongUs").disabled = true;

    jeffBezos2 = createImage(jeffBezos2.src,1060,150,150,150);
    ctx.drawImage(jeffBezos2,jeffBezos2.X,jeffBezos2.Y, jeffBezos2.width,jeffBezos2.height);

    myMan.src = "pictures/jeffBezos.png";
    myMan = createImage(myMan.src,0,550,75,75);
    ctx.drawImage(myMan,myMan.X,myMan.Y, myMan.width,myMan.height);

}

function pickPeterGriffin(){
    var ctx = document.getElementById("canvas").getContext("2d");

    characterChoosen = "peterGriffin";
    document.getElementById("butPickDonald").disabled = true;
    document.getElementById("butJeffBezos").disabled = true;
    document.getElementById("butPeterGriffen").disabled = true;
    document.getElementById("butAmongUs").disabled = true;


    peterGriffin2 = createImage(peterGriffin2.src,1060,150,150,150);
    ctx.drawImage(peterGriffin2,peterGriffin2.X,peterGriffin2.Y, peterGriffin2.width,peterGriffin2.height);

    myMan.src = "pictures/peterGriffen.png";
    myMan = createImage(myMan.src,0,550,75,75);
    ctx.drawImage(myMan,myMan.X,myMan.Y, myMan.width,myMan.height);

}

function pickAmongUs(){
    var ctx = document.getElementById("canvas").getContext("2d");

    characterChoosen = "amongUs";
    document.getElementById("butPickDonald").disabled = true;
    document.getElementById("butJeffBezos").disabled = true;
    document.getElementById("butPeterGriffen").disabled = true;
    document.getElementById("butAmongUs").disabled = true;


    amongUs2 = createImage(amongUs2.src,1060,150,150,150);
    ctx.drawImage(amongUs2,amongUs2.X,amongUs2.Y, amongUs2.width,amongUs2.height);

    myMan.src = "pictures/blueAmongUs.png";
    myMan = createImage(myMan.src,0,550,75,75);
    ctx.drawImage(myMan,myMan.X,myMan.Y, myMan.width,myMan.height);

}

var stoneWallsMini = [];

//This function is a sequencing function that draws the background
function drawBackground(){
    var ctx = document.getElementById("canvas").getContext("2d");

    if (level === 2){
        ctx.fillStyle = "#f0dedd";
        ctx.fillRect(0,0,1000,650);
    }else if (level === 1){
        ctx.fillStyle= "#ad8a3d"
        ctx.fillRect(0,0,1000,650);
    }else if (level === 3){
        ctx.fillStyle= "#363129"
        ctx.fillRect(0,0,1000,650);
    }



    // drawLunchLadyWall();

    drawInventory();
    //add methods

}

function drawLunchLadyWall(){
    var ctx = document.getElementById("canvas").getContext("2d");

    ctx.fillStyle = "#ff9900";
    ctx.fillRect(450,500,150,150);
}
function drawTimerText() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.font = "30px Times New Roman";
    ctx.fillText("Time left: " + tim, 1100, 50);
}
function drawInventory(){
    var ctx = document.getElementById("canvas").getContext("2d");

    ctx.fillStyle = "#ff9900";
    ctx.fillRect(1000,0,300,650);

}

var clickedSpace = -1;


$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    //a key to move left
    if(keycode == 37)
    {
        myMan.X = myMan.X - 50;

    }

    // d key to go right
    if(keycode == 39)
    {
        myMan.X = myMan.X + 50;
    }

    //w key to move up
    if(keycode == 38)
    {
        myMan.Y = myMan.Y - 50;
    }

    //s key to move down.
    if(keycode == 40)
    {
        myMan.Y = myMan.Y + 50;
    }

    if (keycode == 32){

        console.log("clickeon space");
        if (clickedSpace == -1){
            clickedSpace++;
            doritoArray[clickedSpace].X = myMan.X;
            doritoArray[clickedSpace].Y = myMan.Y;
        }
        if (clickedSpace >= 0 && doritoArray[clickedSpace].Y <= 0 && myMan.X < 500){
            doritoArray[clickedSpace].vis = false;
            clickedSpace++;
            if (clickedSpace > doritoArray.length){
                clickedSpace = 0;
            }
            doritoArray[clickedSpace].X = myMan.X;
            doritoArray[clickedSpace].Y = myMan.Y;
        }

        if (clickedSpace >= 0 && doritoArray[clickedSpace].Y >= 650 && myMan.X > 500){
            doritoArray[clickedSpace].vis = false;
            clickedSpace++;
            if (clickedSpace > doritoArray.length){
                clickedSpace = 0;
            }
            doritoArray[clickedSpace].X = myMan.X;
            doritoArray[clickedSpace].Y = myMan.Y;
        }

    }

});
var teslas = []
var nftPicsMany = [];

function level2Creates(){
    var ctx = document.getElementById("canvas").getContext("2d");

    floorCaf = createImage(floorCaf.src,0,0,1000,650);
    // ctx.drawImage(floorCaf,floorCaf.X,floorCaf.Y,floorCaf.width,floorCaf.height);
    // floorCaf.vis = false;

///    ctx.fillRect(450,500,150,150);
    stoneWall = createImage(stoneWall.src,450,500,150,150);
    // ctx.drawImage(stoneWall,stoneWall.X,stoneWall.Y,stoneWall.width,stoneWall.height);
    // stoneWall.vis = false;

    stoneWall2 = createImage(stoneWall2.src,500,450,50,50);
    // ctx.drawImage(stoneWall2,stoneWall2.X,stoneWall2.Y,stoneWall2.width,stoneWall2.height);
    stoneWallsMini.push(stoneWall2);
    // stoneWall2.vis = false;

    stoneWall3 = createImage(stoneWall3.src,500,400,50,50);
    // ctx.drawImage(stoneWall3,stoneWall3.X,stoneWall3.Y,stoneWall3.width,stoneWall3.height);
    stoneWallsMini.push(stoneWall3);
    // stoneWall3.vis = false;

    stoneWall4 = createImage(stoneWall4.src,500,350,50,50);
    // ctx.drawImage(stoneWall4,stoneWall4.X,stoneWall4.Y,stoneWall4.width,stoneWall4.height);
    stoneWallsMini.push(stoneWall4);

    stoneWall5 = createImage(stoneWall5.src,500,300,50,50);
    // ctx.drawImage(stoneWall5,stoneWall5.X,stoneWall5.Y,stoneWall5.width,stoneWall5.height);
    stoneWallsMini.push(stoneWall5);

    stoneWall6 = createImage(stoneWall6.src,500,250,50,50);
    // ctx.drawImage(stoneWall6,stoneWall6.X,stoneWall6.Y,stoneWall6.width,stoneWall6.height);
    stoneWallsMini.push(stoneWall6);

    stoneWall7 = createImage(stoneWall7.src,500,200,50,50);
    // ctx.drawImage(stoneWall7,stoneWall7.X,stoneWall7.Y,stoneWall7.width,stoneWall7.height);
    stoneWallsMini.push(stoneWall7);

    stoneWall8 = createImage(stoneWall8.src,500,150,50,50);
    // ctx.drawImage(stoneWall8,stoneWall8.X,stoneWall8.Y,stoneWall8.width,stoneWall8.height);
    stoneWallsMini.push(stoneWall8);

    stoneWall9 = createImage(stoneWall9.src,500,100,50,50);
    // ctx.drawImage(stoneWall9,stoneWall9.X,stoneWall9.Y,stoneWall9.width,stoneWall9.height);
    stoneWallsMini.push(stoneWall9);

    //random stuff
    africa = createImage(africa.src,africaX,africaY,75,75);
    // ctx.drawImage(africa,africa.X,africa.Y,africa.width,africa.height);
    // africa.vis = false;

    bitCoin = createImage(bitCoin.src,bitCoinsX,bitCoinsY,75,75);
    // ctx.drawImage(bitCoin,bitCoin.X,bitCoin.Y,bitCoin.width,bitCoin.height);
    // bitCoin.vis = false;

    marchMadnessLogo = createImage(marchMadnessLogo.src,marchMadnessX,marchMadnessY,100,50);
    // ctx.drawImage(marchMadnessLogo,marchMadnessLogo.X,marchMadnessLogo.Y,marchMadnessLogo.width,marchMadnessLogo.height);
    // marchMadnessLogo.vis = false;

    oscarsAward = createImage(oscarsAward.src,oscarsX,oscarsY,100,100);
    // ctx.drawImage(oscarsAward,oscarsAward.X,oscarsAward.Y,oscarsAward.width,oscarsAward.height);
    // oscarsAward.vis = false;

    ukraineFlag = createImage(ukraineFlag.src,ukraineX,ukraineY,75,50);
    // ctx.drawImage(ukraineFlag,ukraineFlag.X,ukraineFlag.Y,ukraineFlag.width,ukraineFlag.height);
    // ukraineFlag.vis = false;

    toiletPaper = createImage(toiletPaper.src,toiletPaperX,toiletPapeY,75,75);
    // ctx.drawImage(toiletPaper,toiletPaper.X,toiletPaper.Y,toiletPaper.width,toiletPaper.height);
    // toiletPaper.vis = false;

    angryCafGuy = createImage(angryCafGuy.src,480,500,100,150);
    // ctx.drawImage(angryCafGuy,angryCafGuy.X,angryCafGuy.Y,angryCafGuy.width,angryCafGuy.height);
    // angryCafGuy.vis = false;

    doritoArray.push(createImage(dorito.src,0,550,50,50));
    doritoArray.push(createImage(dorito.src,0,550,50,50));
    doritoArray.push(createImage(dorito.src,0,550,50,50));
    doritoArray.push(createImage(dorito.src,0,550,50,50));
    doritoArray.push(createImage(dorito.src,0,550,50,50));
    doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));
    // doritoArray.push(createImage(dorito.src,0,550,50,50));

    for (let i = 0; i < doritoArray.length; i++) {
        doritoArray[i].vis = false;

        if (doritoArray[i].vis === true){
            ctx.drawImage(doritoArray[i],doritoArray[i].X,doritoArray[i].Y,doritoArray[i].width,doritoArray[i].height);
        }
    }

    //nyanCat, bulletBill, backpack, rocket, tesla1, tesla2, nft1, nft2

    teslas.push(createImage(tesla1.src,1000,90,150,50));
    teslas.push(createImage(tesla2.src,1180,90,150,50));


    for (let i = 0; i < teslas.length; i++) {
        teslas[i].vis = false;
        if (teslas[i].vis === true){
            ctx.drawImage(teslas[i],teslas[i].X,teslas[i].Y,teslas[i].width,teslas[i].height);
        }

        // ctx.drawImage(nyanCatArr[i],nyanCatArr[i].X,nyanCatArr[i].Y,nyanCatArr[i].width,nyanCatArr[i].height);

    }

    rocket = createImage(rocket.src,500,270,150,100);
    // ctx.drawImage(rocket,rocket.X,rocket.Y,rocket.width,rocket.height);

     nft1 = createImage(nft1.src,1000,450,100,100);
    // ctx.drawImage(nft1,nft1.X,nft1.Y,nft1.width,nft1.height);

    nft2 = createImage(nft2.src,0,450,100,100);
    // ctx.drawImage(nft2,nft2.X,nft2.Y,nft2.width,nft2.height);


    nyanCatArr.push(createImage(nyanCat.src,-75,450,75,50));
    nyanCatArr.push(createImage(nyanCat.src,-150,450,75,50));
    nyanCatArr.push(createImage(nyanCat.src,-270,450,75,50));
    nyanCatArr.push(createImage(nyanCat.src,-370,450,75,50));

    for (let i = 0; i < nyanCatArr.length; i++) {
        nyanCatArr[i].vis = false;
        if (nyanCatArr[i].vis === true){
            ctx.drawImage(nyanCatArr[i],nyanCatArr[i].X,nyanCatArr[i].Y,nyanCatArr[i].width,nyanCatArr[i].height);
        }
        // ctx.drawImage(nyanCatArr[i],nyanCatArr[i].X,nyanCatArr[i].Y,nyanCatArr[i].width,nyanCatArr[i].height);

    }

    bulletBillArr.push(createImage(bulletBill.src,500,270,75,50));
    bulletBillArr.push(createImage(bulletBill.src,620,270,75,50));
    bulletBillArr.push(createImage(bulletBill.src,730,270,75,50));
    bulletBillArr.push(createImage(bulletBill.src,840,270,75,50));

    for (let i = 0; i < bulletBillArr.length; i++) {
        bulletBillArr[i].vis = false;
        if (bulletBillArr[i].vis === true){
            ctx.drawImage(bulletBillArr[i],bulletBillArr[i].X,bulletBillArr[i].Y,bulletBillArr[i].width,bulletBillArr[i].height);
        }
    }

    backpackArr.push(createImage(backpack.src,-75,90,75,50));
    backpackArr.push(createImage(backpack.src,-150,90,75,50));
    backpackArr.push(createImage(backpack.src,-270,90,75,50));
    backpackArr.push(createImage(backpack.src,-370,90,75,50));

    for (let i = 0; i < backpackArr.length; i++) {
        backpackArr[i].vis = false;
        if (backpackArr[i].vis === true){
            ctx.drawImage(backpackArr[i],backpackArr[i].X,backpackArr[i].Y,backpackArr[i].width,backpackArr[i].height);
        }
        // ctx.drawImage(backpackArr[i],backpackArr[i].X,backpackArr[i].Y,backpackArr[i].width,backpackArr[i].height);
    }

}

var heartsArray = [];

//Object that is used to create the image and draw it on the screen according to the desired x and y coordinets and width and height.
var createImage = function(src,xco,yco,w,h) {
    var img   = new Image();
    img.src   = src;
    img.X = xco;
    img.Y = yco;
    img.width = w;
    img.height = h;
    img.vis= true;
    img.hit = false;
    return img;

}

function submitQuestions(){
    var inpQues = document.getElementById("inputQues").value;
    inputedQuestions.push(inpQues);
    document.getElementById("dispQuest").innerHTML = inputedQuestions;

}

function submitAnswers(){
    var inpQues = document.getElementById("inputAns").value;
    inputedAnswers.push(inpQues);
    document.getElementById("dispAnd").innerHTML = inputedAnswers;


}
var coridorBricks = [];

//Function that is used to initialize the game board when the game is loaded.
function initialize(){
    var ctx = document.getElementById("canvas").getContext("2d");
    drawBackground();

    //Pushes 3 heart pictures into the heart array.
    heartsArray.push(createImage(heart.src,1020,450,50,50));
    heartsArray.push(createImage(heart.src,1100,450,50,50));
    heartsArray.push(createImage(heart.src,1200,450,50,50));
    //For loop that goes through each index in the heart array and draws it on the screen.
    for (i=0;i<heartsArray.length;i++){
        ctx.drawImage(heartsArray[i],heartsArray[i].X,heartsArray[i].Y,heartsArray[i].width,heartsArray[i].height);
    }

    // coridorBricks.push(createImage(stoneWall.src,50,300,150,150));
    // coridorBricks.push(createImage(stoneWall.src,50,450,150,150));
    // coridorBricks.push(createImage(stoneWall.src,50,600,150,150));
    //
    //
    // for (let i = 0; i < coridorBricks.length; i++) {
    //     ctx.drawImage(coridorBricks[i],coridorBricks[i].X, coridorBricks[i].Y, coridorBricks[i].width,coridorBricks[i].height);
    // }

    if (level === 1){
        level1Creates();
    }else if (level === 2){
        level2Creates();
    }else if (level == 3){
        level3Creates();
    }



}

function level3Creates(){
    var ctx = document.getElementById("canvas").getContext("2d");

    coridorBricks.push(createImage(stoneWall.src,0,400,300,300));
    coridorBricks.push(createImage(stoneWall.src,300,400,300,300));
    coridorBricks.push(createImage(stoneWall.src,600,400,400,300));
    coridorBricks.push(createImage(stoneWall.src,0,0,300,150));
    coridorBricks.push(createImage(stoneWall.src,300,0,300,150));
    coridorBricks.push(createImage(stoneWall.src,600,0,400,150));


    // coridorBricks.push(createImage(stoneWall.src,50,450,150,150));
    // coridorBricks.push(createImage(stoneWall.src,50,600,150,150));


    for (let i = 0; i < coridorBricks.length; i++) {
        ctx.drawImage(coridorBricks[i],coridorBricks[i].X, coridorBricks[i].Y, coridorBricks[i].width,coridorBricks[i].height);
    }

    createImage(door.src,300,300,50,100);
    ctx.drawImage(door,door.X,door.Y,door.width,door.height);

}

function level1Creates(){
    var ctx = document.getElementById("canvas").getContext("2d");

    if (level === 1){
        drawBackground();
        drawTimerText();
        drawInventory()
        myMan = createImage(myMan.src, 500, 200, 75, 75);
        ctx.drawImage(myMan, myMan.X, myMan.Y, myMan.width, myMan.height);

        plant1 = createImage(plant1.src,0,0,100,100);
        ctx.drawImage(plant1, plant1.X, plant1.Y, plant1.width, plant1.height);
        itemsArray.push(plant1);
        plant2 = createImage(plant2.src,0,550,100,100);
        ctx.drawImage(plant2, plant2.X, plant2.Y, plant2.width, plant2.height);
        itemsArray.push(plant2);
        plant3 = createImage(plant3.src,900,0,100,100);
        ctx.drawImage(plant3, plant3.X, plant3.Y, plant3.width, plant3.height);
        itemsArray.push(plant3);
        plant4 = createImage(plant4.src,900,550,100,100);
        ctx.drawImage(plant4, plant4.X, plant4.Y, plant4.width, plant4.height);
        itemsArray.push(plant4);
        cabinets1 = createImage(cabinets1.src,100,-100,300,300);
        ctx.drawImage(cabinets1, cabinets1.X, cabinets1.Y, cabinets1.width, cabinets1.height);
        itemsArray.push(cabinets1);
        bookshelf1 = createImage(bookshelf1.src,850,125,200,200);
        ctx.drawImage(bookshelf1, bookshelf1.X, bookshelf1.Y, bookshelf1.width, bookshelf1.height);
        itemsArray.push(bookshelf1);
        bookshelf2 = createImage(bookshelf2.src,850,350,200,200);
        ctx.drawImage(bookshelf2, bookshelf2.X, bookshelf2.Y, bookshelf2.width, bookshelf2.height);
        itemsArray.push(bookshelf2);
        garbageCan = createImage(garbageCan.src,500,0,100,100);
        ctx.drawImage(garbageCan, garbageCan.X, garbageCan.Y, garbageCan.width, garbageCan.height);
        itemsArray.push(garbageCan);
        blackBoard = createImage(blackBoard.src,600,0,175,100);
        ctx.drawImage(blackBoard, blackBoard.X, blackBoard.Y, blackBoard.width, blackBoard.height);
        itemsArray.push(blackBoard);
        desk1 = createImage(desk1.src,450,200,100,100);
        ctx.drawImage(desk1, desk1.X, desk1.Y, desk1.width, desk1.height);
        itemsArray.push(desk1);
        desk2 = createImage(desk1.src,650,200,100,100);
        ctx.drawImage(desk2, desk2.X, desk2.Y, desk2.width, desk2.height);
        itemsArray.push(desk2);
        desk3 = createImage(desk3.src,450,400,100,100);
        ctx.drawImage(desk3, desk3.X, desk3.Y, desk3.width, desk3.height);
        itemsArray.push(desk3);
        desk4 = createImage(desk4.src,650,400,100,100);
        ctx.drawImage(desk4, desk4.X, desk4.Y, desk4.width, desk4.height);
        itemsArray.push(desk4);
        carpet = createImage(carpet.src,50,200,300,300);
        ctx.drawImage(carpet, carpet.X, carpet.Y, carpet.width, carpet.height);
        itemsArray.push(carpet);
        paper1 = createImage(paper1.src,450,200,25,25);
        ctx.drawImage(paper1, paper1.X, paper1.Y, paper1.width, paper1.height);
        itemsArray.push(paper1);
        paper2 = createImage(paper2.src,650,200,25,25);
        ctx.drawImage(paper2, paper2.X, paper2.Y, paper2.width, paper2.height);
        itemsArray.push(paper2);
        paper3 = createImage(paper3.src,650,400,25,25);
        ctx.drawImage(paper3, paper3.X, paper3.Y, paper3.width, paper3.height);
        itemsArray.push(paper3);
        box1 = createImage(box1.src,150,250,100,100);
        ctx.drawImage(box1, box1.X, box1.Y, box1.width, box1.height);
        itemsArray.push(box1);
        box2 = createImage(box2.src,150,350,100,100);
        ctx.drawImage(box2, box2.X, box2.Y, box2.width, box2.height);
        itemsArray.push(box2);
        cabinets2 = createImage(cabinets2.src,300,450,500,300);
        ctx.drawImage(cabinets2, cabinets2.X, cabinets2.Y, cabinets2.width, cabinets2.height);
        itemsArray.push(cabinets2);
        duck = createImage(duck.src,650,10,75,75);
        ctx.drawImage(duck, duck.X, duck.Y, duck.width, duck.height);
        itemsArray.push(duck);

        goombaArray.push(createImage(goomba.src,300,400,50,50));
        goombaArray.push(createImage(goomba.src,400,450,50,50));
        goombaArray.push(createImage(goomba.src,600,100,50,50));
        goombaArray.push(createImage(goomba.src,200,150,50,50));
        goombaArray.push(createImage(goomba.src,900,600,50,50));
        goombaArray.push(createImage(goomba.src,800,450,50,50));
        goombaArray.push(createImage(goomba.src,450,300,50,50));
        goombaArray.push(createImage(goomba.src,100,200,50,50));
        goombaArray.push(createImage(goomba.src,200,600,50,50));
        goombaArray.push(createImage(goomba.src,700,275,50,50));
        goombaArray.push(createImage(goomba.src,800,225,50,50));
        goombaArray.push(createImage(goomba.src,950,550,50,50));

        for (let i = 0; i < goombaArray.length; i++) {
            goombaArray[i].vis = false;

        }
    }

}

var nyanCatArr = [];
var bulletBillArr = [];
var backpackArr = [];
var rocketArr = [];
var teslasArr = [];
var nftArr = [];

//Function that is called when you press the play game button
function startAnimation(){
    //This makes sure to disable the button to make sure the animate function doesn't start again.
    document.getElementById("startButton").disabled = true;
    document.getElementById("dispAnd").innerHTML = " ";
    document.getElementById("dispQuest").innerHTML = " ";

    startTimer();

    animate();
}

//Function that starts the animation and is a sequenced function.
function animate(){
    var ctx = document.getElementById("canvas").getContext("2d");

    //This function runs about 40 times per frame which means that it will look like the character is moving.
    a=requestAnimationFrame(animate);

    // //Starts by drawing the background
    // drawBackground();
    //
    // for (i=0;i<heartsArray.length;i++){
    //     //Draws the heart array if the vis variable is true.
    //     if (heartsArray[i].vis == true){
    //         //Draw stuff draws the array
    //         drawStuff(heartsArray[i]);
    //     }
    // }
    //
    // if (characterChoosen == "donaldDuck"){
    //     ctx.drawImage(donaldDuck2,donaldDuck2.X,donaldDuck2.Y, donaldDuck2.width,donaldDuck2.height);
    // }else if (characterChoosen == "jeffBezos"){
    //     ctx.drawImage(jeffBezos2,jeffBezos2.X,jeffBezos2.Y, jeffBezos2.width,jeffBezos2.height);
    // }else if (characterChoosen == "peterGriffin"){
    //     ctx.drawImage(peterGriffin2,peterGriffin2.X,peterGriffin2.Y, peterGriffin2.width,peterGriffin2.height);
    // }else if (characterChoosen == "amongUs"){
    //     ctx.drawImage(amongUs2,amongUs2.X,amongUs2.Y, amongUs2.width,amongUs2.height);
    // }

    if (level == 2){
        drawBackground();

        for (i=0;i<heartsArray.length;i++){
            //Draws the heart array if the vis variable is true.
            if (heartsArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(heartsArray[i]);
            }
        }


        if (characterChoosen == "donaldDuck"){
            ctx.drawImage(donaldDuck2,donaldDuck2.X,donaldDuck2.Y, donaldDuck2.width,donaldDuck2.height);
        }else if (characterChoosen == "jeffBezos"){
            ctx.drawImage(jeffBezos2,jeffBezos2.X,jeffBezos2.Y, jeffBezos2.width,jeffBezos2.height);
        }else if (characterChoosen == "peterGriffin"){
            ctx.drawImage(peterGriffin2,peterGriffin2.X,peterGriffin2.Y, peterGriffin2.width,peterGriffin2.height);
        }else if (characterChoosen == "amongUs"){
            ctx.drawImage(amongUs2,amongUs2.X,amongUs2.Y, amongUs2.width,amongUs2.height);
        }


        ctx.drawImage(floorCaf,floorCaf.X,floorCaf.Y,floorCaf.width,floorCaf.height);

        ctx.drawImage(stoneWall,stoneWall.X,stoneWall.Y,stoneWall.width,stoneWall.height);


        for (let i = 0; i < stoneWallsMini.length; i++) {
            ctx.drawImage(stoneWallsMini[i],stoneWallsMini[i].X,stoneWallsMini[i].Y,stoneWallsMini[i].width,stoneWallsMini[i].height);
            checkCollisionWithObjects(myMan,stoneWallsMini[i]);

        }

        ctx.drawImage(africa,africa.X,africa.Y,africa.width,africa.height);
        checkCollisionWithObjectsToPickUp(myMan,africa);

        ctx.drawImage(bitCoin,bitCoin.X,bitCoin.Y,bitCoin.width,bitCoin.height);
        checkCollisionWithObjectsToPickUp(myMan,bitCoin);

        ctx.drawImage(marchMadnessLogo,marchMadnessLogo.X,marchMadnessLogo.Y,marchMadnessLogo.width,marchMadnessLogo.height);
        checkCollisionWithObjectsToPickUp(myMan,marchMadnessLogo);

        ctx.drawImage(oscarsAward,oscarsAward.X,oscarsAward.Y,oscarsAward.width,oscarsAward.height);
        checkCollisionWithObjectsToPickUp(myMan,oscarsAward);

        ctx.drawImage(ukraineFlag,ukraineFlag.X,ukraineFlag.Y,ukraineFlag.width,ukraineFlag.height);
        checkCollisionWithObjectsToPickUp(myMan,ukraineFlag);


        ctx.drawImage(toiletPaper,toiletPaper.X,toiletPaper.Y,toiletPaper.width,toiletPaper.height);
        checkCollisionWithObjectsToPickUp(myMan,toiletPaper);


        for (let i = 0; i < doritoArray.length; i++) {
            if (doritoArray[i].vis === true){
                ctx.drawImage(doritoArray[i],doritoArray[i].X,doritoArray[i].Y,doritoArray[i].width,doritoArray[i].height);
            }
        }
        //nyanCat, bulletBill, backpack, rocket, tesla1, tesla2, nft1, nft2

        for (let i = 0; i < nyanCatArr.length; i++) {
            if (nyanCatArr[i].vis === true) {
                ctx.drawImage(nyanCatArr[i], nyanCatArr[i].X, nyanCatArr[i].Y, nyanCatArr[i].width, nyanCatArr[i].height);
            }
        }

        for (let i = 0; i < bulletBillArr.length; i++) {
            if (bulletBillArr[i].vis === true){
                ctx.drawImage(bulletBillArr[i],bulletBillArr[i].X,bulletBillArr[i].Y,bulletBillArr[i].width,bulletBillArr[i].height);
            }
        }

        for (let i = 0; i < backpackArr.length; i++) {
            if (backpackArr[i].vis === true) {
                ctx.drawImage(backpackArr[i], backpackArr[i].X, backpackArr[i].Y, backpackArr[i].width, backpackArr[i].height);
            }
        }

        checkCollisionWithObjects(myMan,stoneWall);

        ctx.drawImage(angryCafGuy,angryCafGuy.X,angryCafGuy.Y,angryCafGuy.width,angryCafGuy.height);


        ctx.drawImage(myMan,myMan.X,myMan.Y,myMan.width,myMan.height);

        makeDoritioMove();
        for (let i = 0; i < nyanCatArr.length; i++) {
            moveObjectsMovingToTheWall(nyanCatArr,i);
            checkCollisionWithObjectBad(myMan,nyanCatArr[i]);
        }

        for (let i = 0; i < bulletBillArr.length; i++) {
            moveObjectsMovingToTheleftEdge(bulletBillArr,i);
            checkCollisionWithObjectBad(myMan,bulletBillArr[i]);
        }

        for (let i = 0; i < backpackArr.length; i++) {
            moveObjectsMovingToTheWall(backpackArr,i);
            checkCollisionWithObjectBad(myMan,backpackArr[i]);

        }

        checkCollisionWithDoritoAndObjects();
        // switchToLevel3();


    }else if (level == 1){
        drawBackground();

        drawTimerText();
        border()
        checkCollision1();
        checkCollision2();
        checkCollision3()

        for (i=0;i<heartsArray.length;i++){
            //Draws the heart array if the vis variable is true.
            if (heartsArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(heartsArray[i]);
            }
        }

        if (characterChoosen == "donaldDuck"){
            ctx.drawImage(donaldDuck2,donaldDuck2.X,donaldDuck2.Y, donaldDuck2.width,donaldDuck2.height);
        }else if (characterChoosen == "jeffBezos"){
            ctx.drawImage(jeffBezos2,jeffBezos2.X,jeffBezos2.Y, jeffBezos2.width,jeffBezos2.height);
        }else if (characterChoosen == "peterGriffin"){
            ctx.drawImage(peterGriffin2,peterGriffin2.X,peterGriffin2.Y, peterGriffin2.width,peterGriffin2.height);
        }else if (characterChoosen == "amongUs"){
            ctx.drawImage(amongUs2,amongUs2.X,amongUs2.Y, amongUs2.width,amongUs2.height);
        }

        for (let i = 0; i < goombaArray.length; i++) {
            if (goombaArray[i].vis === true){
                ctx.drawImage(goombaArray[i],goombaArray[i].X,goombaArray[i].Y, goombaArray[i].width, goombaArray[i].height);

            }
            checkCollisionWithObjectBad(myMan,goombaArray[i]);
        }
        // questionChecker();


        for (let i = 0; i < itemsArray.length; i++) {
            drawStuff(itemsArray[i]);
        }


        drawStuff(myMan);

        checkTimeLimit();
    }else if (level == 3){

        drawBackground();


        if (characterChoosen == "donaldDuck"){
            ctx.drawImage(donaldDuck2,donaldDuck2.X,donaldDuck2.Y, donaldDuck2.width,donaldDuck2.height);
        }else if (characterChoosen == "jeffBezos"){
            ctx.drawImage(jeffBezos2,jeffBezos2.X,jeffBezos2.Y, jeffBezos2.width,jeffBezos2.height);
        }else if (characterChoosen == "peterGriffin"){
            ctx.drawImage(peterGriffin2,peterGriffin2.X,peterGriffin2.Y, peterGriffin2.width,peterGriffin2.height);
        }else if (characterChoosen == "amongUs"){
            ctx.drawImage(amongUs2,amongUs2.X,amongUs2.Y, amongUs2.width,amongUs2.height);

        }

        for (let i = 0; i < coridorBricks.length; i++) {
            drawStuff(coridorBricks[i]);
        }

        for (let i=0;i<heartsArray.length;i++){
            //Draws the heart array if the vis variable is true.
            if (heartsArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(heartsArray[i]);
            }
        }

        checkIfReachedEnd();


        drawStuff(myMan);


    }
}

function moveObjectsMovingToTheWall(arrCheck,i){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (arrCheck[i].hit == false){
        if (arrCheck[i].vis === true){
            ctx.drawImage(arrCheck[i],arrCheck[i].X,arrCheck[i].Y,arrCheck[i].width,arrCheck[i].height);
        }

        arrCheck[i].X = arrCheck[i].X + 5;

        if (arrCheck[i].X >= 425){
            arrCheck[i].X = -75;
            arrCheck[i].vis = true;

        }
    }


}

function checkIfReachedEnd(){
    if (myMan.X > 900){
        myMan.X-= 100;
        alert("reached the end!");

        var inp1 = prompt("Where is Canada?");
        var inp2 = prompt("Who made Tesla?");
        var inp3 = prompt("Who was FDR?");

        if (inp1 == "North America"){
            if (inp2 == "Musk"){
                if (inp3 == "president"){

                    alert("YOU WON!!!");

                }
            }
        }

    }
}

function moveObjectsTowardsTheWalloppSide(arrCheck,i){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (arrCheck[i].hit == false){
        if (arrCheck[i].vis === true){
            ctx.drawImage(arrCheck[i],arrCheck[i].X,arrCheck[i].Y,arrCheck[i].width,arrCheck[i].height);
        }

        arrCheck[i].X = arrCheck[i].X - 5;

        if (arrCheck[i].X <= 500){
            arrCheck[i].X = 950;
            arrCheck[i].vis = true;

        }
    }


}
function moveObjectsMovingToTheRightEdge(arrCheck,i){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (arrCheck[i].hit == false){
        if (arrCheck[i].vis === true){
            ctx.drawImage(arrCheck[i],arrCheck[i].X,arrCheck[i].Y,arrCheck[i].width,arrCheck[i].height);
        }

        arrCheck[i].X = arrCheck[i].X + 5;
        if (arrCheck[i].X > 500){
            arrCheck[i].vis = true;
        }

        if (arrCheck[i].X < 950){
            arrCheck[i].X = 500;
            arrCheck[i].vis = false;

        }
    }


}



function moveObjectsMovingToTheleftEdge(arrCheck,i){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (arrCheck[i].hit == false){
        if (arrCheck[i].vis === true){
            ctx.drawImage(arrCheck[i],arrCheck[i].X,arrCheck[i].Y,arrCheck[i].width,arrCheck[i].height);
        }

        arrCheck[i].X = arrCheck[i].X - 5;
        if (arrCheck[i].X <=425){
            arrCheck[i].vis = true;
        }

        if (arrCheck[i].X < -75){
            arrCheck[i].X = 500;
            arrCheck[i].vis = false;

        }
    }


}

function makeDoritioMove(){
    var ctx = document.getElementById("canvas").getContext("2d");

    if (clickedSpace >= 0){
        console.log(clickedSpace);
        doritoArray[clickedSpace].vis = true;

        if (doritoArray[clickedSpace].vis === true){
            ctx.drawImage(doritoArray[clickedSpace],doritoArray[clickedSpace].X,doritoArray[clickedSpace].Y,doritoArray[clickedSpace].width,doritoArray[clickedSpace].height);
        }

        if (myMan.X < 500){
            doritoArray[clickedSpace].Y = doritoArray[clickedSpace].Y - 3;

        }

        if (myMan.X > 500){
            doritoArray[clickedSpace].Y = doritoArray[clickedSpace].Y + 3;

        }


        console.log(doritoArray[clickedSpace].Y);
    }
}

var arrColected = [];
var count = 0;

function checkCollisionWithObjectsToPickUp(objMove,objCol){
    if(objMove.X + objMove.width > objCol.X && objMove.X < objCol.X+ objCol.width &&
        objMove.Y + objMove.height > objCol.Y && objMove.Y < objCol.Y + objCol.height && objMove.vis == true && objCol.vis == true){

        arrColected.push(objCol);
        objCol.X = 1100 + count;
        objCol.Y = 500;
        count += 10;
    }
}

function switchToLevel3(){
    level = 3;

    drawBackground();

    for (i=0;i<heartsArray.length;i++){
        //Draws the heart array if the vis variable is true.
        if (heartsArray[i].vis == true){
            //Draw stuff draws the array
            drawStuff(heartsArray[i]);
        }
    }

    for (let i = 0; i < coridorBricks.length; i++) {
        ctx.drawImage(coridorBricks[i],coridorBricks[i].X,coridorBricks[i].Y, coridorBricks[i].width, coridorBricks[i].height)
    }

    drawStuff(myMan);

    console.log(level);

}

function switchToLevel2(){
    level = 2;
    console.log(level);

}

function checkCollisionWithDoritoAndObjects(){
    for (let i = 0; i < doritoArray.length; i++) {

        for (let j = 0; j < nyanCatArr.length; j++) {
            if(doritoArray[i].X + doritoArray[i].width > nyanCatArr[j].X && doritoArray[i].X < nyanCatArr[j].X+ nyanCatArr[j].width &&
                doritoArray[i].Y + doritoArray[i].height > nyanCatArr[j].Y && doritoArray[i].Y < nyanCatArr[j].Y + nyanCatArr[j].height && doritoArray[i].vis == true && nyanCatArr[j].vis == true){

                nyanCatArr[j].hit = true;
                nyanCatArr[j].vis = false;

            }
        }

        for (let j = 0; j < bulletBillArr.length; j++) {
            if(doritoArray[i].X + doritoArray[i].width > bulletBillArr[j].X && doritoArray[i].X < bulletBillArr[j].X+ bulletBillArr[j].width &&
                doritoArray[i].Y + doritoArray[i].height > bulletBillArr[j].Y && doritoArray[i].Y < bulletBillArr[j].Y + bulletBillArr[j].height && doritoArray[i].vis == true && bulletBillArr[j].vis == true){

                bulletBillArr[j].hit = true;
                bulletBillArr[j].vis = false;

            }
        }

        for (let j = 0; j < backpackArr.length; j++) {
            if(doritoArray[i].X + doritoArray[i].width > backpackArr[j].X && doritoArray[i].X < backpackArr[j].X+ backpackArr[j].width &&
                doritoArray[i].Y + doritoArray[i].height > backpackArr[j].Y && doritoArray[i].Y < backpackArr[j].Y + backpackArr[j].height && doritoArray[i].vis == true && backpackArr[j].vis == true){

                backpackArr[j].hit = true;
                backpackArr[j].vis = false;

            }
        }


    }


}

function checkCollisionWithObjects(objMove,objCol){
    if(objMove.X + objMove.width > objCol.X && objMove.X < objCol.X+ objCol.width &&
        objMove.Y + objMove.height > objCol.Y && objMove.Y < objCol.Y + objCol.height && objMove.vis == true && objCol.vis == true){
        if (objMove.X <= 500){
            objMove.X = objMove.X - 50;
        }else if (objMove.X >= objCol.X){
            objMove.X = objMove.X + 50;

        }

    }
}

var heal = 3;
var winGame = false;
var gameOver = false;

function checkMyManDie(heal){
    //The process is done in order (SEQUENCING)
    //This heal variable is the health varibale that is being checked if it is still greater then 0
    //checked through SELECTION
    if (heal >= 0 && winGame == false) {
        //This IRITATION
        if (gameOver == false){
            for (i = 0; i < heartsArray.length; i++) {
                //This is another selection that is used to remove only the heart corresponding to the
                //heart index that matches the health. Used because the hearts are removed from right to left.
                if (i == heal) {
                    //Makes the heart disappear
                    heartsArray[i].vis = false;
                }
            }
        }
        //If none of these conditions work then this happens.
    }

}


function checkCollisionWithObjectBad(objMove,objCol){
    if(objMove.X + objMove.width > objCol.X && objMove.X < objCol.X+ objCol.width &&
        objMove.Y + objMove.height > objCol.Y && objMove.Y < objCol.Y + objCol.height && objMove.vis == true && objCol.vis == true){
        heal--;
        checkMyManDie(heal);

        if (myMan.X < objCol.X){
            myMan.X = myMan.X - 50;
        }else if (myMan.X > objCol.X){
            myMan.X = myMan.X + 50;
        }else if (myMan.Y < objCol.Y ){
            myMan.Y = myMan.Y - 50;
        }else if (myMan.Y > objCol.Y){
            myMan.Y = myMan.Y + 50;
        }
        objCol.vis = false

    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function drawStuff(x) {
    var ctx = document.getElementById("canvas").getContext("2d");
    if (x.vis == true) {
        ctx.drawImage(x, x.X, x.Y, x.width, x.height);
    }
}

function drawTimerText() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.font = "30px Times New Roman";
    ctx.fillText("Time left: " + tim, 1100, 50);
}

function startTimer() {
    timer = setInterval(alertFunc, 1000);
}

function alertFunc() {
    spawnGoomba();
    tim--;

}

function spawnGoomba(){
    if (tim%10 === 0 && level == 1){
        var randInt = getRandomInt(0,goombaArray.length);
        // console.log(goombaArray[randInt].vis = true);
        console.log("randInt: " + randInt);
        goombaArray[randInt].vis = true;
    }
}

function checkTimeLimit() {
    if (tim === 90) {
        console.log("turns true");
    }

    if (tim <= 0) {
        gameOver == true;
    }

}

function border() {
    //This selection statement makes sure that the borders of the character don't pass the game board borders.
    if (myMan.X >= 950 || myMan.X < 0 || myMan.Y < 0 || myMan.Y >= 650) {
        //The character gets reset in a diffrent coordinets.
        myMan.X = 500;
        myMan.Y = 200;
    }
}


var quest;
var ans;

function checkCollision1() {
    //goes through array of pics and checks for which pic the player collided with
    if (myMan.X + myMan.width > garbageCan.X && myMan.X < garbageCan.X + garbageCan.width &&
        myMan.Y + myMan.height > garbageCan.Y && myMan.Y < garbageCan.Y + garbageCan.height &&
        myMan.vis === true && garbageCan.vis === true && clue1 === true) {
        var rand = getRandomInt(0, inputedQuestions.length-1)
        console.log(rand);
        quest = inputedQuestions[rand];
        ans = inputedAnswers[rand];
        correct = ans;
        document.getElementById("fQuestion").innerHTML = quest;
        if (myMan.X < garbageCan.X){
            myMan.X = myMan.X - 50;
        }else if (myMan.X > garbageCan.X){
            myMan.X = myMan.X + 50;
        }else if (myMan.Y < garbageCan.Y ){
            myMan.Y = myMan.Y - 50;
        }else if (myMan.Y > garbageCan.Y){
            myMan.Y = myMan.Y + 50;
        }
        garbageCan.vis = false
    }
}
function checkCollision2() {
    //goes through array of pics and checks for which pic the player collided with
    if (myMan.X + myMan.width > plant3.X && myMan.X < plant3.X + plant3.width &&
        myMan.Y + myMan.height > plant3.Y && myMan.Y < plant3.Y + plant3.height &&
        myMan.vis === true && plant3.vis === true && clue1 === true) {
        var rand = getRandomInt(0, inputedQuestions.length-1)
        quest = inputedQuestions[rand];
        ans = inputedAnswers[rand];
        correct = ans;
        document.getElementById("sQuestion").innerHTML = quest;
        if (myMan.X < plant3.X){
            myMan.X = myMan.X - 50;
        }else if (myMan.X > plant3.X){
            myMan.X = myMan.X + 50;
        }else if (myMan.Y < plant3.Y ){
            myMan.Y = myMan.Y - 50;
        }else if (myMan.Y > plant3.Y){
            myMan.Y = myMan.Y + 50;
        }
        plant3.vis = false
    }
}
function checkCollision3() {
    //goes through array of pics and checks for which pic the player collided with
    if (myMan.X + myMan.width > paper3.X && myMan.X < paper3.X + paper3.width &&
        myMan.Y + myMan.height > paper3.Y && myMan.Y < paper3.Y + paper3.height &&
        myMan.vis === true && paper3.vis === true && clue1 === true) {
        var rand = getRandomInt(0, inputedQuestions.length-1)
        quest = inputedQuestions[rand];
        ans = inputedAnswers[rand];
        correct = ans;
        document.getElementById("tQuestion").innerHTML = quest;
        if (myMan.X < paper3.X){
            myMan.X = myMan.X - 50;
        }else if (myMan.X > paper3.X){
            myMan.X = myMan.X + 50;
        }else if (myMan.Y < paper3.Y ){
            myMan.Y = myMan.Y - 50;
        }else if (myMan.Y > paper3.Y){
            myMan.Y = myMan.Y + 50;
        }
        paper3.vis = false
    }
}


var keyNumOne = getRandomInt(0,9);
var keyNumTwo = getRandomInt(0,9);
var keyNumThree = getRandomInt(0,9);

var dispCode = [];

function questionChecker() {
    var guess1 = document.getElementById("fAnswer").value
    var guess2 = document.getElementById("sAnswer").value
    var guess3 = document.getElementById("tAnswer").value
    if (clue1 === true && clue2 === false && clue3 === false && guess1 === ans) {
        clue1 = true;
        clue2 = true;
        clue3 = false;
        dispCode.push(keyNumOne);
        document.getElementById("keypad1").innerHTML = dispCode[0];


    } else if (clue1 === true && clue2 === true && clue3 === false && guess2 === ans) {
        clue1 = true;
        clue2 = true;
        clue3 = true;
        dispCode.push(keyNumTwo);

        document.getElementById("keypad2").innerHTML = dispCode[0] + " , " + dispCode[1];

    } else if (clue1 === true && clue2 === true && clue3 === true && guess3 === ans) {
        clue1 = true;
        clue2 = true;
        clue3 = true;

        dispCode.push(keyNumThree);

        document.getElementById("keypad3").innerHTML = dispCode[0] + " , " + dispCode[1] + " , " + dispCode[2];




    }

}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var finalNm = " ";

function finalCheck(){
    finalNm = keyNumOne + "," + keyNumTwo + "," + keyNumThree;
    var inp = document.getElementById("finalCode").value;

    if (inp === keyNumOne + "," + keyNumTwo + "," + keyNumThree){
        document.getElementById("keypad3").innerHTML = "You got it correct!";

    }

    console.log(finalNm);
}
