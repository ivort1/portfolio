import * as React from "react";

const Button = (props) => {

  return (
    <a href={props.href} download rel='noopener noreferrer' target='_blank'>
        <button type="button" class={`btn ${props.buttonType}`}><i class={`bi ${props.buttonIcon}`}></i>{props.buttonText}</button>
    </a>
  )
}

export default Button