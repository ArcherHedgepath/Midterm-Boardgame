// Archer Hedgepath
// 10/6/2022
// Mid Term Project






//The array of tile spaces' names and value
var spaces = {start: 0, topRight: 5, botRight: 10, botLeft: 15, lastSpace: 19}
//The width of a board space
var spaceSize = 60

class Player{

    constructor(){
        this.position = 0 //the value the player's position on the viewport
        this.name //player's name
        this.color //player's color
        this.playerImg //player's piece
    }

    

}


// Function Dice Roll
// Return: A Value between 2-12
// This function is used to simulate a 1d6 roll, to move the player pieces that many spaces
function diceRoll()
{
    let roll = Math.ceil(Math.random()*6)
    return roll
}

// Function Move Player
// Return: none
// This functions moves the given player a random distance and the correct direction
function movePlayer(player)
{
    roll = diceRoll();
    for (let index = 0; index < roll; index++) {
        direction = determineDirection(player)
        currentXPos = player.playerImg.style.left
        currentYPos = player.playerImg.style.top
        if(direction == "right")
        {
            player.playerImg.style.left = currentXPos + spaceSize
            
        }
        else if(direction == "down")
        {
            player.playerImg.style.top = currentYPos + spaceSize
        }
        else if(direction == "left")
        {
            player.playerImg.style.left = currentXPos - spaceSize
        }
        else if(direction == "up")
        {
            player.playerImg.style.top = currentYPos - spaceSize
        }

        if(player.position == spaces.lastSpace)
        {
            player.position = 0
        }
        else
        {
            player.position++;
        }
        
        
    }
}

// Function Is At Turning Point
// Return: Direction
// This function determines what direction the player piece needs to go; left, right, up, or down
function determineDirection(player)
{
    if(player.position >= spaces.start && player.position < spaces.topRight)
    {
        return "right"
    }
    else if(player.position >= spaces.topRight && player.position < spaces.botRight)
    {
        return "down"
    }
    else if(player.position >= spaces.botRight && player.position < spaces.botLeft)
    {
        return "left"
    }
    else
    {
        return "up"
    }
}