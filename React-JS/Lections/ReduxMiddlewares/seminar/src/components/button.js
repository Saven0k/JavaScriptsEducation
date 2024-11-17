import { useDispatch } from 'react-redux'

const MyButton = () => {
    const dispatch = useDispatch();

    const click = () => {
        dispatch({type: 'CLICK', payload: 'click!'})
    }

    return <button onClick={click}>Click!</button>
}
export default MyButton;
