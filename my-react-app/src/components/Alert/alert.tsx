import React from 'react';


//属性：标题，内容，显示/隐藏
//样式：success default danger warning
//事件：点击
export enum AlertType {
    Success = 'success',
    Defalut = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

//接口定义属性类型
export interface BaseAlertProps{
    title:string;
    content?:string;
    showAlert?:boolean;
}
const Alert: React.FC<BaseAlertProps> = (props) =>{
    const { title, content, showAlert } = props;
    return(
        <div>
            {
                showAlert &&
            <div>{title}{content}</div>
            }
        </div>
    )
}

export default Alert;