export const tournament = (
    state = {
    }, action) => {
        switch (action.type) {
        case 'TOURNAMENT_ADD_DATA':
            return {
            ...state,
                ...action.payload
            };
        default:
            return state;
        }
};

export const tournaments = (
    state = {
    }, action) => {
        switch (action.type) {
        case 'TOURNAMENTS_ADD_DATA':
            return {
            ...state,
                data: action.payload
            };
        default:
            return state;
        }
};