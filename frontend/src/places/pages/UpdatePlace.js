import React from "react";

import { useParams } from "react-router-dom";
import Button from "../../shared/Components/FormElement/Button";
import Input from "../../shared/Components/FormElement/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";

import './PlaceForm.css'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empare State',
        description: 'One of the most famous skyscraper in the world',
        imageUrl: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc3NjU2NzUxNTgwODk1/this-day-in-history-05011931---empire-state-building-dedicated.jpg',
        address: '20 W 34th St, New Yorki NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empare State',
        description: 'One of the most famous skyscraper in the world',
        imageUrl: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc3NjU2NzUxNTgwODk1/this-day-in-history-05011931---empire-state-building-dedicated.jpg',
        address: '20 W 34th St, New Yorki NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];


const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(item => item.id === placeId);

    if (!identifiedPlace) {
        return <div className="center">
            <h2>Could Not Find Place.!</h2>
        </div>
    }

    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={() => { }}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description. (min. 5 Characters)"
                onInput={() => { }}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>UPDATE PLACE</Button>
        </form>
    );
}


export default UpdatePlace;