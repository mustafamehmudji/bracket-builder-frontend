import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../lib/constants";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchLogout } from "../../../app/features/authSlice";
// import { routes } from "../../../lib/constants";
// import { Link } from "react-router-dom";

const CustomNav = () => {
  const logged_in = useAppSelector((state) => state.auth.logged_in);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(fetchLogout()).then(() => {
      navigate(routes.login);
    });
  };

  return (
    <Navbar className="navbar navbar-expand-lg">
      <Container>
        <Navbar.Brand className="p-title">
          <Link to={routes.home}>
            <img
              alt=""
              src="/images/logo3.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Bracket Builder
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="ms-auto">
          {logged_in ? (
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
