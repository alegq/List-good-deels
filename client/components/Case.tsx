import React from 'react';

type Props = {
    text: string;
    code: number;
};

const Case:  React.FC<Props>= (props) => {
    return (
        <div>
            {props.code}.
            {props.text}
        </div>
    );
};

export default Case;