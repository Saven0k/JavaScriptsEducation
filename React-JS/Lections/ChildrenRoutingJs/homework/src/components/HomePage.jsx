import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div class="home">
            <h1>Домашнаяя страница</h1>
            <Link class="link" to={'/about'}>Перейти на страничку о нас</Link>
        </div>
    );
}

export default HomePage;