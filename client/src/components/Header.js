import '../index.css';

function Header(){
    return(
        <header className="navbar">
            <section className="navbar-section">
                <a href="..." className="navbar-brand mr-2 nav-links">SONG LISTER</a>
                <a href="#" className="btn btn-link nav-links">Add a Song</a>
                <a href="#" className="btn btn-link nav-links">Add an Artist</a>
            </section>
        </header>
    )
}

export default Header;