import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middlewares=[logger,thunk];

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
        )
    );

// if (process.env.NODE_ENV==='development'){
//     middlewares.push(logger);
// }

// const store = createStore(
//     rootReducer,
//     applyMiddleware(...middlewares)
//     );

const persistor=persistStore(store);

export {store,persistor}