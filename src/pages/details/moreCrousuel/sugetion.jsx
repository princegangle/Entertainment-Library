import React from "react";
import {Crousuel,Usefetch } from "../../../../Index.js"


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