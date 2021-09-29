export type ActionType =
  | "INCREASE_LIKE"
  | "DECREASE_LIKE"
  | "INCREASE_LOVE"
  | "DECREASE_LOVE"
  | "RESET";

export type State = {
  isLiked: boolean;
  likes: number;
  isLoved: boolean;
  loved: number;
};

export const INITIAL_STATE: State = {
  isLiked: false,
  likes: 0,
  isLoved: false,
  loved: 0,
};

export const reducer = (state: State, action: { type: ActionType }) => {
  switch (action.type) {
    case "INCREASE_LIKE": {
      return {
        ...state,
        likes: state.isLiked ? state.likes : state.likes + 1,
        isLiked: true,
      };
    }
    case "DECREASE_LIKE": {
      return {
        ...state,
        likes: state.likes - 1,
        isLiked: false,
      };
    }
    case "INCREASE_LOVE": {
      return {
        ...state,
        loved: state.isLoved ? state.loved : state.loved + 1,
        isLoved: true,
      };
    }
    case "DECREASE_LOVE": {
      return {
        ...state,
        loved: state.loved - 1,
        isLoved: false,
      };
    }
    case "RESET": {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
