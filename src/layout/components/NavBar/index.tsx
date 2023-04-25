import { Link } from "react-router-dom";
import { Header, DropdownWrapper } from "../../styles";
import { useProfileContext } from "../../../context/ProfileContext";

export function NavBar() {
  const { profile } = useProfileContext();
  return (
    <Header>
      <div>
        <Link to="/">
          <h1>Web Notes</h1>
        </Link>
        <DropdownWrapper>
          <div>
            <p>{profile.name}</p>
            <img src={profile.photo} alt="avatar" width="40" height="40" />
          </div>

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
