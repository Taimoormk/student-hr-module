import * as types from '../constants';

const initial = {
	error: null,
	isLoading: true,
	isSuccess: false
};

export default function(state = initial, action) {
	switch (action.type) {
		case types.SAVE_STUDENT_FORM_DATA_ATTEMPT:
			return { ...state, isLoading: true };
		case types.SAVE_STUDENT_FORM_DATA_SUCCESS:
			return {
				...state,
				isSuccess: true,
				isLoading: false,
				error: null
			};
		case types.SAVE_STUDENT_FORM_DATA_FAIL:
			return { ...state, isLoading: false, error: action.payload };
		case types.NOTIFICATION_RESET:
			return { ...initial };
		default:
			return state;
	}
}
