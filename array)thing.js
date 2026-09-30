let game = {
    // TODO: Add your solution here
    lives: 3,
    coins: 0,

    get points(){
        return coins * 10;
    },

    playerDies = function(){
        if(lives > 0){
            lives--;
        }
    },

    newGame = function(){
        lives = 3;
        coins = 0;
    }
};

console.log("Testing game object...");

// TODO: Un-comment the code below to test the game object

console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
