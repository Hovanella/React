import React, {Component} from "react";


export const CommentsInfo = ({comment}) => {
        return (
            <div className="info-wrapper">
                <div className="date">{comment.date.toLocaleString()}</div>
                <div className="email">Email: {comment.email}</div>
            </div>
        );

}