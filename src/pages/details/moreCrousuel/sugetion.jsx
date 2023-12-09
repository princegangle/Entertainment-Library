import React from "react";
import Usefetch from "../../../hooks/Usefetch.jsx";
import Crousuel from "../../../components/crousuel/Crousuel.jsx";



const Sugetion = ({ mediaType, id }) => {
    const { data, loading, error } = Usefetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Crousuel
            title="Ony For You"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Sugetion;