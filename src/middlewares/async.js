export default ({ dispatch }) => next => action => {
    // check to see if the action has a promise on its payload property
    // if it does, then wait for it to resolve
    // and then create a new action with the data and dispatch it
    // if it doesn't, then send the action on to the next middleware
    debugger
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};