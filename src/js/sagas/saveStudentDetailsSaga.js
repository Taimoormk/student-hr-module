import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* saveStudentDetailsSaga(action) {
	const formData = action.payload;
	yield put(actions.saveStudentDetailsAttempt());
	yield call(delay, 1000);
	try {
		yield call(api.receiveStudentRecord, formData);
		yield put(actions.saveStudentDetailsSuccess(formData));
	} catch (error) {
		yield put(actions.saveStudentDetailsFail(error));
	}
}
