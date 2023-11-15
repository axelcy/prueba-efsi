import { Navbar, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container style={{justifyContent: 'center', gap: '2rem'}}>
                    <Navbar.Brand><Link to={'/'}>Textos 😃</Link></Navbar.Brand>
                    <Navbar.Brand><Link to={'/info'}>Como se usa 😜</Link></Navbar.Brand>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
}

export default Layout