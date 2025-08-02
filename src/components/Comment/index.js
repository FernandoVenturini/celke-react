import React from "react";

function Comment(props) {

    function formatDate(date) {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    return (
        <>
            <Avatar user={props.author} />
            <span>{props.author.name}</span><br/>
            <span>{props.text}</span><br/>
            <span>{props.date}</span><br/>
            <span>{formatDate(props.date)}</span><br/>
        </>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name} />
    );
}

export default Comment;