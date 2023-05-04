const initialState = {
  convo: [
    {
      sender: "me",
      text: "Hi Henry!!",
      time: "9h ago",
    },
    {
      sender: "me",
      text: "How can I help you today?",
      time: "9h ago",
    },
    {
      sender: {
        name: "Henry",
        photoUrl: "/images/henry.png",
      },
      text: "Hey Bill, nice to meet you!",
      time: "9h ago",
    },
    {
      sender: {
        name: "Henry",
        photoUrl: "/images/henry.png",
      },
      text: "Hope you're doing fine.",
      time: "9h ago",
    },
    {
      sender: "me",
      text: "I'm good thanks for asking.",
      time: "9h ago",
    },
    {
      sender: {
        name: "Henry",
        photoUrl: "/images/henry.png",
      },
      text: "I am interested to know more about your prices and services you offer.",
      time: "9h ago",
    },
    {
      sender: "me",
      text: "Sure, please check below link to find more useful information",
      time: "9h ago",
    },
    {
      sender: {
        name: "Henry",
        photoUrl: "/images/henry.png",
      },
      text: "Awesome, will get in touch if there's anything unclear. Thanks for now!",
      time: "9h ago",
    },
    {
      sender: {
        name: "Henry",
        photoUrl: "/images/henry.png",
      },
      text: "have a great day!",
      time: "9h ago",
    },
    {
      sender: "me",
      text: "Thanks buddy, you too as well",
      time: "9h ago",
    },
  ],
  userPhoto: "/images/henry.png",
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, convo: [...state.convo, action.payload] };
    case "UPDATE_PHOTO":
      console.log(action.payload);
      return { ...state, userPhoto: action.payload.userPhoto };
    default:
      return state;
  }
}
