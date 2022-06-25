const initialState = {
    tabledata:[],
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) { 
        case 'TABLEGET': 
            return ({ ...state, tabledata: action.payload });               
        default: return state;
    }
}

export default dataReducer;