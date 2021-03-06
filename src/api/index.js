import phones from './mockPhones';
import categories from './mockCategories';
import * as R from "ramda";

export const fetchPhones = async () => {
	return new Promise((resolve) => {
			resolve(phones);
	})
};

export const fetchCatogories = async () => {
	return new Promise((resolve) => {
		resolve(categories);
	})
};

export const loadMorePhones = async ({offset}) => {
	return new Promise((resolve) => {
		resolve(phones);
	})
};

export const fetchPhoneById = async id => {
	return new Promise((resolve) => {
		const phone = R.find(R.propEq('id', id), phones);
		resolve(phone);
	})
};