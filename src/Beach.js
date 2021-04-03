import React from "react";
import PropTypes from "prop-types";
import "./Beach.css";

function Beach({ image, name }) {
    return (
        <div class="beach">
            <img src={image} alt={name} title={name} />
            <div class="beach_data">
                <h5 class="beach_name">{name} 해변
                </h5>
            </div>
        </div>
    );
}

Beach.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Beach;