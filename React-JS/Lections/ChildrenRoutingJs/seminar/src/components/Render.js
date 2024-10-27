import List from "./List";

function Render() {
    const listItems = [1,2,3,4,5,6,7,8,9];
    const renderItem = (item, index) => {
        const style = {color: index % 2 === 0 ? 'blue': 'red'};
        return (
            <div style={style}>
                {item} - Уникальный стиль
            </div>
        );
    };
    return (
        <div class="Render">
            <List listItems={listItems} renderItem={renderItem} />
        </div>
    );
}

export default Render;