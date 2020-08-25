import React from 'react';
import {renderEntireTree} from './render'





let state = {
    tiles : [
        {id:1, color:'red', hidden:'hidden', flag:false},
        {id:2, color:'orange', hidden:'hidden', flag:false},
        {id:3, color:'purple', hidden:'hidden', flag:false},
        {id:4, color:'blue', hidden:'hidden', flag:false},
        {id:5, color:'yellow', hidden:'hidden', flag:false},
        {id:6, color:'red', hidden:'hidden', flag:false},
        {id:7, color:'orange', hidden:'hidden', flag:false},
        {id:8, color:'yellow', hidden:'hidden', flag:false},
        {id:9, color:'black', hidden:'hidden', flag:false},
        {id:10, color:'pink', hidden:'hidden', flag:false},
        {id:11, color:'green', hidden:'hidden', flag:false},
        {id:12, color:'green', hidden:'hidden', flag:false},
        {id:13, color:'purple', hidden:'hidden', flag:false},
        {id:14, color:'blue', hidden:'hidden', flag:false},
        {id:15, color:'pink', hidden:'hidden', flag:false},
        {id:16, color:'black', hidden:'hidden', flag:false}



    ]
       
    
    
}
    
function shuffleState(){

    state.tiles.sort(() => Math.random() - 0.5);

    for(let i = 0; i < state.tiles.length; i++){
       state.tiles[i].id = i+1;
    }
}
shuffleState();
    



   
    let clickedId = null;
    let clickBeforeTimeout = false;

    export function isOpen(id){
        if( clickBeforeTimeout) {return;}
        if(state.tiles[id-1].flag ){ clickedId = null; return;}
        
       
        
      
        for ( let i=0 ; i<state.tiles.length ; i++ ){
            if(state.tiles[i].id == id){

               state.tiles[i].hidden = ''; 
            }
        }
        

    if(!clickedId) {
        clickedId = id;

    } else if(clickedId && clickedId !== id){

            if(state.tiles[clickedId-1].color == state.tiles[id-1].color ){

                state.tiles[clickedId-1].flag = true;
                state.tiles[id-1].flag = true;
                console.log('tiles are equal');
                clickedId = null
                
            } else {    
                    

                    if(clickBeforeTimeout) {return;}
                    console.log('we are here')
                    setTimeout( () => {
                        state.tiles[clickedId-1].hidden = ' hidden';
                        state.tiles[id-1].hidden = ' hidden';
                        clickedId = null;
                        renderEntireTree();
                        
                    },600);
                
                    clickBeforeTimeout = true;

                    setTimeout( () => {clickBeforeTimeout = false},600);
                }   
                
            

        }
        
       renderEntireTree();
       

    

}


export default state;