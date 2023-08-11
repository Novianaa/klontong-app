const initialState = {
  loading: false,
  data: {},
  isLogin: false,
}

const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true }
    case "LOGIN_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload, isLogin: false }
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null, isLogin: true, }
    default:
      return state
  }
}

export default Auth