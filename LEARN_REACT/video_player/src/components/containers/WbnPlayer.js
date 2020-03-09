import React, { useState, useEffect } from "react";
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

const WbnPlayer = ({ match, history, location }) => {

    // get videos from index.html in-browser
    const unParsedVideos = document.querySelector('[name="videos"]').value;
    const videos = JSON.parse(unParsedVideos);

    //set default states
    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false,
    });

    useEffect(() => {
        const videoId = match.params.activeVideo;
        //find video in which the active video matches the video in the videos array
        const newActiveVideo = state.videos.findIndex(
            video => video.id === videoId
        )

        if (videoId !== undefined) {
            //what we do now is a way to AVOID infinite loop with useEffect
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: location.autoplay,
            }));
        } else {
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false,
            })
        }

    }, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos]);

    const nightModeCallback = () => {
        setState(prevState => ({
            ...prevState,
            nightMode: !state.nightMode,
        }))
    }
    const endCallback = () => {
        //go to the next video, or if the user is at the end, go back to the first video
        const videoId = match.params.activeVideo;
        const currentVideoIndex = state.videos.findIndex(video => video.id === videoId);

        // videos.length is the array length*
        const nextVideo =
            currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

        history.push({
            pathname: `/${state.videos[nextVideo].id}`,
            autoplay: false,
        });
    }

    const progressCallback = e => {
        //after 40s set the video as played
        if (e.playedSeconds > 30 && e.played < 31) {
            setState({
                ...state,
                videos: state.videos.map(element => {
                    return element.id === state.activeVideo.id ? { ...element, played: true } : element;
                })
            })
        }
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