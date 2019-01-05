import {
	fetchPhones as fetchPhonesApi,
	fetchCatogories as fetchCategoriesApi,
	loadMorePhones as loadMorePhonesApi,
	fetchPhoneById as fetchPhoneByIdApi
} from '../api';
import {getRenderedPhonesLenght} from "../selectors";


//TODO: separate file to action types
export const FETCH_PHONES_START = 'FETCH_PHONES_START';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const LOAD_MORE_PHONES_START = 'LOAD_MORE_PHONES_START';
export const LOAD_MORE_PHONES_SUCCESS = 'LOAD_MORE_PHONES_SUCCESS';
export const LOAD_MORE_PHONES_FAILURE = 'LOAD_MORE_PHONES_FAILURE';

export const FETCH_PHONE_BY_ID_START = 'FETCH_PHONE_BY_ID_START';
export const FETCH_PHONE_BY_ID_SUCCESS = 'FETCH_PHONE_BY_ID_SUCCESS';
export const FETCH_PHONE_BY_ID_FAILURE = 'FETCH_PHONE_BY_ID_FAILURE';

export const ADD_PHONE_TO_BASKET = 'ADD_PHONE_TO_BASKET';
export const SEARCH_PHONE = 'SEARCH_PHONE';

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

export const fetchCategories = () => async dispatch => {
	dispatch({type: FETCH_CATEGORIES_START});

	try {
		const phones = await fetchCategoriesApi();
		dispatch({
			type: FETCH_CATEGORIES_SUCCESS,
			payload: phones,
		})
	} catch (err) {
		dispatch({
			type: FETCH_CATEGORIES_FAILURE,
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

export const fetchPhoneById = id => async dispatch => {
	dispatch({type: FETCH_PHONE_BY_ID_START});

	try {
		const phone = await fetchPhoneByIdApi(id);
		dispatch({
			type: FETCH_PHONE_BY_ID_SUCCESS,
			payload: phone,
		})
	} catch (err) {
		dispatch({
			type: FETCH_PHONE_BY_ID_FAILURE,
			payload: err,
			error: true
		})
	}
};

export const addPhoneToBasket = id => dispatch => {
	dispatch({
		type: ADD_PHONE_TO_BASKET,
		payload: id
	})
};

export const searchPhone = text => dispatch => {
	dispatch({
		type: SEARCH_PHONE,
		payload: text
	})
};