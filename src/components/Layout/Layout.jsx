import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => {
    const {children} = props
    return (
        <>
         {/* todo esto se hace para que mi header y mi footer queden estaticos y no se vuelvan a cargar 
        varias veces, sino que solo el contenido cambie */}
        <Header/>
        <div>{children}</div>
        <Footer/>
        </>
    )
}

export default Layout;