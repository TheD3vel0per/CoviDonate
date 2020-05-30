// import dependenies
import React from 'react';
import ReactDOM from 'react-dom';
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
    Navbar
} from 'react-bootstrap';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div style={{ paddingBottom: '10px' }}>
                    <Navbar bg="dark" expand="lg">
                        <Navbar.Brand href="#home">
                            <Link to="/" style={{ color: 'white', underline: 'none' }}>CoviDonate</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
