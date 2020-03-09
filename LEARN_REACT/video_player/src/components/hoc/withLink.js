import React from 'react';
import { Link } from 'react-router-dom';


//this will boost the other components with a new link functionality 
//we will return a new component, so we do NOT CHANGE the component
const withLink = WrappedComponent => props => {

    // we're gonna take these props, and modify them, applying a link to the name
    const newProps = {
        ...props,
        video: {
            ...props.video,
            title: (
                <Link to={{ pathname: `/${props.video.id}`, autoplay: true, }}>
                    {props.video.title}
                </Link>

            )
        }
    }
    //return our wrapped component with new props
    return <WrappedComponent {...newProps} />
}

export default withLink;

