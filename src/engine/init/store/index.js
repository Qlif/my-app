//Core
import { createStore, applyMiddleware, compose } from "redux";

//Instruments
import { dev, middleware } from "../middlewares";
import { rootReduser } from "../rootReducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const store = createStore(
    rootReduser(),
    composeEnhancers(applyMiddleware(...middleware)),
);

export {store};
