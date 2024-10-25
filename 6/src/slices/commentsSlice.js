import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      // BEGIN (write your solution here)
      state.ids = payload.map(comment => comment.id); 
      state.entities = payload.reduce((acc, comment) => {
        acc[comment.id] = comment; 
        return acc;
      }, {});
      // END
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;
