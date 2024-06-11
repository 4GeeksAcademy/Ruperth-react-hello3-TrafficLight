import React, { useState } from "react";


import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    return (
        <div className="TrafficLightMain">
            <div className="post"></div>
            <div className="TrafficLight">
                <div /* boton rojo */
                    className={"light red" + (selectedColor === "red" ? " glow" : "")}
                    onClick={() => setSelectedColor("red")}
                ></div>
                <div /* boton amarillo */
                    className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
                    onClick={() => setSelectedColor("yellow")}
                ></div>
                <div /* boton verde */
                    className={"light green" + (selectedColor === "green" ? " glow" : "")}
                    onClick={() => setSelectedColor("green")}
                ></div>
            </div>
        </div>
    );
};

export default Home;
