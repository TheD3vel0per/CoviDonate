// import dependenies
import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
} from 'react-router-dom';

// import components
import HomePage     from './components/HomePage';
import ProjectPage  from './components/ProjectPage';
import LoginPage    from './components/LoginPage';
import AboutUsPage  from './components/AboutUsPage';
import DonatePage   from './components/DonatePage';
import MapPage      from './components/MapPage';
import CityPage from './components/CityPage';
import PrivacyPolicy from './components/PrivacyPolicy';

// import bootstrap elements
import {
    Navbar, Nav, NavItem, Button, Form
} from 'react-bootstrap';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import './components/styles/App.css';

function App() {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('_id');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
    
        history.push("/");
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
                            <Nav style={{marginLeft: "2em"}}>
                                <Link to="/map" style={{marginRight: "1em"}}>
                                    <Button variant='outline-light'>
                                        Local Projects
                                    </Button>
                                </Link>
                                <Link to="/about-us">
                                    <Button variant='outline-light'>
                                        About Us
                                    </Button>
                                </Link>
                                <Link to="/privacy-policy">
                                    <Button variant='outline-light'>
                                        Privacy Policy
                                    </Button>
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
                    <Route path="/project/:id" component={ProjectPage}></Route>
                    <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
                    <Route path="/about-us" component={AboutUsPage}></Route>
                    <Route path="/donate" component={DonatePage}></Route>
                    <Route path="/map" component={MapPage}></Route>
                    <Route path="/city" component={CityPage}></Route>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route path="/" component={HomePage}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
