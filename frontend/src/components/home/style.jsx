import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 25px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`


export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media(max-width: 1250px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }
  
`

export const Card = styled.div`
    width: 250px;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    padding: 10px;
    
    & > img {
        width: 100%;
    }
`