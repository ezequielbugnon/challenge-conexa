import React from 'react';
import {Link} from 'react-router-dom'
import * as SC from './styles';


const Header = ({fnClose}: any) => {
   
    const onClose = () => {
        fnClose()
    }

    return (
       <SC.Contanerheader>
           <SC.Nav>
               <SC.Pages>
                   <Link to="/photos">Photos</Link>
                   <Link to="/home">Home</Link>
                   <button
                    onClick={onClose}
                   >Close</button>
               </SC.Pages>
           </SC.Nav>
       </SC.Contanerheader>
    );
}

export default Header;