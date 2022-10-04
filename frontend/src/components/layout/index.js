import Footer from "./footer/footer"
import Header from "./header/header"
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            {/* <Header />
            {children}
            <Footer /> */}
            <Outlet />

        </div>
    )
}

export default Layout