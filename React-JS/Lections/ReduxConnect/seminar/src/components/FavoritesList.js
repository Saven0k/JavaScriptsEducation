import { useSelector, useDispatch } from "react-redux"
import { deleteProduct } from "../actions/ProductActions";

const FavoritesList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const clickDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <div className="list">
            <h1>Избранные товары</h1>
            <ul>
                {products.map(product => (
                    <li
                        key={product.id}
                        onClick={() => { clickDeleteProduct(product.id) }}
                    >
                        <h4>Название товара: {product.name}</h4>
                        <h4>Описание товара: {product.disc}</h4>
                        <h4>Цена товара: {product.price}$</h4>

                    </li>
                ))}
            </ul>

        </div>
    )
}

export default FavoritesList;
