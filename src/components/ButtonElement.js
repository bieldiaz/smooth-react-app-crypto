import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius:50px;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding:  ${({ big }) => (big ? '14px 48px' : '32px 30px')};
    color: ${({ dark }) => (dark ? '#010106' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    ouline: none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2 ease-in-out;
    z-index:999;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
    }
   
`;


