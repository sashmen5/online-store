import {ADD_PHONE_TO_BASKET} from "../actions";
import * as R from "ramda";

const initialState = [];

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case ADD_PHONE_TO_BASKET:
			return R.append(payload, state);
		default:
			return state;
	}
}
