import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const showMessage = (type, msg, title = null) => {
  switch (type) {
    case 'info':
      NotificationManager.info(msg, title);
      break;
    case 'success':
      NotificationManager.success(msg, title);
      break;
    case 'warning':
      NotificationManager.warning(msg, title);
      break;
    case 'error':
      NotificationManager.error(msg, title);
      break;
  }
}

export {
  showMessage,
};