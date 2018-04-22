import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';
import studentDataReducer from './studentDataReducer';
import saveFormDataReducer from './saveFormDataReducer';

const rootReducer = combineReducers({
	data: fetchDataReducer,
	studentData: studentDataReducer,
	saveFormData: saveFormDataReducer
});

export default rootReducer;
