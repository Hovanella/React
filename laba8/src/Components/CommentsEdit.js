import React, {Component} from "react";

export class CommentsEdit extends Component {
    onSubmit = e => {
        e.preventDefault()
        this.props.editComment(this.props.comment, this.yourComment.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <textarea ref={(e) => (this.yourComment = e)} defaultValue={this.props.comment.message}/>
                <input type="submit" value="Подтвердить"/>
            </form>
        )
    }
}