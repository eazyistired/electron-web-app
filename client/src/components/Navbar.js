import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth, logout } from "../hooks/auth";

const LoggedinLinks = () => {
  return (
    <>
      <Link className="nav-link active" to="/home">
        Home
      </Link>
      <Link className="nav-link active" to="/admin-dashboard">
        Admin Dashboard
      </Link>
      <Link
        className="nav-link active"
        to="/"
        onClick={() => {
          logout();
        }}>
        Logout
      </Link>
    </>
  );
};

const LoggedoutLinks = () => {
  return (
    <>
      <Link className="nav-link active" to="/signup">
        Sign Up
      </Link>
      <Link className="nav-link active" to="/login">
        Login
      </Link>
    </>
  );
};

const NavBar = ({ username = "none" }) => {
  const [logged] = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link active" to="/">
            Electron
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {logged ? <LoggedinLinks /> : <LoggedoutLinks />}
          </Nav>

          <Navbar.Text className="justify-content-end">
            Hello, <Link to="/login"> {username} </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
