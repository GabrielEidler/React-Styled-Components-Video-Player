import React from "react";
import Video from "../Video";
import Playlist from "../containers/Playlist";
import { ThemeProvider } from 'styled-components'
import StyledWbnPlayer from "../styles/StyledWbnPlayer";

//normal js object
const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorActive: "#405c663",
    bgcolorPlay: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff"
}

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorActive: "#80a7b1",
    bgcolorPlay: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
}

const WbnPlayer = props => {

    const nightModeCallback = () => {

    }
    const endCallback = () => {

    }

    const progressCallback = () => {

    }

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <StyledWbnPlayer>
                    <Video
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallback={endCallback}
                        progressCallback={progressCallback}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyledWbnPlayer>
            ) : null}
        </ThemeProvider>

    )
}

export default WbnPlayer; 