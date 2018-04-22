import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* studentHRDataSaga() {
	yield put(actions.fetchStudentsHRDataAttempt());
	yield call(delay, 1000);
	try {
		const studentData = yield call(api.studentHrData);
		yield put(actions.fetchStudentsHRDataSuccess(studentData));
	} catch (error) {
		yield put(actions.fetchStudentsHRDataFail(error));
	}
}
