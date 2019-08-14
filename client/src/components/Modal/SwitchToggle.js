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
            <label>
                <span>In Stock</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>
        );
    }
}

export default SwitchToggle;