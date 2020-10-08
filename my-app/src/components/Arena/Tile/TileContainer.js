import React from 'react'
import Tile from './Tile'
import {connect} from 'react-redux'
import {toggleTileActionCreator} from '../../../store/arena-reducer'

class TileContainer extends React.Component {
    render() {
        
        return <Tile tiles={this.props.tiles} turnTile={this.props.turnTile} id={this.props.id} />
    }
}

const mapStateToProps = (state) => {
   return {
        tiles:state.arena.tiles
   } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        turnTile: (id) => dispatch(toggleTileActionCreator(id))
    }
}

 export default connect(mapStateToProps,mapDispatchToProps)(TileContainer)