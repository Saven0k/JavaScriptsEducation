import { useDispatch, useSelector } from "react-redux"

const GetUser =  () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)

    const click = () => {
        dispatch({ type: 'FETCH_USERS_REQUEST' })
    }

    return (
        <div>
            <button onClick={click}>
                GetUserInfo
            </button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} </li>
                ))}
            </ul>
            </div>
    )
}

export default GetUser