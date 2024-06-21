

function ArticleSort({ searchParams, setSearchParams }) {

    const handleChange = (event) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(event.target.name, event.target.value);
        setSearchParams(newParams);
    } 


    return (
        <div className="articleSort">
            <label>Sort By:
            <select name="sort" onChange = {handleChange}>
                <option value={'created_at'}>Date</option>
                <option value={'comment_count'}>Comments</option>
                <option value={'votes'}>Votes</option>
            </select>
            </label>
            <label>Order:
            <select name="order" onChange = {handleChange}>
                <option value={'asc'}>Ascending</option>
                <option value={'desc'}>Descending</option>
            </select>
            </label>
        </div>
    )
}

export default ArticleSort;