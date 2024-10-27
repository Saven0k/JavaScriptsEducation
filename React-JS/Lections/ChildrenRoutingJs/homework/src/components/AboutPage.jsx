import { Link } from "react-router-dom";
function AboutPage() {
    return ( 
        <div class="about">
            <h1>Страничка про нас</h1>
            <Link class="link" to={"/home"}>Перейти на домашнюю страничку</Link>
        </div>
    );
}

export default AboutPage;