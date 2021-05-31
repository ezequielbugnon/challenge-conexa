import styled from 'styled-components';

interface YourProps {
    end: boolean
}

export const Container = styled.div<YourProps>`
width: 100%;
height: 100vh;
display: flex;
justify-content: ${props => props.end ? 'flex-end': 'start'};
`

export const BoxGreen =  styled.div`
flex: 0 0 35%;
background-color:#85f28e;
`