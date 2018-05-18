// create an Enemy 
class Enemy {
     constructor(y,sprite){
        this.x = 0;
        this.y = y;
        this.speed = Math.round(Math.random()*(250-70)+50);
        this.sprite = sprite; 
    }
    
// draw the enemy on the screen
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
// the same speed on all PC
// the enemy position
    update(dt) { 
        if(this.x > 505){
            this.x = 0;
            this.speed = Math.round(Math.random()*(250-70)+50);  
        }
// koillisoin's recognition
        if (player.y + 131 >= this.y + 90 && player.x + 25 <= this.x + 88 && player.y + 73 <= this.y + 135 && player.x + 76 >= this.x + 11) {
            player.x = 202.5;
            player.y = 395;
        }
    this.x = this.x + this.speed * dt;
    }
}

// create a Player

class Player {
    
    constructor(speed, sprite){
        this.x = 202.5;
        this.y = 395;
        this.speed = speed;
        this.sprite = sprite;
    }
// draw a character on the screen
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
// the player position
    update(dt){
// an alert when the player achieves the goal
        if(this.y <= -11 ){
            this.x = 202;
            this.y = 395;
            alert(`You did it, well done!`);
        }
// boundary of the game
        if(this.x <=0) {
            this.x = 0;
        } else if(this.x > 400){
            this.x = 404;
        } else if(this.y > 395) {
            this.y = 395;
        }
    }
// keyboard input
    handleInput(pressKey) {
        if (pressKey === 'up') {
            this.y -= 83;
        } else if (pressKey === 'left') {
            this.x = this.x - 101;
        } else if (pressKey=== 'right') {
            this.x = this.x + 101;
        } else if (pressKey === 'down') {
            this.y = this.y + 83;
        }    
    }
}



// create a new player
const player = new Player(100,'images/char-boy.png');
// array of all enemies
const allEnemies = [
    new Enemy(63, 'images/enemy-bug.png'),
    new Enemy(146, 'images/enemy-bug.png'),
    new Enemy(229, 'images/enemy-bug.png'),
    new Enemy(63, 'images/enemy-bug.png'),
    new Enemy(146, 'images/enemy-bug.png'),
    new Enemy(229, 'images/enemy-bug.png'),
    new Enemy(63, 'images/enemy-bug.png')
];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
   