import React, {useState, useEffect} from 'react'
import Header from '../header/Header';
import * as SC from './style';
import axios from 'axios';
import { IPosts } from '../../interfaces/responses'

const Content = ({fnClose}:any) => {
    const [state, setstate] = useState<Array<IPosts>>([])
    useEffect(() => {
        const fn = async() => {
            try {
               let response = await axios.get("http://localhost:4000/posts")
                setstate(response.data)
            } catch (e) {
                console.error(e);
            }
        };
        fn();
    }, [])
    return (
        <>
        <Header fnClose={fnClose}/>
        <SC.Container>
            <SC.ContainerCards>
                {state.map(data => {
                   return <SC.Card key={data.id}>
                            <h3>{data.title}</h3>
                            <p>{data.body}</p>
                            <h3>{data.userId}</h3>
                            <p>{data.id}</p>
                          </SC.Card>
                })}
            </SC.ContainerCards>
        </SC.Container>
        </>
    );
}

export default Content;