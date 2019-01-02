import {
	fetchPhones as fetchPhonesApi,
	loadMorePhones as loadMorePhonesApi
} from '../api';
import {getRenderedPhonesLenght} from "../selectors";

export const FETCH_PHONES_START = 'FETCH_PHONES_START';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

export const LOAD_MORE_PHONES_START = 'LOAD_MORE_PHONES_START';
export const LOAD_MORE_PHONES_SUCCESS = 'LOAD_MORE_PHONES_SUCCESS';
export const LOAD_MORE_PHONES_FAILURE = 'LOAD_MORE_PHONES_FAILURE';


export const fetchPhones = () => async dispatch => {
	dispatch({type: FETCH_PHONES_START});

	try {
		const phones = await fetchPhonesApi();
		dispatch({
			type: FETCH_PHONES_SUCCESS,
			payload: phones,
		})
	} catch (err) {
		dispatch({
			type: FETCH_PHONES_FAILURE,
			payload: err,
			error: true
		})
	}
};

export const loadMorePhones = () => async (dispatch, getState) => {
	const offset = getRenderedPhonesLenght(getState());

	dispatch({type: LOAD_MORE_PHONES_START});

	try {
		const phones = await loadMorePhonesApi({offset});
		dispatch({
			type: LOAD_MORE_PHONES_SUCCESS,
			payload: phones,
		})
	} catch (err) {
		dispatch({
			type: LOAD_MORE_PHONES_FAILURE,
			payload: err,
			error: true
		})
	}
};