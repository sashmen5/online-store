import {fetchPhones as fetchPhonesApi} from '../api';

export const FETCH_PHONES_START = 'FETCH_PHONES_START';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

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