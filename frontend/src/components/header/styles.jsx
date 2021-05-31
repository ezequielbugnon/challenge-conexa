import styled from 'styled-components';

export const Contanerheader = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
`

export const Nav = styled.nav`
    display: flex;
    flex: 0 0 45%;
    @media(max-width: 500px){
        flex: 0 0 100%;
        justify-content: center;
    }
`

export const Pages = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    & > a{
        cursor: pointer;
        padding: 10px;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        &:hover{
            border: 1px solid black;
        }
    }

`