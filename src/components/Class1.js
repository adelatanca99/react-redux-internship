import React, { Component } from 'react';

class Class1 extends Component {
    state = {
        userName: 'Adela',
        firstName: 'Maria',
        lastName: 'Tanca'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                userName: 'Adela',
                firstName: 'Maria',
                lastName: 'Tanca'
            });
        }, 5000);
    }

    logName = () => {
        console.log(this.state.userName);
        console.log(this.state.firstName);
        console.log(this.state.lastName);
    };

    handleUserNameInput = e => {
        this.setState({ userName: e.target.value });
    };
    handleFirstNameInput = e => {
        this.setState({ firstName: e.target.value });
    };
    handleLastNameInput = e => {
        this.setState({ lastName: e.target.value });
    };

    render() {
        return (
            <div>
                <h3>This is a Class Component</h3>
                <input
                    type="text"
                    onChange={this.handleUserNameInput}
                    value={this.state.userName}
                    placeholder="Your Username"
                />
                <input
                    type="text"
                    onChange={this.handleFirstNameInput}
                    value={this.state.firstName}
                    placeholder="Your First Name"
                />
                <input
                    type="text"
                    onChange={this.handleLastNameInput}
                    value={this.state.lastName}
                    placeholder="Your Last Name"
                />
                <button
                    className="btn btn-large right"
                    onClick={this.logName}
                >
                    Log Names
                </button>
            </div>
        );
    }
}

export default Class1;