// import { useState } from "react";
import './toast.css'

export default function Toast ({index}) {

    console.log(Boolean(index));
    // const [isToast, newToast] = useState(undefined);
    const style = {
        color: 'black'
    }

    if (!index){
        return (
            <div className={'toast toast'+index} >
                <i className={"fas fa-check-circle img img"+index}></i>
                <div style={style}>
                <h2>Успешно</h2>
                <p>Ваши изменения произошли успешно.</p>
                </div>
            </div>
        )
    } else if (index === 1){
        return (
            <div className={'toast toast'+index}>
                <i className={"fas fa-info-circle img img"+index}></i>
                <div style={style}>
                <h2>Информация</h2>
                <p>Доступны новые возможности интерфейса</p>
                </div>
            </div>
        )
    } else if (index === 2){
        return (
            <div className={'toast toast'+index}>
                <i className={"fas fa-times-circle img img"+index}></i>
                <div style={style}>
                <h2>Ошибка</h2>
                <p>При загрузке данных произошла ошибка</p>
                </div>
            </div>
        )
    }else if (index === 3){
        return (
            <div className={'toast toast'+index}>
                <i className={"fas fa-exclamation-circle img img"+index}></i>
                <div style={style}>
                <h2>Прежупреждение</h2>
                <p>Вход в ваш аккаунт был совершен с другого устройства.</p>
                </div>
            </div>
        )
    }



}