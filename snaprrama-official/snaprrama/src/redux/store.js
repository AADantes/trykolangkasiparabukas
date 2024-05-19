import reducers from './Reducers';
import { createStore} from 'redux';

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION__()
);




export default store;