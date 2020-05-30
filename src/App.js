// import dependenies
import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// import components
import HomePage     from './components/HomePage';
import ProjectPage  from './components/ProjectPage';
import LoginPage    from './components/LoginPage';
import AboutUsPage  from './components/AboutUsPage';
import DonatePage   from './components/DonatePage';
import MapPage      from './components/MapPage';

// import bootstrap elements
import {
    Navbar, Nav, NavItem, Button, Form
} from 'react-bootstrap';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import './components/styles/App.css';

function App() {

    // TODO Removeme
    // localStorage.setItem('name', "TEST_NAME");

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
                            <Nav class='ml-auto'>
                                {/* Selectively render a greeting if 'name' is defined
                                    using an IIFE*/}
                                {
                                    ((name) => !!name &&
                                                <NavItem>
                                                    <span class='navgreet'>Welcome, {name}! </span>
                                                </NavItem>
                                    )(localStorage.getItem('name'))
                                }
                                
                                {/* Ternary expression conditionally renders a
                                    logout button if there is a 'name' token in
                                    localstorage; else it renders a login button.
                                    Implemented using an IIFE*/}
                                <Form>
                                    {
                                        ((name) => 
                                        {
                                            if (name)
                                                return (
                                                    <Button class='navlogbtn' type="submit">
                                                        Logout
                                                    </Button>);
                                            else
                                                return (<Link class='navlogbtn' to="/login">Login</Link>);
                                        })(!!localStorage.getItem('name'))
                                    }
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
