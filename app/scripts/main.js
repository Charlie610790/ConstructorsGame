// function Mario () {
// 	this.health - 1
// 	}
// 	this.primaryAttack = function (target) {
// 		target.health = target.health - 10;
// 	}
// 	this.SpecialAttack = function (target) {
// 		if (target.spikey == true) {
// 			this.hp = 0;
// 		else {
// 			target.health - 20;
// 		}
// 	}
// }



var player1=
	{
	'name':'player1',
	'health':100,
};

var player2=
	{
	'name':'player2',
	'health':100,
};

// PLAYER 1 PUNCH BUTTON BEGIN
// $('.p1-punch-button').click(function() {
// 	$(this).parent('.p1-playerhealth').text('PLAYER HEALTH:' + (player1.health - 10));
// });

// $('.p1-punch-button').click(function() {
// 	$(this).parent('p1-playerhealth').append('blah');
// }

// PLAYER 1 PUNCH BUTTON END

$('.p1-playerhealth').map(function() {
        console.log (player1.health);

        $(this).text('PLAYER HEALTH:' + player1.health);
    });

$('.p2-playerhealth').map(function() {
        console.log (player2.health);

        $(this).text('PLAYER HEALTH:' + player2.health);
    });
