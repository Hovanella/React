import React, {Component} from "react";

export class CommentsDel extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        if (this.yourWord.value === this.props.comment.secretWord) {
            return this.props.deleteComment(this.props.comment);
        }
        this.yourWord.value="";
    }

    render() {
        return (
            <form className="" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    ref={(e) => (this.yourWord = e)}
                    placeholder="Секретное слово"
                />
                <input type="submit" value="Подтвердить"/>
            </form>
        );
    }
}