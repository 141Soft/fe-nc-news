import { useEffect, useState } from "react"


function ArticleSort() {
    const [sortType, setSortType] = useState('')


    return (
        <div>
            <select>
                <option>
                    Sort-by:
                </option>
            </select>
        </div>
    )
}