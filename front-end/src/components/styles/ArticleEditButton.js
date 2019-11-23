import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
    background-color: #8E2735;
    color: #FAF189;
    padding: 10px 30px; 
    font-size: 1.2em;
    text-decoration: none; 
    border: 1px solid #8e2735;
    cursor: pointer;

    &:hover {
      background-color: #FAF189;
      color: #8E2735;
    }
`;