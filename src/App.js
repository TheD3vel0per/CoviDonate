// import dependenies
import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// import components
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import LoginPage from './components/LoginPage';
import AboutUsPage from './components/AboutUsPage';
import DonatePage from './components/DonatePage';
import MapPage from './components/MapPage';

// import bootstrap elements
import {
    Navbar, Nav, NavItem
} from 'react-bootstrap';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [name, nameSet] = React.useState('noName');



    return (
        <div className="App">
            <BrowserRouter>
                <div style={{ paddingBottom: '10px' }} onLoad={() => nameSet(localStorage.getItem('name'))}>
                    <Navbar bg="dark" expand="lg">
                        <Navbar.Brand href="#home">
                            <Link to="/" style={{ color: 'white', underline: 'none' }}>CoviDonate</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
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
