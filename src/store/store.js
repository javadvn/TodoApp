import { createStore } from 'redux';
import rootReducer from '../components/rootReducer';

const store = createStore(rootReducer);

export default store;