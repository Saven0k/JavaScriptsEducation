function Loading({isLoading}) {
    return (
        <div className="loading">
            {isLoading &&(
                <h2>Загрузка......</h2>
            )}
            {!isLoading && (
                <h2>Загрузка окончена</h2>)}
        </div>
    );
}

export default Loading;