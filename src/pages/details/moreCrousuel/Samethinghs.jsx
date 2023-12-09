import React from "react";
import Usefetch from "../../../hooks/Usefetch.jsx";

import Crousuel from "../../../components/crousuel/Crousuel.jsx";

const Samethinghs = ({ mediaType, id }) => {
    const { data, loading, } = Usefetch(`/${mediaType}/${id}/similar`);

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