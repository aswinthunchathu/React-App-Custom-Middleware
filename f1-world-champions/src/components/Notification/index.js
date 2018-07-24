import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {defaultSettings} from './defaultSettings';

export const notify =  {
  show : ({ heading, message, type, timeout }) => {
    let target = document.getElementById(defaultSettings.wrapperId);
    ReactDOM.render(<Toast
      heading={heading} message={message} type={type} 
      timeout={timeout}/>, target);
    setTimeout(() => {
       notify.hide();
    }, timeout ? timeout : defaultSettings.timeout);
  },
  hide : () => {
    let target = document.getElementById(defaultSettings.wrapperId);
    ReactDOM.unmountComponentAtNode(target);
  }
}

class Toast extends Component {
  render() {
    const { heading, message, type } = this.props;
    const style = defaultSettings.colors[type];
    return (
      <div style ={style}
       className="notification-tile  m-0 mb-2 shadow-sm">
        <div className="d-flex justify-content-between pb-2">
          <h5 className="m-0">{heading}</h5>
          <button type="button" title="close" className="notification-close">
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
        <div>
          {message}
        </div>
      </div>
    );
  }
}

class Notification extends Component {
  render() {
    return (
      <div id={defaultSettings.wrapperId} 
      style={{zIndex : defaultSettings.zIndex}}
      className="position-fixed app-notification">
      </div>
    );
  }
}

export default Notification;
