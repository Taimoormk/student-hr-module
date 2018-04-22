import * as types from '../constants';

const initial = {
	isLoading: false,
	error: null,
	studentData: []
};

export default function(state = initial, action) {
	let studentData;

	switch (action.type) {
		case types.FETCH_STUDENT_HR_DATA_ATTEMPT:
			return { ...state, isLoading: true };
		case types.FETCH_STUDENT_HR_DATA_SUCCESS:
			studentData = action.payload;
			return { ...state, studentData, isLoading: false, error: null };
		case types.FETCH_STUDENT_HR_DATA_FAIL:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
}
