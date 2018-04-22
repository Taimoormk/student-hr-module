import { takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchDataSaga from './fetchDataSaga';
import studentHRDataSaga from './studentHRDataSaga';
import saveStudentDetailsSaga from './saveStudentDetailsSaga';

function* watchFetchData() {
	yield takeLatest(types.FETCH_DATA, fetchDataSaga);
}

function* watchStudentHRData() {
	yield takeLatest(types.FETCH_STUDENT_HR_DATA, studentHRDataSaga);
}

function* watchSaveStudentDetails() {
	yield takeLatest(types.SAVE_STUDENT_FORM_DATA, saveStudentDetailsSaga);
}

export default function* rootSaga() {
	yield all([
		fork(watchFetchData),
		fork(watchStudentHRData),
		fork(watchSaveStudentDetails)
	]);
}
