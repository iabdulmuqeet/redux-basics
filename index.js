const { createStore, combineReducers } = require('redux');

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// const initialState = {
// 	noOfCakes: 10,
// 	noOfIceCreams: 20,
// };

const initialCakeState = {
	noOfCakes: 10,
};

const initialIceCreamState = {
	noOfIceCreams: 10,
};

function buyCake() {
	return {
		type: BUY_CAKE,
		info: 'First redux action',
	};
}

function buyIceCxream() {
	return {
		type: BUY_ICECREAM,
		info: 'First redux action',
	};
}

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case BUY_CAKE:
// 			return {
// 				...state,
// 				noOfCakes: state.noOfCakes - 1,
// 			};

// 		case BUY_ICECREAM:
// 			return {
// 				...state,
// 				noOfIceCreams: state.noOfICecreams - 1,
// 			};

// 		default:
// 			return state;
// 	}
// };

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				noOfCakes: state.noOfCakes - 1,
			};

		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				noOfIceCreams: state.noOfIceCreams - 1,
			};

		default:
			return state;
	}
};

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

// const store = createStore(reducer);
const store = createStore(rootReducer);

console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() =>
	console.log('Updated state:', store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCxream());
store.dispatch(buyIceCxream());

unsubscribe();
