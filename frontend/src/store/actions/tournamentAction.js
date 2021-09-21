import Axios from '../../axios';

export const addTournamentData = (data) => {
    return { type: 'TOURNAMENT_ADD_DATA', payload: data };
};

export const addTournamentsData = (data) => {
    return { type: 'TOURNAMENTS_ADD_DATA', payload: data };
};



export const getTournamentByID = (id) => (dispatch) => {
    // prepare data
    const url = `/tournament/${id}/`;
    const auth = 'Bearer ' + localStorage.userToken;
    const headers = { headers: { Authorization: auth } };

    Axios.get(url, headers)
        .then((response) => {
        console.log('Tournament data retrieved');
        dispatch(addTournamentData(response.data))
    })
    .catch((error) => {
        console.log('getTournamentByID Error', error.response.data);
    });
};

export const getTournaments = () => (dispatch) => {
    // prepare data
    const url = `/tournament/list/`;

    Axios.get(url)
        .then((response) => {
        console.log('Tournaments data retrieved');
        dispatch(addTournamentsData(response.data))
    })
    .catch((error) => {
        console.log('getTournaments Error', error.response.data);
    });
};