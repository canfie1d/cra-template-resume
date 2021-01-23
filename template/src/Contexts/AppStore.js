import { createContext, useReducer } from 'react';
import Reducer from './AppReducer';
import { mainData } from '../Data/mainData';
import { resumeData } from '../Data/resumeData';
import { testimonialData } from '../Data/testimonialData';
import { portfolioData } from '../Data/portfolioData';

const initialState = {
  main: mainData,
  resume: resumeData,
  testimonials: testimonialData,
  portfolio: portfolioData,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
