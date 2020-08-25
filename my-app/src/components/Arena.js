import React from 'react';
import Tile from "./Tile";
// import state from '../state';





function Arena(props) {

    
  return (
    <div className="arena">
      <div className = 'row'>
        <Tile color={props.state.tiles[0].color} hidden={props.state.tiles[0].hidden} id={props.state.tiles[0].id} isOpen ={props.isOpen} />
        <Tile color={props.state.tiles[1].color} hidden={props.state.tiles[1].hidden} id={props.state.tiles[1].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[2].color} hidden={props.state.tiles[2].hidden} id={props.state.tiles[2].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[3].color} hidden={props.state.tiles[3].hidden} id={props.state.tiles[3].id} isOpen ={props.isOpen}/>
      </div>
      <div className = 'row'>
        <Tile color={props.state.tiles[4].color} hidden={props.state.tiles[4].hidden} id={props.state.tiles[4].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[5].color} hidden={props.state.tiles[5].hidden} id={props.state.tiles[5].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[6].color} hidden={props.state.tiles[6].hidden} id={props.state.tiles[6].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[7].color} hidden={props.state.tiles[7].hidden} id={props.state.tiles[7].id} isOpen ={props.isOpen}/>
      </div>
      <div className = 'row'>
        <Tile color={props.state.tiles[8].color} hidden={props.state.tiles[8].hidden} id={props.state.tiles[8].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[9].color} hidden={props.state.tiles[9].hidden} id={props.state.tiles[9].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[10].color} hidden={props.state.tiles[10].hidden} id={props.state.tiles[10].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[11].color} hidden={props.state.tiles[11].hidden} id={props.state.tiles[11].id} isOpen ={props.isOpen}/>
      </div>
      <div className = 'row'>
        <Tile color={props.state.tiles[12].color} hidden={props.state.tiles[12].hidden} id={props.state.tiles[12].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[13].color} hidden={props.state.tiles[13].hidden} id={props.state.tiles[13].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[14].color} hidden={props.state.tiles[14].hidden} id={props.state.tiles[14].id} isOpen ={props.isOpen}/>
        <Tile color={props.state.tiles[15].color} hidden={props.state.tiles[15].hidden} id={props.state.tiles[15].id} isOpen ={props.isOpen}/>
      </div>
      
    </div>
  );
}

export default Arena;