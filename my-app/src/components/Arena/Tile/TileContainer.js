import React from 'react'
import Tile from './Tile'
import {connect} from 'react-redux'
import {toggleTileActionCreator, toggleTileThunkCreator} from '../../../store/arena-reducer'

class TileContainer extends React.Component {
    render() {
        return <Tile tiles={this.props.tiles} turnTile={this.props.turnTile} id={this.props.id}
                     isClickBeforeTimeout={this.props.isClickBeforeTimeout}/>
    }
    componentDidUpdate(){
        if(this.props.isClickBeforeTimeout === true) {
            this.props.closeTiles()
        }
    }
}

const mapStateToProps = (state) => {
   return {
        tiles:state.arena.tiles,
        isClickBeforeTimeout: state.arena.isClickBeforeTimeout
   } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        turnTile: (id) => dispatch(toggleTileActionCreator(id)),
        closeTiles: () => dispatch(toggleTileThunkCreator())
    }
}

 export default connect(mapStateToProps,mapDispatchToProps)(TileContainer)