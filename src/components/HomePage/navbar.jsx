import Styled from "styled-components";

const Navbar = Styled.ul`
    margin-top: 16px;
    padding: 0 16px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

Navbar.NavItem = Styled.li`
    padding: 0 6px;

    > a {
        font-size: 14px;
        color: #2DB4D8;
        text-decoration: none;
        transition: color .3s;

        &:hover {
            color: #22BAD9;
        }
    }
`;

export default Navbar;
