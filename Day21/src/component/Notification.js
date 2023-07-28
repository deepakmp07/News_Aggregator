import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
  const handleSendNotification = () => {
    toast('Hello, there!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={handleSendNotification}>Send Notification</button>
      <ToastContainer />
    </div>
  );
}

export default Notification;
