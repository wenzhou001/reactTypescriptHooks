import React from 'react';
import classNames from 'classnames';
//枚举定义常量
export enum ButtonSize{
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

//接口定义属性类型
interface BaseButtonProps{
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode;
    href?:string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button:React.FC<ButtonProps> = (props) => {
    const {
        btnType, disabled, size , children, href, className,...restProps
    } = props;
    const classes = classNames('btn', className ,{
        [`btn-${btnType}`] : btnType,
        [`btn-${size}`] : size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })
    if(btnType === ButtonType.Link && href){
        return(
        <a {...restProps} className={classes} href={href}>{ children}</a>
        )
    }else{
        return(
        <button {...restProps} className={classes} disabled={disabled}>{children}</button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button;