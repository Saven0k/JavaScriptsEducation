export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const addProduct = (name, disc, price, avaliabe) => ({
    type: ADD_PRODUCT,
    payload: { name, disc, price, avaliabe },
})
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: { id },
})
export const editProduct = (id, name, disc, price, avaliabe) => ({
    type: EDIT_PRODUCT,
    payload: { id, name, disc, price, avaliabe },
})
