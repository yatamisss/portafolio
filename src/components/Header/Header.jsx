const Header = () => {
    return (
        <>
            <header>
                <nav className="nav-bar">
                        <a className="nav-bar__a" href="">inicio</a>
                        <a className="nav-bar__a" href="">videos mas populares</a>
                        <form className="nav-bar__form" action="">
                            <input type="search" placeholder="Encuentra mucho más" />
                            <button type="submit">Buscar</button>
                        </form>
                </nav>
            </header>
        </>
    )
}

export default Header;