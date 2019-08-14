import React from "react";
import Switch from "react-switch";

class SwitchToggle extends React.Component {


    state = { checked: false };
    handleChange = this.handleChange.bind(this);


    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <div>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </div>
        );
    }
}

export default SwitchToggle;