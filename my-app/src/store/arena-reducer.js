const TOGGLE_TILE = "TOGGLE_TILE";


const initialState = {
    tiles: [
        { id: 0, color: 'red', hidden: 'hidden', flag: false },
        { id: 1, color: 'orange', hidden: 'hidden', flag: false },
        { id: 2, color: 'purple', hidden: 'hidden', flag: false },
        { id: 3, color: 'blue', hidden: 'hidden', flag: false },
        { id: 4, color: 'yellow', hidden: 'hidden', flag: false },
        { id: 5, color: 'red', hidden: 'hidden', flag: false },
        { id: 6, color: 'orange', hidden: 'hidden', flag: false },
        { id: 7, color: 'yellow', hidden: 'hidden', flag: false },
        { id: 8, color: 'black', hidden: 'hidden', flag: false },
        { id: 9, color: 'pink', hidden: 'hidden', flag: false },
        { id: 10, color: 'green', hidden: 'hidden', flag: false },
        { id: 11, color: 'green', hidden: 'hidden', flag: false },
        { id: 12, color: 'purple', hidden: 'hidden', flag: false },
        { id: 13, color: 'blue', hidden: 'hidden', flag: false },
        { id: 14, color: 'pink', hidden: 'hidden', flag: false },
        { id: 15, color: 'black', hidden: 'hidden', flag: false }
    ],
    clickedId:null,
    clickBeforeTimeout: false
}

function shuffleState() {

    initialState.tiles.sort(() => Math.random() - 0.5);

    for (let i = 0; i < initialState.tiles.length; i++) {
        initialState.tiles[i].id = i;
    }
}
shuffleState();

const arenaReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_TILE') {
        if (state.clickedId === null) {
            
            state.clickedId = action.id
            state.tiles[action.id].hidden = ''
            state.tiles[action.id].flag = true
            debugger
            return{...state,
                    tiles:state.tiles.map( (t) => {
                        if (t.id === action.id){
                            return{...t,hidden : '' }
                        } else return {...t}
                    })}
        } else { debugger
            if (state.tiles[state.clickedId].color == state.tiles[action.id].color) {
                return {
                    ...state,
                    tiles: state.tiles.map((t) => {
                        if (t.id === action.id) {
                            return { ...t, hidden: '', flag: true }
                        } else return { ...t }
                    }),
                    clickedId: null
                }
            } else { debugger
                    return {...state,
                    tiles:state.tiles.map( (t) => {
                        if (t.id === action.id  || t.id === state.clickedId){
                            return{...t,hidden : 'hidden' }
                        } else return {...t}
                    }),
                    clickedId:null}
            }
            
        }

        return {
            ...state,
            tiles: state.tiles.map(t => {
                if (t.id === action.id+1) {
                    return { ...t, hidden: '', flag: true }
                }
                return t;
            }),
            clickedId:action.id
        }
    } else return {...state};
}

export const toggleTileActionCreator = (id) => {
    return {type: TOGGLE_TILE, id}
}

export default arenaReducer;