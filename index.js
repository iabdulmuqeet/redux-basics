const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const initialState = {
	noOfCakes: 10,
	noOfIcecreams: 20,
};

function buyCake() {
	return {
		type: BUY_CAKE,
		info: 'First redux action',
	};
}

function buyIcecream() {
	return {
		type: BUY_ICECREAM,
		info: 'First redux action',
	};
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				noOfCakes: state.noOfCakes - 1,
			};

		case BUY_ICECREAM:
			return {
				...state,
				noOfIcecreams: state.noOfIcecreams - 1,
			};

		default:
			return state;
	}
};

const store = createStore(reducer);

console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() =>
	console.log('Updated state:', store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
