import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, action) {
      const obj = {
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          topicId: action.payload.topicId,
          cardIds: action.payload.cardIds
        }
      };
      Object.assign(state.quizzes, obj);
    }
  }
});

export const assignQuiz = (payload) => {
  return (dispatch) => {
    dispatch({ type: "quizzes/addQuiz", payload: payload });
    dispatch({
      type: "topics/addQuizToTopic",
      payload: { topicId: payload.topicId, quizId: payload.id }
    });
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

const { reducer } = quizzesSlice;
export default reducer;
