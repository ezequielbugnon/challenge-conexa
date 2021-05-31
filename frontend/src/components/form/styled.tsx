import styled from 'styled-components';

export const ContainerForm = styled.div <{ right?: boolean }>`
    width: 300px;
    height: 450px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: absolute;
    top: 80px;
    right: ${props => props.right && '25%'};
    left: ${props => !props.right && '25%'};
    background-color: white;

    & > form{
        display: flex;
        flex-direction: column;
        align-items: center;

        & > a {
            color:black;
            text-decoration: none;
        }
        & > div {
            margin-bottom: 20px;

            & >p {
                color: red;
                font-size: 14px;
                text-align: center;
            }

            & > h1{
               text-align: center;
            }

            & > input {
                width: 230px;
                height: 35px;
            }

            & > button{
                background-color:#85f28e;
                border: none;
                width: 250px;
                color: white;
                height: 40px;
                transition: all .6 ease;
                cursor: pointer;


                &:hover{
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                }
            }

        }  
    }

    @media(max-width: 500px){
        right: 10%;
        left: 10%;
    }
`

