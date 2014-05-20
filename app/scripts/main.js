$('.startbutton').click(function(){
  player = new Hero();
  enemy = new Enemy()
 
  $('.startgame').remove();
 
  $('.battleground').addClass('active');

});

function Hero () {
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
}

function Enemy (level) {
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
}

function playerStats (player) {
  if (player.health < 1) {
    $('.p1-playerhealth').text("YOU DIED").addClass('dead')
    } 
    else {
    $('.p1-playerhealth').text("Health: " + player.health)
    }
}
 

  function enemyStats (player) {
  if (player.health < 1) {
    $('.p2-playerhealth').text("YOU DIED").addClass('dead')
    } 
    else {
    $('.p2-playerhealth').text("Health: " + player.health)
    }
}


$('.p1-punch-button').click(function(){
  player.punch(enemy);
  playerStats(player);
  enemyStats(enemy); 
})

$('.p1-kick-button').click(function(){
  player.kick(enemy);
  playerStats(player);
  enemyStats(enemy); 
})

$('.p1-special-button').click(function(){
  player.special(enemy);
  playerStats(player);
  enemyStats(enemy); 
})

$('.p2-kick-button').click(function(){
  enemy.kick(player);
  playerStats(player);
  enemyStats(enemy); 
})

$('.p2-punch-button').click(function(){
  enemy.punch(player);
  playerStats(player);
  enemyStats(enemy); 
})

$('.p2-special-button').click(function(){
  enemy.special(player);
  playerStats(player);
  enemyStats(enemy); 
})

// $('.p1-playerhealth').map(function() {
//         console.log (player.health);

//         $(this).text('PLAYER HEALTH:' + player.health);
//     });


////////////////////FROM HERE UP WORKS///////////////////////


//////// var player1=
////////    {
////////    'name':'Hero',
////////    'health':100,
//////// };

//////// var player2=
////////    {
////////    'name':'Enemy',
////////    'health':100,
//////// };

//////// $('.p1-punch-button').click(function(){
////////     player1.punch(enemy);
////////     $('.p1-playerhealth').prepend('You attack!');

//////// });

//////// PLAYER 1 PUNCH BUTTON BEGIN
//////// $('.p1-punch-button').click(function() {
//////// 	$(this).parent('.p1-playerhealth').text('PLAYER HEALTH:' + (player1.health - 10));
//////// });

//////// $('.p1-punch-button').click(function() {
//////// 	$(this).parent('p1-playerhealth').append('blah');
//////// }

//////// PLAYER 1 PUNCH BUTTON END

//////// $('.p1-playerhealth').map(function() {
////////         console.log (player1.health);

////////         $(this).text('PLAYER HEALTH:' + player1.health);
////////     });

//////// $('.p2-playerhealth').map(function() {
////////         console.log (player2.health);

////////         $(this).text('PLAYER HEALTH:' + player2.health);
////////     });

//////// $('.p1-playername').map(function() {
////////         console.log (player1.name);

////////         $(this).text(player1.name);
////////     });

//////// $('.p2-playername').map(function() {
////////         console.log (player2.name);

////////         $(this).text(player2.name);
////////     });
