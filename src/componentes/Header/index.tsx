import logo from "../../assets/logo.png";
import { Icon } from "@tremor/react";
import { Container, Content } from "./styles";
import { Search } from "react-feather";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="C Finance" />

        <Icon
          Icon={Search}
          variant="outlined"
          tooltip="Tooltip to place context information"
        />
      </Content>
    </Container>
  );
}

export default Header;
