// import dependenies
import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory,
    Redirect
} from 'react-router-dom';

// import components
import HomePage     from './components/HomePage';
import ProjectPage  from './components/ProjectPage';
import LoginPage    from './components/LoginPage';
import AboutUsPage  from './components/AboutUsPage';
import DonatePage   from './components/DonatePage';
import MapPage      from './components/MapPage';
import CityPage from './components/CityPage';

// import bootstrap elements
import {
    Navbar, Nav, NavItem, Button, Form
} from 'react-bootstrap';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import './components/styles/App.css';

function App() {
    const logout = () => {
        localStorage.removeItem('_id');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
    };


    // Selectively render a greeting if 'name' is defined using an IIFE
    const Greeting = (props) => {
        const name = localStorage.getItem('name');
        return !!name && (
            <Navbar.Text style={{color: "#ffffff", marginRight: "1em"}}>
                Hello, {name}! 
            </Navbar.Text>
        );
    }

    // Ternary expression conditionally renders a
    // logout button if there is a 'name' token in
    // localstorage; else it renders a login button.
    // Implemented using an IIFE
    const LogButton = (props) => {
        const name = localStorage.getItem('name');
        
        if (name)
            return (
                <Button variant='outline-danger' type="submit" onClick={logout}>
                    Logout
                </Button>);
        else
            return (
                <Link to="/login">
                    <Button variant='outline-success'>
                        Login
                    </Button>
                </Link>);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <div style={{ paddingBottom: '10px' }}>
                    <Navbar bg="dark" expand="lg">
                        <Navbar.Brand href="#home">
                            <Link to="/" style={{ color: 'white', underline: 'none' }}>CoviDonate</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Link to="/map">
                                    Map
                                </Link>
                            </Nav>

                            <Nav className='ml-auto'>
                                <Greeting/>
                                <Form>
                                    <LogButton/>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <Switch>
                    <Route path="/project/:id">
                        <ProjectPage />
                    </Route>
                    <Route path="/about-us">
                        <AboutUsPage />
                    </Route>
                    <Route path="/donate">
                        <DonatePage />
                    </Route>
                    <Route path="/map">
                        <MapPage />
                    </Route>
                    <Route path="/city">
                        <CityPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
