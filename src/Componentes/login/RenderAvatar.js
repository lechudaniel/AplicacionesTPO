import React from 'react';
import { Avatar } from '@material-ui/core';

export default function RenderAvatar(props) {

    if (props.user.photoURL === null) {
        return (
            <Avatar className={props.className}>{props.user.displayName.charAt(0)}</Avatar>
        )
    } else {
        return (
            <Avatar className={props.className} src={props.user.photoURL} alt={props.user.displayName} />
        )
    }
}
