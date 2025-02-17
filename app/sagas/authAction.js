import { takeEvery, put, call } from 'redux-saga/effects';
import { login, register, activeAccount, GenNewToken, loadingCart, resetPassword, changeNewpassword } from "../crud/auth.crud";
import { authActions } from "../store/ducks/authReducer";
import { authActionTypes } from "../constant/index";
function* fetchLogin({ payload }) {
  const {
    email, password, setSubmitting, history

  } = payload;

  try {
    const result = yield call(login, { email, password });
    yield put(authActions.loginSuccess(result.data.user));
    yield setSubmitting(false);
    // yield setStorage('token', result.data.token, result.data.expToken);
    // yield setStorage("refreshtoken", result.data.refreshToken, result.data.expRefreshToken)
    //  const response=yield call(loadingCart)

    //  yield put (authActions.loadingCartSuccess(response.data))


  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(authActions.error(error));
    yield setSubmitting(false);
  }
}
function* fetchRegister({ payload }) {
  const { newUser, setSubmitting, history } = payload;

  try {

    console.log(newUser, history);
    const dataNewUser = yield call(register, newUser);
    console.log(dataNewUser);
    yield put(authActions.registerSuccess(dataNewUser.data));
    // yield setStorage('token', dataNewUser.data.token);
    // yield setStorage('refreshToken', dataNewUser.data.refreshtoken);
    yield history.push("/confirm-account");
  }
  catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(authActions.error(error));
    yield setSubmitting(false);
  }
}
function* fetchactiveAccount({ payload }) {
  const { token } = payload
  try {
    const response = yield call(activeAccount, token)
    yield put(authActions.activeAccountSuccess(response.data.msg))
  } catch (error) {
    const err = error.response ? error.response.data.msg : error.stack
    yield put(authActions.activeAccountFailure(err))
  }

}
function* fetchRefreshToken({ payload }) {
  const { refreshToken } = payload;

  try {
    const result = yield call(GenNewToken, { refreshToken })
    yield put(authActions.refreshTokenSuccessful(result))
  } catch (error) {
    const err = error.response ? error.response.data.msg : error.stack
    yield put(authActions.error(err));
  }
}
function* loadingcart({ payload }) {
  try {
    const response = yield call(loadingCart)
    console.log(response.data);
    yield put(authActions.loadingCartSuccess(response.data))
  } catch (error) {
    const err = error.response ? error.response.data.msg : error.stack
    yield put(authActions.error(err));
  }
}
function* forgotpassword({ payload }) {
  const { email, history } = payload
  console.log("email", email);
  try {
    const response = yield call(resetPassword, { email })
    console.log(response);
    yield put(authActions.resetPasswordCorrectemail(response.data))
    if (response.status === 200) {
      yield history.push("/users/login/forgotpassword/confirm")
    }
  } catch (error) {
    const err = error.response ? error.response.data.msg : error.stack
    yield put(authActions.resetPasswordInCorrectemail(err));
  }
}
function* changeNewPassword({ payload }) {
  const { password, passwordConfirm, token, history } = payload
  try {
    const response = yield call(changeNewpassword, { password, passwordConfirm, token })
    yield put(authActions.changeNewpasswordSuccessful(response.data))
    if (response.status == 200) {
      yield history.push("/users/login/change-password")
    }
  } catch (error) {
    const err = error.response ? error.response.data.msg : error.stack
    yield put(authActions.changeNewpasswordFailure(err));
  }
}
function* authSagas() {
  yield takeEvery(authActionTypes.Login, fetchLogin);
  yield takeEvery(authActionTypes.Register, fetchRegister);
  yield takeEvery(authActionTypes.activeAccount, fetchactiveAccount)
  yield takeEvery(authActionTypes.refreshToken, fetchRefreshToken)
  yield takeEvery(authActionTypes.Loadingcart, loadingcart)
  yield takeEvery(authActionTypes.ResetPassword, forgotpassword)
  yield takeEvery(authActionTypes.ChangeNewpassword, changeNewPassword)
}

export default authSagas;