import React from 'react';
import classNames from 'classnames';
//固定的常量，用枚举
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

//接口，用来定义变量的类型
interface BaseButtonProps {
    className?: string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?:string
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const { disabled, size, btnType, children, href } = props;
    const classes = classNames('btn',{
        [`btn-${btnType}`] : btnType,
        [`btn-${size}`] : size,
        'disabled': (btnType === ButtonType.Link ) && disabled
    })
    if(btnType === ButtonType.Link){
        return (
            <a className={classes} href={href}>{children}</a>
        )
    }else{
        return(
            <button disabled={disabled} className={classes}>{children}</button>
        )
    }
}

Button.defaultProps = {
    disabled:false,
    btnType:ButtonType.Default
}

export default Button;
