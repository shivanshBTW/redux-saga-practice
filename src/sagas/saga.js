import {call, put, takeLatest} from 'redux-saga/effects'

let fetchData = async () => {
    let URL = 'https://source.unsplash.com/random/100x100';
    const data = await fetch(URL);
    // console.log(data);
    return data;
};

function* fetchAPI() {
    let URL = 'http://api.giphy.com/v1/gifs/search?q=cars&api_key=NJPzfZU7LdWucjCEcvFn4qa7AunnpTJE&limit=1';
    const responseBody = yield call(fetchData);
    // console.log(responseBody);
    yield put({type: "FETCH_IT_ASYNC", value: responseBody.url});
}

export default function* watchFetchGIF() {
    yield takeLatest('FETCH_IT', fetchAPI);
}

