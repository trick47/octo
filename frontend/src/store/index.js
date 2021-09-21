import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { user } from './reducers/userReducer'
import { tournament, tournaments } from './reducers/tournamentReducer'

const middlewares = [thunk];
const reducers = combineReducers({
    user,
    tournament,
    tournaments
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares),
    ));

export default store;
