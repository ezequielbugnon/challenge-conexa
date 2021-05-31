import styled from 'styled-components';

export const Container = styled.div<{ end?: boolean }>`
width: 100%;
height: 100vh;
display: flex;
justify-content: ${props => props.end? 'end': 'start'};
`

export const BoxGreen =  styled.div`
flex: 0 0 35%;
background-color:#85f28e;
`