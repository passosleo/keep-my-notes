import { Link } from "react-router-dom";
import { Header, DropdownWrapper } from "../../styles";

function NavBar() {
  return (
    <Header>
      <div>
        <Link to="/">
          <h1>Web Notes</h1>
        </Link>
        <DropdownWrapper>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/315px-Blank_woman_placeholder.svg.png"
            alt="avatar"
            width="40"
            height="40"
          />

          <div>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
          </div>
        </DropdownWrapper>
      </div>
    </Header>
  );
}

export default NavBar;
