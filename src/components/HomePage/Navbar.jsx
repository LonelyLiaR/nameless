import Styled from "styled-components";

const Navbar = Styled.ul`
    padding: 0;
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

Navbar.NavItem = Styled.li`
    padding: 0 6px;

    > a {
        font-size: 14px;
    }
`;

export default Navbar;
