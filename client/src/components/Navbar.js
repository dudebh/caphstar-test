import {useHistory} from 'react-router-dom'

export default function Navbar () {
    const history = useHistory()
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" onClick={(e) => {
                    e.preventDefault()
                    history.push('/')}} >Informasi Sosial Media</a>
            </div>
        </nav>
    )
}