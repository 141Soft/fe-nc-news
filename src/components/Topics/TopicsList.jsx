import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getTopics } from "../../api"



function TopicsList() {

    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getTopics()
        .then((fetchedTopics) => {
            setTopics(fetchedTopics)
            setIsLoading(false)
        })
    }, [])


    if(!isLoading)
    return (
        <div>
            <ul className="topicsList">
                {topics.map((topic) => {
                    return <li className="topicsList" key={topic.slug}><Link className='link' to={`/?topic=${topic.slug}`}>{topic.slug}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default TopicsList;