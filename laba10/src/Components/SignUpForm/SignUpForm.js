import {SignUpEmailInput} from "./SignUpEmailInput";
import {SignUpPasswordInput} from "./SignUpPasswordInput/SignUpPasswordInput";
import {PhoneInput} from "./PhoneInput/PhoneInput/PhoneInput";
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";


export function SignUpForm() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [birthday, setBirthday] = useState('');


    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isSurnameValid, setIsSurnameValid] = useState(false);
    const [isPatronymicValid, setIsPatronymicValid] = useState(false);
    const [isBirthdayValid, setIsBirthdayValid] = useState(false);


    useEffect(() => {
        setIsButtonDisabled(
            !isEmailValid ||
            !isPasswordValid ||
            !isPhoneValid ||
            !isNameValid ||
            !isSurnameValid ||
            !isPatronymicValid ||
            !isBirthdayValid
        );
    }, [isEmailValid, isPasswordValid, isPhoneValid, isNameValid, isSurnameValid, isPatronymicValid, isBirthdayValid]);


    const InputChange = (e) => {
        switch (e.target.name) {
            case 'surname':
                if (e.target.value.length > 0) {
                    setIsSurnameValid(true);
                    setSurname(e.target.value);
                } else {
                    setIsSurnameValid(false);
                    setSurname('');
                }
                break;
            case 'name':
                if (e.target.value.length > 0) {
                    setIsNameValid(true);
                    setName(e.target.value);
                } else {
                    setIsNameValid(false);
                    setName('');
                }
                break;
            case 'patronymic':
                if (e.target.value.length > 0) {
                    setIsPatronymicValid(true);
                    setPatronymic(e.target.value);
                } else {
                    setIsPatronymicValid(false);
                    setPatronymic('');
                }
                break;
            case 'date':
                if (e.target.value.length > 0) {
                    setIsBirthdayValid(true);
                    setBirthday(e.target.value);
                } else {
                    setIsBirthdayValid(false);
                    setBirthday('');
                }
                break;
            default:
                break;
        }
    }
    const EmailInputChange = (value, text) => {
        if (value === true) {
            setIsEmailValid(true);
            setEmail(text);
        } else {
            setIsEmailValid(false);
            setEmail('');
        }
    }
    const PasswordInputChange = (value, text) => {
        if (value === true) {
            setIsPasswordValid(true);
            setPassword(text);
        } else {
            setIsPasswordValid(false);
            setPassword('');
        }
    }
    const PhoneInputChange = (value, text) => {
        if (value === true) {
            setIsPhoneValid(true);
            setPhone(text);
        } else {
            setIsPhoneValid(false);
            setPhone('');
        }
    }


    const RegisterUser = () => {

        const registerData = {
            name: name,
            surname: surname,
            patronymic: patronymic,
            email: email,
            password: password,
            phone: phone,
            birthday: birthday
        };
        console.table(registerData);


        const data = JSON.stringify(registerData);
        const dataFile = new Blob([data], {type: 'application/json'});
        const fileName = 'user.json';
        const a = document.createElement('a');
        a.href = URL.createObjectURL(dataFile);
        a.download = fileName;
        a.click();

        //send data to server
        fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify(registerData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert('???? ?????????????? ????????????????????????????????????');
                    window.location.href = '/login';
                } else {
                    alert('???????????? ??????????????????????');
                }
            })
            .catch(error => {
                console.log(error);
            });


    }


    return (
        <form className="signUpForm">
            <SignUpEmailInput IsEmailValid={EmailInputChange}/>
            <SignUpPasswordInput IsPasswordValid={PasswordInputChange}/>

            <div className="formField ">
                <label htmlFor="surname">??????????????</label>
                <input type="text" name="surname" onChange={InputChange} placeholder="??????????????"/>
            </div>

            <div className="formField ">
                <label htmlFor="name">??????</label>
                <input type="text" name="name" onChange={InputChange} placeholder="??????"/>
            </div>

            <div className="formField ">
                <label htmlFor="patronymic">????????????????</label>
                <input type="text" name="patronymic" onChange={InputChange} placeholder="????????????????"/>
            </div>

            <div className="formField Sex">
                <label htmlFor="Sex">??????</label>

                <div className="SexWrap">
                    <div className="Sex">
                        <input type="radio" name="gender" value="male" defaultChecked={true}/>
                        <label>??????????????</label>
                    </div>
                    <div className="Sex">
                        <input type="radio" name="gender" value="female"/>
                        <label>??????????????</label>
                    </div>
                </div>

            </div>

            <div className="formField BirthdayDate">
                <label htmlFor="BirthdayDate">???????? ????????????????</label>
                <div className="DateInputWrap">
                    <input type="date" name="date" onChange={InputChange}/>
                </div>
            </div>

            <PhoneInput IsPhoneInputValid={PhoneInputChange}/>
            <button onClick={RegisterUser} className="result_button" type="button" disabled={isButtonDisabled}>????????????????????????????????????</button>
        </form>
    );
}