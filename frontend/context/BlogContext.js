import { createContext, useReducer } from "react";

export const BlogContext = createContext(null);

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, {
    blogs: [],
  });

  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
