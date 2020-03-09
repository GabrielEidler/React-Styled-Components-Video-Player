import React, { useState, useEffect } from "react";
import PlaylistItem from '../PlaylistItem';
import StyledPlaylistitems from '../styles/StyledPlaylistitems';


const PlaylistItems = ({ videos, active }) => (
    <StyledPlaylistitems>
        {videos.map(video => (
            <PlaylistItem
                key={videos.id}
                video={video}
                active={video.id === active.id ? true : false}
                played={video.played}
            />
        ))}
    </StyledPlaylistitems>
)

export default PlaylistItems;