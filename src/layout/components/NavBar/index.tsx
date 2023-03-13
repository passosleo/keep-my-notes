import { Header } from "../../styles";

function NavBar() {
  return (
    <Header>
      <div>
        <h1>Web Notes</h1>
        <input type="text" placeholder="Search" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/315px-Blank_woman_placeholder.svg.png"
          alt="avatar"
          width="40"
          height="40"
        />
      </div>
    </Header>
  );
}

export default NavBar;
