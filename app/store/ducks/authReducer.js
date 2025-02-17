
import { authActionTypes } from "../../constant/index"
const initialAuthState = {
  isPending: false,
  user: undefined,
  error: null,
  notice: null,
  cart: [],
  itemInCart: [],
  message: null,
}
export const authReducer =
  (state = initialAuthState, action) => {
    switch (action.type) {
      case authActionTypes.Login: {
        return { ...state, isPending: !state.isPending };
      }

      case authActionTypes.LoginSuccess: {
        return { ...state, user: action.payload, isPending: !state.isPending };
      }

      case authActionTypes.CheckAuth:
        return {
          ...state,
          isPending: true,
        };
      case authActionTypes.activeAccount:
        return {
          ...state, isPending: !state.isPending
        }
      case authActionTypes.activeAccountSuccess:
        return {
          ...state, isPending: !state.isPending, notice: action.payload
        }
      case authActionTypes.activeAccountFailure:
        return {
          ...state, isPending: !state.isPending, error: action.payload
        }
      case authActionTypes.CheckAuthSucces:
        return {
          ...state,
          isPending: false,
          user: action.payload,
        };

      case authActionTypes.CheckAuthError:
        return {
          ...state,
          user: initialAuthState.user,
          error: action.payload,
          isPending: false,
        };

      case authActionTypes.Register: {
        return { ...state, isPending: !state.isPending };
      }

      case authActionTypes.RegisterSuccess: {
        return { ...state, user: action.payload.user, isPending: !state.isPending, notice: action.payload.msg };
      }
      case authActionTypes.refreshToken: {
        return { ...state, isPending: !state.isPending }
      }
      case authActionTypes.refreshTokenSuccessFul: {
        return { ...state, isPending: !state.isPending }
      }
      case authActionTypes.refreshTokenFailure: {
        return { ...state, isPending: !state.isPending, msg: action.payload }
      }
      case authActionTypes.LoadingcartSuccess: {
        return { ...state, user: action.payload.user, cart: action.payload.cart, itemInCart: action.payload.itemInCart, isPending: true }
      }
      case authActionTypes.Loadingcart: {
        return { ...state, isPending: !state.isPending }
      }


      case authActionTypes.Error: {
        return { ...state, error: action.payload, isPending: false };
      }

      case authActionTypes.DeleteError: {
        return { ...state, error: null };
      }
      case authActionTypes.ResetPassword: {
        return {
          ...state, isPending: !state.isPending
        }
      }
      case authActionTypes.ResetpasswordCorrectemail: {
        return {
          ...state, isPending: !state.isPending, message: action.payload.msg
        }
      }
      case authActionTypes.resetpasswordInCorectemail: {
        return {
          ...state, isPending: !state.isPending, error: action.payload.msg
        }
      }
      case authActionTypes.ChangeNewpassword: {
        return {
          ...state, isPending: !state.isPending
        }
      }
      case authActionTypes.ChangeNewpasswordSuccessful: {
        return {
          ...state, isPending: !state.isPending, message: action.payload.msg
        }
      }
      case authActionTypes.changeNewpasswordFailure: {
        return {
          ...state, isPending: !state.isPending, error: action.payload
        }
      }

      default:
        return state;
    }
  }


export const authActions = {
  login: (email, password, setSubmitting, history) => ({
    type: authActionTypes.Login,
    payload: {
      email, password, setSubmitting, history
    }
  }),
  loginSuccess: (payload) => ({ type: authActionTypes.LoginSuccess, payload }),
  registerUser: (newUser, setSubmitting, history) => ({
    type: authActionTypes.Register, payload: { newUser, setSubmitting, history }
  }),
  registerSuccess: (payload) => ({ type: authActionTypes.RegisterSuccess, payload }),
  activeAccount: (token) => ({
    type: authActionTypes.activeAccount, payload: { token }
  }),
  activeAccountSuccess: (payload) => ({ type: authActionTypes.activeAccountSuccess, payload }),
  activeAccountFailure: (payload) => ({ type: authActionTypes.activeAccountFailure, payload }),
  refreshToken: (refreshToken) => ({ type: authActionTypes.refreshToken, payload: { refreshToken } }),
  refreshTokenSuccessful: (payload) => ({ type: authActionTypes.refreshTokenSuccessFul, payload }),
  refreshTokenFailure: (payload) => ({ type: authActionTypes.refreshTokenFailure, payload }),
  logout: () => ({ type: authActionTypes.Logout }),
  checkAuth: (history) => ({ type: authActionTypes.CheckAuth, payload: { history } }),
  checkAuthSuccess: (payload) => ({ type: authActionTypes.CheckAuthSucces, payload }),
  checkAuthError: (payload) => ({ type: authActionTypes.CheckAuthError, payload }),
  pendingStatus: () => ({ type: authActionTypes.Pending }),
  requestUser: (payload) => ({ type: authActionTypes.UserRequested, payload }),
  error: (payload) => ({ type: authActionTypes.Error, payload }),
  deleteError: () => ({ type: authActionTypes.DeleteError }),
  resetPassword: (email, history) => ({
    type: authActionTypes.ResetPassword, payload: { email, history }
  }),
  // resetPassword:(email,history)=>({type:authActionTypes.resetPassword,payload:{email,history}}),
  resetPasswordCorrectemail: (payload) => ({ type: authActionTypes.ResetpasswordCorrectemail, payload }),
  resetPasswordInCorrectemail: (payload) => ({ type: authActionTypes.resetpasswordInCorectemail, payload }),
  changeNewpassword: (password, passwordConfirm, token, history) => ({ type: authActionTypes.ChangeNewpassword, payload: { password, passwordConfirm, token, history } }),
  changeNewpasswordSuccessful: (payload) => ({ type: authActionTypes.ChangeNewpasswordSuccessful, payload }),
  changeNewpasswordFailure: (payload) => ({ type: authActionTypes.ChangeNewpasswordFailure, payload }),
  loadingCart: () => ({ type: authActionTypes.Loadingcart }),
  loadingCartSuccess: (payload) => ({ type: authActionTypes.LoadingcartSuccess, payload })
}