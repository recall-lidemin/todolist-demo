import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* fetchList() {
  try {
    const res = yield axios.get('http://localhost:3000/list')
    const action = initListAction(res.data)
    yield put(action)
  } catch (error) {
    // do null
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, fetchList)
}

export default mySaga
