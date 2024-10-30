import "./NavBar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <nav>
      <div >
        <Link to="/">
          <Button sx={{ margin: 3, width: 130 }} variant="outlined">
            Inicio
          </Button>
        </Link>

        <Link to="/humans">
          <Button sx={{ margin: 3, width: 130 }} variant="outlined">
            Humans
          </Button>
        </Link>

        <Link to="/aliens">
          <Button sx={{ margin: 3, width: 130 }} variant="outlined">
            Aliens
          </Button>
        </Link>

        <Link to="/about">
          <Button sx={{ margin: 3, width: 130 }} variant="outlined">
            Acerca
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
