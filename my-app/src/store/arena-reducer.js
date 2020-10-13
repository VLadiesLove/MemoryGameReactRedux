const TOGGLE_TILE = "TOGGLE_TILE"
const CLOSE_TILES = 'CLOSE_TILES'


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
    clickedId: null,
    clickedSecondId:null,
    isClickBeforeTimeout: false
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
        if(state.isClickBeforeTimeout === true) return {...state}
        if (state.tiles[action.id].flag) {return{ ...state, clickedId:null } }
        if (state.clickedId === null) {
            state.clickedId = action.id
            return {
                ...state,
                tiles: state.tiles.map((t) => {
                    if (t.id === action.id) {
                        return { ...t, hidden: '' }
                    } else return { ...t }
                })
            }
        } else {
            if (state.tiles[state.clickedId].color === state.tiles[action.id].color && state.clickedId !== action.id) {
                return {
                    ...state,
                    tiles: state.tiles.map((t) => {
                        if (t.id === action.id) {
                            return { ...t, hidden: '', flag: true }
                        } else return { ...t }
                    }),
                    clickedId: null
                }
            } else {
                return {
                    ...state,
                    isClickBeforeTimeout: true,
                    tiles: state.tiles.map((t) => {
                        if (t.id === action.id) {
                            return { ...t, hidden: '', flag: false }
                        } else return { ...t }
                    }) 
                    , clickedSecondId:action.id
                }

            }
        }
    }
    else if (action.type === 'CLOSE_TILES') {
        return {
            ...state,
            isClickBeforeTimeout: false,
            tiles: state.tiles.map((t) => {
                if (t.id === state.clickedSecondId || t.id === state.clickedId) {
                    return { ...t, hidden: 'hidden', flag:false}
                } else return { ...t }
            }),
            clickedId: null,
            clickedSecondId:null
        }
    } else return { ...state }
}

export const toggleTileActionCreator = (id) => {
    return { type: TOGGLE_TILE, id }
}

export const closeTilesActionCreator = (id) => {
    return { type: CLOSE_TILES, id }
}

export const toggleTileThunkCreator = () => (dispatch) => {
     setTimeout( () => dispatch(closeTilesActionCreator()), 600)
}

export default arenaReducer;