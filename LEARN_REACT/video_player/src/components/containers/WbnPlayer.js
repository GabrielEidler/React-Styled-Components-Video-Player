import React from "react";
import { ThemeProvider } from "styled-components";
import Video from "../Video";
import Playlist from "../containers/Playlist"

const WbnPlayer = props => {
    return (
        <>
            <Video />
            <Playlist />
        </>
    )
}

export default WbnPlayer; 