import React from 'react';
import TileContainer from "./Tile/TileContainer";
import styles from './Arena.module.css'
// import state from '../state';





function Arena(props) {
  let i = -1;
  return (
    <div className={styles.arena}>
      {
        props.state.tiles.map(t => {
          i += 1;
          return <TileContainer  id={i} />
        })
      }
    </div>
  );
}

export default Arena;