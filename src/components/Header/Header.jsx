import { Link } from 'react-router-dom'

function Header() {
    return(
        <Link className='link' to="/">
            <div className = "banner">
                <h1 className = "title">News</h1>
            </div>
        </Link>
    )
}

export default Header;