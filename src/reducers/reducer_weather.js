// don't mutate state, should return a new state 
//return state.push(action.payload.data); // open can of worms in redux, we only update state by setState

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	
	switch (action.type) {
		case FETCH_WEATHER:
			//return state.concat([action.payload.data]); // return a new version of state
			//EX6 version, same as above
			return [ action.payload.data, ...state];
	}
	return state
} 
