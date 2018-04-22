import * as types from '../constants';

export function fetchDataAttempt() {
  return {
    type: types.FETCH_DATA_ATTEMPT
  };
}

export function fetchDataSuccess(data) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDataFail(error) {
  return {
    type: types.FETCH_DATA_FAIL,
    payload: error
  };
}

export function fetchData(query) {
  return {
    type: types.FETCH_DATA,
    payload: {
      query
    }
  };
}

export function fetchStudentsHRData() {
  return {
    type: types.FETCH_STUDENT_HR_DATA
  };
}

export function fetchStudentsHRDataAttempt() {
  return {
    type: types.FETCH_STUDENT_HR_DATA_ATTEMPT
  };
}

export function fetchStudentsHRDataSuccess(data) {
  return {
    type: types.FETCH_STUDENT_HR_DATA_SUCCESS,
    payload: data
  };
}

export function fetchStudentsHRDataFail(error) {
  return {
    type: types.FETCH_STUDENT_HR_DATA_FAIL,
    payload: error
  };
}

export function saveStudentDetailsAction(formData) {
  return {
    type: types.SAVE_STUDENT_FORM_DATA,
    payload: formData
  };
}

export function saveStudentDetailsAttempt() {
  return {
    type: types.SAVE_STUDENT_FORM_DATA_ATTEMPT
  };
}

export function saveStudentDetailsSuccess(formData) {
  return {
    type: types.SAVE_STUDENT_FORM_DATA_SUCCESS,
    payload: formData
  };
}

export function saveStudentDetailsFail(error) {
  return {
    type: types.SAVE_STUDENT_FORM_DATA_FAIL,
    payload: error
  };
}

export function notificationResetAction(reset) {
  return {
    type: types.NOTIFICATION_RESET,
    payload: reset
  };
}
