import { Link } from 'react-router-dom'
import TopicsList from '../Topics/TopicsList';

function Header() {
    return(
        <div>
            <Link className='link' to="/">
                <div className = "banner">
                    <h1 className = "title">News</h1>
                </div>
            </Link>
            <TopicsList />
        </div>
    )
}

export default Header;