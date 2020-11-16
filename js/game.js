class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = db.ref('gameState');

        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        db.ref ('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hideForm();

        textSize(22);
        text("Game Start",120,100);

        Player.getPlayerInfo();

        if(allPlayers != undefined){
            var displayPos = 130;

            for (var plr in allPlayers){
                if(plr === "players" + player.index){
                    fill("red");
                }else 
                    fill("black");

                    displayPos +=20;
                
                    text(allPlayers[plr].name + " : " + allPlayers[plr].distance , 120 , displayPos);
            }

        }

        if (keyIsDown(UP_ARROW) && player.index != null ){
            player.distance += 50;
            player.update();
        }

    }
}