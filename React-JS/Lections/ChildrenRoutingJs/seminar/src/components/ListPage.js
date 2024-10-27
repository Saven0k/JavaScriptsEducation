import {Link} from "react-router-dom"
function ListPage({detailsList}) {
    return (
        <div class="list">
            <h2>Список деталей</h2>
            <ul>
                {detailsList.map((item) => (
                    <li key={item.id}>
                        <Link to={`/details/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListPage;