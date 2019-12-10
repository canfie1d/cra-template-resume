import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../Reducers';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
}

export default function() {
  return createStore(reducers, applyMiddleware(...middleware));
}
