import React from "react";

import {Card} from "react-bootstrap";

import Track from "./Track";

export default function TrackList({tracks}) {
    return (
        <div
            style={{
                display: "flex",
                alignContent: "flexStart",
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            {tracks.length > 0
                ? tracks.map((el, key) => (
                    <Track key={key} name={el.name} audio={el.preview_url} image={el.album.images[2]}/>
                  ))
                : ""}
        </div>
    );
}
