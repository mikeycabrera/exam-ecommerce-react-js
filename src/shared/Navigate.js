import React from 'react';
import {useNavigate } from 'react-router-dom';
import { Button} from "react-bootstrap";

export const Navigate = (props) => {
    
    const navigate = useNavigate();
   
    function fnDetail (id,data){
        navigate("/detail-Product",{state:{id:id,detail:data}})
    }
    return (
        <>
         <Button variant="primary"  onClick={(id,e)=>fnDetail(id,e)}>Details</Button>
       </>
    );
}
export default Navigate;