import { useSelector, useDispatch } from "react-redux"
import { deleteProduct, editProduct } from "../actions/ProductActions";
import EditingProduct from "./EditingProduct";
import { useContext, useState, useCallback } from 'react';



const ProductList = () => {
    const [edit, setEdit] = useState(false)
    const [idE, setIdE] = useState(null)
    

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const clickDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }
    const editProdcut = (id) => {
        setEdit(!edit)
        setIdE(id)
    }

    
    

    return (
            <div>
                <h1>Каталог товаров</h1>
                <div className="list ">
                    {products.map(product => (
                        <div className="item" key={product.id}>
                            <h4>Название товара: {product.name}</h4>
                            <h4>Описание товара: {product.disc}</h4>
                            <h4>Цена товара: {product.price}$</h4>
                            <h4>Доступность товара: {product.avaliabe ? 'доступен' : 'не доступен'}</h4>
                            <button
                                className="buttonDelete"
                                onClick={() => { clickDeleteProduct(product.id) }}>
                                Удалить продукт
                            </button>
                            <button
                                className="buttonEdit"
                                onClick={() => { editProdcut(product.id) }}>
                                Изменить продукт
                            </button>
                            {(edit && idE === product.id) &&  <EditingProduct id={product.id} />}
                        </div>
                    ))}
                </div>


            </div>
    )
}

export default ProductList;
