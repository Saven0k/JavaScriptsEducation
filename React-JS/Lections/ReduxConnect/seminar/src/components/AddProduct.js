import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/ProductActions";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [disc, setDisc] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(addProduct(name, disc, price));
        setName('');
        setDisc('');
        setPrice('');
    }

    return (
        <div className="form">
            <input
                className="input inputName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите название продукта: "
            />
            <input
                className="input inputDisc"
                type="text"
                value={disc}
                onChange={(e) => setDisc(e.target.value)}
                placeholder="Введите описание продукта: "
            />
            <input
                className="input inputPrice"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Введите цену продукта: "
            />

            <button
                className="button-add"
                onClick={handleAddProduct}>
                Добавить товар в <span className="favoritesSpan">избранные</span>
            </button>
        </div>
    );
};

export default AddProduct;