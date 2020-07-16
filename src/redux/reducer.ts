import { Action } from 'redux';

type ReduxState = {
	name: string;
	num: number;
};

const initData: ReduxState = {
	name: '1234214',
	num: 12,
};

const calculate = (state: ReduxState = initData, action: Action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { num: state.num + 1 };
		case 'REDUCE':
			return { num: state.num - 1 };
		default:
			return state;
	}
};

export { calculate, initData };
