import  {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer"

const composeEnhancer = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;
// esta linea sirve para conectar el app con la extension redux devtools
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // para hacer peticiones a una API/servidor
    
    )

export default store;