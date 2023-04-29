import { Link } from "react-router-dom";
import { Header, DropdownWrapper, LogoWrapper } from "../../styles";
import { useProfileContext } from "../../../context/ProfileContext";
import { MdOutlineStickyNote2 } from "react-icons/md";

export function NavBar() {
  const { profile } = useProfileContext();
  return (
    <Header>
      <div>
        <Link to="/">
          <LogoWrapper>
            <MdOutlineStickyNote2 size={32} />
            <h1>Keep My Notes</h1>
          </LogoWrapper>
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
