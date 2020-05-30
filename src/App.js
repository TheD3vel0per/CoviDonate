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
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';

// import bootstrap elements
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
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
                        <Project />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
