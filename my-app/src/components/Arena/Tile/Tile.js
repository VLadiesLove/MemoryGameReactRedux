import React from 'react'
import styles from './Tile.module.css'


function Tile(props) {
  return (
    <div className={styles.tile + " " + props.tiles[props.id].color + " " + props.tiles[props.id].hidden} 
         onClick={() => props.turnTile(props.id)} >      
    </div>
  );
}



export default Tile;
