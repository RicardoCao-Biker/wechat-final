import { createStore } from 'redux';

const initialState = {
  username: '',
  users:[]
}

const nameReducer = function(state = initialState, action) {
	let username = state.username;
	let users = state.users;

	switch(action.type) {
	    case 'USER_NAME':
	    	state.username = action.username;
	    	return state;
	    	break;
	    case 'ADD_USER':
	    	let newuser = {};
	    	newuser.username = action.username;
	    	newuser.usercheck = action.usercheck;
	    	users.push(newuser);
	    	return state;
	    	break;
	    default:
	    	return state;
  	}
}


const store = createStore(nameReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;
  

