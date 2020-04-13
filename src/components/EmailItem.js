import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class EmailItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRead: false
        }
    }

    mailRead = () => {
        this.setState({
            isRead: true
        })
    }

    render() {
        const divClassNameRead = this.state.isRead ? "email-item pure-g" : "email-item email-item-unread pure-g";
        return (
            <div class={divClassNameRead} onClick={this.mailRead}>
                <div class="pure-u">
                    <img width="64" height="64" alt={`${this.props.name}&#x27; avatar`} class="email-avatar" src={this.props.image} />
                </div>

                <div class="pure-u-3-4">
                    <h5 class="email-name">{this.props.name}</h5>
                    <h4 class="email-subject"><Link to={this.props.mailPath}>{this.props.subject}</Link></h4>
                    <p class="email-desc">
                        {this.props.content}
                    </p>
                </div>
            </div>
        )
    }
}

export default EmailItem;