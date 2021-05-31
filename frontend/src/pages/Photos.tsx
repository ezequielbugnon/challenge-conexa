import React, { useEffect, useContext, useState } from 'react'
import Header from '../components/header/Header';
import * as SC from '../components/home/style';
import PhotosContext from '../context/photosContext/PhotosContext';
import styled from 'styled-components';
import UserContext from '../context/userContext/UserContext';


const Photos = () => {
    const userContext = useContext(UserContext);
    const { close } = userContext;
    const photosContext = useContext(PhotosContext);
    const [number, setnumber] = useState(0)
    const [numberInput, setNumberInput] = useState({
        num: ''
    })
    const { requestPhoto, photos } = photosContext;
    useEffect(() => {
        requestPhoto(number)
    }, [number, requestPhoto])

    const setNextPage = () => {
        setnumber(number + 1)
    }

    const setPrevPage = () => {
        setnumber(number - 1)
    }
    
    const onChange = (event: any) => {
        setNumberInput({
            ...numberInput,
            [event.target.name]: event.target.value
        })
    }

    const setNumber = (event: any) => {
        if (event.key === 'Enter') {
            if(Number(numberInput.num) >= 0 && Number(numberInput.num) <= 4990){
                setnumber(Number(numberInput.num))
            }
          }
    }


    return (
        <>
        <Header fnClose={close}/>
        <ContainerFlex>
            <label htmlFor="number">0 to 4990</label>
            <input 
                type="number"
                name="num"
                onChange={(e) => onChange(e)}
                value={numberInput.num}
                onKeyPress={(event) => setNumber(event)}
            />
        </ContainerFlex>
        <SC.Container>
            <SC.ContainerCards>
                {photos.map(data => (
                     <SC.Card key={data.id}>
                         <img src={data.url} alt=""/>
                         <h4>{data.title}</h4>
                         <p>{data.id}</p>
                     </SC.Card>
                ))}
            </SC.ContainerCards>
        </SC.Container>
        {photos.length > 1 &&
            <ContainerFlex>
            {photos[photos.length - 1].id > 10 && <button
                                                     onClick={setPrevPage}
                                                   >Prev</button>}
            {photos[0].id < 4991  && <button
                                        onClick={setNextPage}
                                      >Next</button>}
           </ContainerFlex>
        }
        </>
    );
}

const ContainerFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > button{
        margin: 10px
    }

    & > label{
        margin: 10px
    }
`

export default Photos;