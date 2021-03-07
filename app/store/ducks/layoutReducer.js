
var oldstate = {
  portrait: true,
  width: 0,
  height: 0
}


export default function layoutReducer(state = oldstate, action) {

  switch (action.type) {
    case "LAYOUTCHANGE":
      return {
        ...state, width: action.payload.width,
        height: action.payload.height,
        portrait: action.payload.portrait
      }



    default:
      return state
  }


}
export const layoutActions = {

}
