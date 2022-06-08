import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initilize, progress, status } = useMockData();
    const handleClick = () => {
        initilize();
    };
    return (
        <div className="container mt-5">
            {" "}
            <h1> Main Page</h1>
            <h3>Инициализация данных в FireBase </h3>
            <ul>
                <li>Status:{status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>error: {error}</li>}
            </ul>
            <button onClick={handleClick} className="btn btn-primary">
                Инициализировать
            </button>
        </div>
    );
};

export default Main;
