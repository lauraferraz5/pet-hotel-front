import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/HotelApi";

import FormCadastro from "./FormCadastro";

function NovoCadastro() {
    const [ adressState, setAdress] = useState({
        street: "", 
        number: "", 
        complement: "", 
        city: "", 
        state: "", 
        zipcode:""
    })

    const [clientState, setClientState] = useState({
        name: "",
        mobile: "",
        adress: adressState,
        pets: []
    });

    const [errors, setErrors] = useState({
        name: null,
        mobile: null,
        adress: {street: null, number: null, complement: null, city: null, state: null, zipcode: null}
    });

    const history = useHistory();

    function handleChange(event) {
        setClientState({...clientState, [event.target.name] : event.target.value});
    }

    function handleChangeAdress(event) {
        setAdress({...adressState, [event.target.name] : event.target.value});
        setClientState({...clientState, adress:adressState});
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post(
                "/client/",
                clientState              
            );
            console.log(response.data);
            history.push("/dashboard");
        } catch(error) {
            console.log(error.response);
            setErrors({...error.response.data.errors});
        }
    }

    function goBack() {
        history.push("/dashboard");
    }    

    return (

        <FormCadastro
        clientState={clientState}
        adressState={adressState}
        handleChange={handleChange}
        handleChangeAdress={handleChangeAdress}
        onSubmit={handleSubmit}
        goBack={goBack}
        errors={errors}
         />
        
    );

}

export default NovoCadastro;