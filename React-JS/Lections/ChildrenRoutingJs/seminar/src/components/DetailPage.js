import {useParams} from 'react-router-dom';
function DetailPage({details}) {

    const {id} = useParams();
    const detail = details.find(detail => detail.id === parseInt(id))

    if (!detail) {
        return <h3>Делали нету</h3>
    }

    return (
        <div key={id}>
            <h3>{detail.title}</h3>
            <h5>{detail.cost}$</h5>
        </div>
    );
}

export default DetailPage;