const loggerMiddleWare = (store) => (next) => (action) => {
    console.log('Действие ', action);
    console.log('Состояние до', store.getState());
    const result = next(action)
    console.log("СОстояние после: ", store.getState())
    return result;
}
export default loggerMiddleWare;