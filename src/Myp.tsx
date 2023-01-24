import React from 'react';
import { JsxAttribute } from 'typescript';

interface Props {
    text: string,
    children?: JSX.Element
}

function MyP(props: Props) {
    return (
        <p>{props.text} {props.children}</p>
    )
}

export default MyP;