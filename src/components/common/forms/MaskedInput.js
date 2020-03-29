import React from 'react';
import WarnedMaskedInput from "react-text-mask";

const MaskedInput = props => {
    let {inputRef, ...others} = props;
    return (
        <WarnedMaskedInput {...others}/>
    );
};

export {MaskedInput};