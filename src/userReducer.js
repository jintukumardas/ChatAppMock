const initialState = [
  {
    userPhoto: "/avatar.png",
  },
];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PHOTO":
      return [...state, action.payload];
    default:
      return state;
  }
}
