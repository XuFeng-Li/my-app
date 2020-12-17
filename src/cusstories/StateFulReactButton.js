import React from 'react';

export const StateFulReactButton = ({...props}) => {
    return (
        <button
            {...props}
        >
            react stateful button
        </button>
    );
};

StateFulReactButton.defaultProps = {
    onClick: undefined,
};
/*


class StateFulReactButton extends Component {
    render() {
        const { handleOnclick } = this.props;
        return (
            <button onClick={handleOnclick}>react stateful button</button>
        );
    }
}

export default StateFulReactButton;

*/
