import React, { useContext, useState, useEffect } from "react";
import qualityService from "../services/quality.service";
import PropTypes from "prop-types";

const QualityContext = React.createContext();
export const useQualities = () => {
    return useContext(QualityContext);
};

export const QualitiesProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getQualitiesList();
    }, []);

    async function getQualitiesList() {
        try {
            const { content } = await qualityService.get();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    function getQualities(user) {
        const qualityArray = [];
        user.qualities.forEach((userQuality) => {
            qualities.forEach((quality) => {
                if (userQuality === quality._id) {
                    qualityArray.push(quality);
                }
            });
        });
        return qualityArray;
    }

    // function errorCatcher(error) {
    //     const { message } = error.responce.data;
    //     setError(message);
    // }
    return (
        <QualityContext.Provider value={{ qualities, isLoading, getQualities }}>
            {children}
        </QualityContext.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
