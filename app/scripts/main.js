//BEGIN
//Start button to start game
$('.startbutton').click(function(){
    player = new Hero();
    enemy = new Enemy();
 
    $('.startgame').remove();
 
    $('.battleground').addClass('active');

});
//Start button to start game
//END

//BEGIN
//Creating contructor for Hero
function Hero () {
    this.name = 'HERO';
    this.health = 100;
 
    this.punch = function(target) {
        target.health = target.health - 2;
    };

    this.kick = function(target) {
        target.health = target.health - 3;
    };

    this.special = function(target) {
        target.health = target.health - 25;
    };

    this.life = function(target) {
        target.health = target.health = 100;
    };
}
//Creating contructor for Hero
//END

//BEGIN
//Creating contructor for Enemy
function Enemy (level) {
    this.name = 'Enemy';
    this.health = 100;
 
    this.punch = function(target) {
        target.health = target.health - 4;
    };

    this.kick = function(target) {
        target.health = target.health - 15;
    };

    this.special = function(target) {
        target.health = target.health - 25;
    };

    this.life = function(target) {
        target.health = target.health = 100;
    };
}
//Creating contructor for Enemy
//END

//BEGIN
//Creating function to create Hero health and create 'You Died' text upon dying and giving the player an option to continue
 function playerStats (player) {
    if (player.health < 1) {
        $('.p1-playerhealth').text('YOU DIED').addClass('dead');
        $('.continue').html('<a href=".">Click Here To Continue</a>').addClass('active');

    }
    else {
        $('.p1-playerhealth').text('Health: ' + player.health);
    }
}
//END
 
//BEGIN 
//Creating function for enemy health
function enemyStats (player) {
    if (player.health < 1) {
        $('.p2-playerhealth').html('<span class="dead">BOSS DEFEATED</span>');
    
    }
    else {
        $('.p2-playerhealth').text('Health: ' + player.health);
    }
}
//END

//BEGIN
//Creating click functions for Hero
$('.p1-punch-button').click(function(){
    player.punch(enemy);
    playerStats(player);
    enemyStats(enemy);
    // $('.playerimage2').changeClass('playerimage2-pow');
    // $('.playerimage2')
    // // $('.playerimage2').css('background-image', $(this).val() + 'url("../images/player2.jpg")').delay(3800);
    //     });


$('.p1-kick-button').click(function(){
    player.kick(enemy);
    playerStats(player);
    enemyStats(enemy);
});

$('.p1-special-button').click(function(){
    player.special(enemy);
    playerStats(player);
    enemyStats(enemy);
});

$('.p1-life-button').click(function(){
    player.life(enemy);
    playerStats(player);
    enemyStats(enemy);
});
//END

//BEGIN
//Creating click functions for Enemy
$('.p2-kick-button').click(function(){
    enemy.kick(player);
    playerStats(player);
    enemyStats(enemy);
});

$('.p2-punch-button').click(function(){
    enemy.punch(player);
    playerStats(player);
    enemyStats(enemy);
});

$('.p2-special-button').click(function(){
    enemy.special(player);
    playerStats(player);
    enemyStats(enemy);
});
//END

//BEGIN
//Creating map to search for Hero name and Enemy name in their constructors
$('.p1-playername').map(function() {
        $(this).text(Hero.name);
    });

$('.p2-playername').map(function() {
        $(this).text(Enemy.name);
    });
//END