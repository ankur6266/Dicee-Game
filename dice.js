function dice(){
    p1 = Math.floor(Math.random()*6) + 1;
    p2 = Math.floor(Math.random()*6) + 1;

winner();
dice_no();
}

function winner(){
    if (p1 > p2)
        document.querySelector("h1").textContent = "🚩Player 1 Wins🚩";

    else if (p1 < p2)
        document.querySelector("h1").textContent = "🚩Player 2 Wins🚩";
    
    else if (p1 === p2)
        document.querySelector("h1").textContent = "Game🚩Draw";
}
function dice_no(){
//player 1
    n1 = "dice" + p1 + ".png";
    img_1_src = "images/" + n1;
    image_1 = document.querySelectorAll("img")[0];
    image_1.setAttribute("src", img_1_src);
//player 2
    n2 = "dice" + p2 + ".png";
    img_2_src = "images/" + n2;
    image_2 = document.querySelectorAll("img")[1].setAttribute("src", img_2_src);
}

/*                                          MY CODE
function dice(){
    p1 = Math.floor(Math.random()*6) + 1;
    p2 = Math.floor(Math.random()*6) + 1;

winner();
dice_no();
}

function winner(){
    if (p1 > p2)
        document.querySelector("h1").textContent = "🚩Player 1 Wins🚩";

    else if (p1 < p2)
        document.querySelector("h1").textContent = "🚩Player 2 Wins🚩";
    
    else if (p1 === p2)
        document.querySelector("h1").textContent = "Game🚩Draw";
}
function dice_no(){
//player 1
    if(p1 === 1)
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
    else if(p1 ===2)
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
    else if (p1 === 3)
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
    else if (p1 === 4)
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
    else if (p1 === 5)
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
    else
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
//player 2
    if(p2 === 1)
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
    else if(p2 ===2)
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
    else if (p2 === 3)
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
    else if (p2 === 4)
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
    else if (p2 === 5)
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
    else
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}
*/