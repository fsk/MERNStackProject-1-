import React from "react";

import Input from "../../shared/Components/FormElement/Input";
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './NewPlace.css';

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input 
                element="input" 
                type="text" 
                label="title" 
                validators={[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid Title"/>
        </form>
    );
};

export default NewPlace;