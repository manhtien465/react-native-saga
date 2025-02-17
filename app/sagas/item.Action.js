import { takeEvery, put, call } from 'redux-saga/effects';
import { itemActions } from "../store/ducks/itemReducer";
import { getdata, addItem, loadingTotalInformation, updateItem, addtoCart, removeToCart, addImage, updateView, checkout, deleteItem } from "../crud/item.crud";
import { loadingCart } from "../crud/auth.crud";
import { itemActionTypes } from '../constant/index';
import { authActions } from '../store/ducks/authReducer';
function* featchItem({ payload }) {
    const { page, sortBy, shopId, name } = payload
    console.log(page);
    try {
        let url = "";
        let null1 = true;
        !page ? url = "?page=1" : url = `?page=${page}`
        sortBy ? url = url + `&sort=${sortBy}` : url = url + `&sort=_id`
        // order ? url = url + `&order=${order}` : url = url + `&order=_ASC`
        // let shopId = getStorage("shopId")
        // shopId ? url = url + `&shopId=${shopId}` : null1 = true
        // name ? url = url + `&name${name}` : null1 = true
        const result = yield call(getdata, { url })
        yield put(itemActions.loadingsuccess(result.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put(itemActions.error(error));
    }
}
function* additem(payload) {
    const { name, price, quantity, description, image } = payload.payload

    try {
        const result = yield call(addItem, { name, price, quantity, description, image })
        console.log(result);
        yield put(itemActions.uploaditemsuccess(result.data))

    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put(itemActions.error(error));
        console.log(error);

    }
}
function* loadingTotalInfor(payload) {
    const { day, month, year } = payload.payload

    try {
        const result = yield call(loadingTotalInformation, { day, month, year })

        yield put(itemActions.loadingInforSuccessfull(result.data))

    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}
function* updateitem({ payload }) {
    const { id, name, price, quantity, description, history } = payload;
    try {
        const result = yield call(updateItem, { id, name, price, quantity, description })
        console.log(result);
        yield put(itemActions.updateItemSuccesfull(result.data))
        history.push("/dashboard/item")
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}
function* addtocart(payload) {
    const { id } = payload.payload

    //     const accessToken = getStorage('token');
    //    console.log(accessToken);

    try {
        // if(accessToken==="" || accessToken===null || accessToken ===undefined){
        //     yield  history.push("/users/login")
        // }else{

        const response = yield call(addtoCart, { id })
        yield put(itemActions.addtocartSuccessFul(response.data))
        const res = yield call(loadingCart)

        yield put(authActions.loadingCartSuccess(res.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        // if(accessToken==="" || accessToken===null || accessToken ===undefined){
        //     yield  history.push("/users/login")
        // }
        yield put(itemActions.error(error));
    }
}
function* removetocart(payload) {
    const { id } = payload.payload
    console.log(id);
    try {
        const response = yield call(removeToCart, { id })
        yield put(itemActions.removeTocartSuccessful(response.data))
        const res = yield call(loadingCart)

        yield put(authActions.loadingCartSuccess(res.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}
function* addImages(payload) {
    const formData = payload.payload
    try {
        const response = yield call(addImage, formData)
        console.log(response);
        yield put(itemActions.addImage(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}

function* updateview(payload) {
    const id = payload.payload
    try {
        const response = yield call(updateView, id)
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error));
    }
}

function* checkOut(payload) {
    const { phone, address, id } = payload.payload
    try {
        const response = yield call(checkout, { phone, address, id })
        yield put(itemActions.checkoutSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error))
    }
}
function* deleleitem({ payload }) {
    const { iditem } = payload
    try {
        const response = yield call(deleteItem, { iditem })
        yield put(itemActions.deleteitemSuccesful(response.data))

    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error))
    }
}

function* itemAction() {
    yield takeEvery(itemActionTypes.loadingitem, featchItem)
    yield takeEvery(itemActionTypes.uploadItem, additem)
    yield takeEvery(itemActionTypes.loadTotal, loadingTotalInfor)
    yield takeEvery(itemActionTypes.updateItem, updateitem)
    yield takeEvery(itemActionTypes.addtoCart, addtocart)
    yield takeEvery(itemActionTypes.addImage, addImages)
    yield takeEvery(itemActionTypes.removeTocart, removetocart)
    yield takeEvery(itemActionTypes.updateView, updateview)
    yield takeEvery(itemActionTypes.checkout, checkOut)
    yield takeEvery(itemActionTypes.deleteItem, deleleitem)
}
export default itemAction