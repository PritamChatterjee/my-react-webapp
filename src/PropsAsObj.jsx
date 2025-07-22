import React from "react";

function Car(props)
{
    return(
        <>
            brand name: {props.brand.name} <br />   
            model : {props.brand.model} <br />
            price: {props.brand.price} <br></br>
            year: {props.brand.year}
        </>
    );
}

function Garage()
{
    const info = {
        name: "Ford",
        model: "Mustang",
        year: 1969,
        price: 450000.00,
    };

    return(
        <>
            <h2>Props as Object</h2>
            <Car brand={info}></Car>
        </>
    )
}
export default Car;