import React from "react";
import Dog from "./Dog";

const Home = ({ dogs }) => {
    return (
        <div>
            {dogs.map((dog) => (
                <Dog key={dog.name} name={dog.name} age={dog.age} src={dog.src} facts={dog.facts} />
            ))}
        </div>
    );
};

export default Home;
