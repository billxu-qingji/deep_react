let newStore = applyMiddleware(mid1,mid2,mid3)(createStore)(reducer, null);

export default function applyMiddleware(...middlewares){
  return (next) => {
    return (reducer, initialState) => {
      let store = next(reducer, initialState);
      let dispatch = store.dispatch;
      let chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };

      chain = middlewares.map(middleware => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispath);

      return {
        ...store,
        dispatch,
      }
    } 
  }
}

loggerMiddlerware = store => {
  return next => {
    return action => {
      console.log('dispatch', action);
      next(action);
      console.log('finish', action);
    }
  }
}