import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from '../../utils/request';
import { Locations, stimulateLocationResp } from './constants'; 
import {
  fetchLocationSuccess,
  fetchLocationError,
} from './actions';

function* fetchLocations() {
  try {
    const res = yield call(getRequest, '/locations');
    yield put(fetchLocationSuccess(res));
  } catch (err) {
    console.log('err', err);
    yield put(fetchLocationError(err));

    // store stimulate resp in store
    yield put(fetchLocationSuccess(stimulateLocationResp.data));
  }
}

export default function* mainSaga() {
  yield takeLatest(Locations.fetchLocations, fetchLocations);
}