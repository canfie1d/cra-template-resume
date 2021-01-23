const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PORTFOLIO_DATA':
      return {
        ...state,
        portfolio: action.data,
      };
    case 'SET_RESUME_DATA':
      return {
        ...state,
        resume: action.data,
      };
    case 'SET_MAIN_DATA':
      return {
        ...state,
        main: action.data,
      };
    case 'SET_TESTIMONIAL_DATA':
      return {
        ...state,
        testimonials: action.data,
      };
    default:
      return state;
  }
};

export default Reducer;
