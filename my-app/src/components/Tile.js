import React from 'react';



function Tile(props) {
 

 
  return (
    <div className={"tile " + props.color + props.hidden} onClick={() => props.isOpen(props.id)} >
        
    </div>
  );
}



export default Tile;
