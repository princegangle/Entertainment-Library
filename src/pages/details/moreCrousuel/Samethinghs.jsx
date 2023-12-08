import React from "react";
import {Crousuel,Usefetch} from '../../../../index.js'



const Samethinghs = ({ mediaType, id }) => {
    const { data, loading, error } = Usefetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Crousuel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Samethinghs;