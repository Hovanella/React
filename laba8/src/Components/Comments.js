import React, {Component} from "react";
import {CommentsInfo} from "./CommentsInfo";
import {CommentsEdit} from "./CommentsEdit";
import {CommentsDel} from "./CommentsDel";
import editPicture from "../UI/external-content.duckduckgo.com.jpg"
import deletePicture from "../UI/i.webp"
import infoPicture from "../UI/1170px-Android_Emoji_2755.svg.png"

import catPicture from "../UI/Avatars/Cat.jpg";
import NoAvatarPicture from "../UI/Avatars/NoAvatar.png";
import SlavikPicture from "../UI/Avatars/Slavik.jpg";
import PandaPicture from "../UI/Avatars/Panda.jpg";
import SunPicture from "../UI/Avatars/Sun.png";

export class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: NoAvatarPicture,
            comments: [
                {
                    name: "name1",
                    avatar: catPicture,
                    email: "w@mail.ru",
                    message: "message1",
                    secretWord: "q",
                    date: new Date(),
                },
                {
                    name: "name2",
                    avatar: catPicture,
                    email: "w@mail.ru",
                    message: "dsfndkdjnfdslfngdkjgnsdklfnsafndgjkdsfnfgjsaknslkfnerjkgfnfkadsjlfnaklfndlskngvdsklvndlkvndsklgnsdklfndsfkldsnfdsklfnwklfnonvdklbvndvlkb",
                    secretWord: "w",
                    date: new Date(),
                },
            ],
            delete: null,
            edit: null,
            info: null,
            isSubmitButtonAvailable: false
        };
        this.state = {
            img: NoAvatarPicture,
            comments: [
                {
                    name: "name1",
                    avatar: catPicture,
                    email: "w@mail.ru",
                    message: "message1",
                    secretWord: "q",
                    date: new Date(),
                },
                {
                    name: "name2",
                    avatar: catPicture,
                    email: "w@mail.ru",
                    message: "dsfndkdjnfdslfngdkjgnsdklfnsafndgjkdsfnfgjsaknslkfnerjkgfnfkadsjlfnaklfndlskngvdsklvndlkvndsklgnsdklfndsfkldsnfdsklfnwklfnonvdklbvndvlkb",
                    secretWord: "w",
                    date: new Date(),
                },
            ],
            delete: null,
            edit: null,
            info: null,

        };
    }

    avatars = [
        {
            img: "",
            name: "Без аватара",
        },
        {
            img: "/avatars/cat.jpg",
            name: "Котик",
        },
        {
            img: "/avatars/donkey.jpg",
            name: "Панда",
        },
        {
            img: "/avatars/fiona.jpg",
            name: "Солнце",
        },
        {
            img: "/avatars/cat.jpg",
            name: "Славик",
        },
    ];
    onSubmit = (e) => {
        e.preventDefault();

        if ((this.name.value && this.email.value && this.message.value && this.secretWord.value) ===""){
            alert("Не все поля заполнены");
            return;
        }

        let comment = {
            name: this.name.value,
            avatar: this.state.img,
            email: this.email.value,
            message: this.message.value,
            secretWord: this.secretWord.value,
            date: new Date(),
            id: (new Date()).getTime()
        };
        this.setState({
            comments: [...this.state.comments, comment],
        });
        this.name.value = null;
        this.email.value = null;
        this.message.value = null;
        this.secretWord.value = null;

    };


    comments() {
        return this.state.comments.map((comment, index) => {
            let className = "comment";
            if (index % 2 === 0) {
                className += " comment-even";
            } else
                className += " comment-odd";

            return (
                <li className={className} key={index}>


                    <div className="comment-header">
                        <div className="buttons">
                            <button className="button" onClick={() => this.setState({edit: this.state.edit === null ? comment : null, delete: null, info: null})}>
                                <img src={editPicture} width="20px" height="20px" alt=""/>
                            </button>

                            <button className="button" onClick={() => this.setState({delete: this.state.delete === null ? comment : null, edit: null, info: null})}>
                                <img src={deletePicture} width="20px" height="20px" alt=""/>
                            </button>

                            <button className="button" onClick={() => this.setState({info: this.state.info === null ? comment : null, edit: null, delete: null})}><img src={infoPicture} width="20px"
                                                                                                                                                                       height="20px" alt=""/>
                            </button>
                        </div>
                        <div className="user-identity">

                            <img
                                className="avatar"
                                src={comment.avatar}
                                alt=""
                            />
                            <div className="name">{comment.name}</div>

                        </div>
                    </div>

                    <div className="message">{comment.message}</div>


                    {comment === this.state.edit ?
                        <CommentsEdit
                            comment={this.state.edit}
                            editComment={this.editComment}
                        />
                        : null}
                    {comment === this.state.delete ? (
                        <CommentsDel
                            deleteComment={this.deleteComment}
                            comment={this.state.delete}
                        />
                    ) : null}
                    {comment === this.state.info ? (
                        <CommentsInfo comment={this.state.info}/>
                    ) : null}

                </li>
            );
        });
    }

    deleteComment = (comment) => {
        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i].id === comment.id) {
                return this.setState(({comments}) => ({
                    comments: [...comments.slice(0, i), ...comments.slice(i + 1)],
                    delete: null
                }));
            }
        }
    };
    editComment = (comment, text) => {
        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i].id === comment.id) {
                comment.message = text;
                comment.date = new Date();
                return this.setState(({comments}) => ({
                    comments: [...comments.slice(0, i), comment, ...comments.slice(i + 1)],
                    edit: null
                }));
            }
        }
    }
    selectImg = (e) => {
        switch (e.target.value) {
            case "Без аватара":
                this.setState({img: NoAvatarPicture});
                break;
            case "Котик":
                this.setState({img: catPicture});
                break;
            case "Славик":
                this.setState({img: SlavikPicture});
                break;
            case "Панда":
                this.setState({img: PandaPicture});
                break;
            case "Солнце":
                this.setState({img: SunPicture});
                break;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        ref={(e) => (this.name = e)}
                        type="text"
                        placeholder="Имя пользователя"
                        name=""
                    />
                    <select onChange={this.selectImg}>
                        {this.avatars.map((avatar) => {
                            return (
                                <option key={avatar.img} value={avatar.name}>
                                    {avatar.name}
                                </option>
                            );
                        })}
                    </select>
                    <img
                        className="formImg"
                        src={this.state.img}
                        alt=""
                    />
                    <input
                        ref={(e) => (this.email = e)}
                        type="email"
                        placeholder="Email"
                    />
                    <textarea aria-expanded="false" placeholder="Комментарий" ref={(e) => (this.message = e)}/>
                    <input
                        ref={(e) => (this.secretWord = e)}
                        type="text"
                        placeholder="Секретное слово"
                    />
                    <input  type="submit" value="Отправить"/>
                </form>
                <ul className="comment-wrapper">
                    {this.comments()}
                </ul>

            </div>
        );
    }
}

