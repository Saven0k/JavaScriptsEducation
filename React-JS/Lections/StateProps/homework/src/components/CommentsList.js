import { useState } from "react";
export default function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это первый комментарий" },
        { id: 5, text: "Это второй комментарий" },
        { id: 6, text: "Это третий комментарий" }
    ]);

    const viewDelete = (text) => {
        const h1 = document.createElement('h4');
        h1.classList.add("h");
        h1.textContent = `Вы удалили элемент с  id:${text[0]}`;
        const back = document.querySelector('.backflip');
        back.appendChild(h1)
        setTimeout(() => {
            back.removeChild(h1)
        }, 3000)
    }

    const click = ({ target }) => {
        const text = [target.id, target.text]
        setComments(comments.filter(p => p.id != target.id))
        viewDelete(text)
    }

    return (
        <div>
            <h1>Список</h1>
            <ul>
                {comments.map((item) => (
                    <li id={item.id} key={item.id}>{item.text} <span id={item.id} onClick={click}>x</span></li>
                ))}
            </ul>
            <div class="backflip"></div>
        </div>
    );
}