import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

// web socket
const client = new W3CWebSocket('ws://localhost:3600');
// const client = new W3CWebSocket(`ws://localhost:${process.env.PORT}`);

function Table() {
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('data from back-end ', dataFromServer);
      // if (dataFromServer.type === "message") {
      //   this.setState((state) =>
      //     ({
      //       messages: [...state.messages,
      //       {
      //         msg: dataFromServer.msg,
      //         user: dataFromServer.user
      //       }]
      //     })
      //   );
      // }
    };
  }, []);
  return <div className="App">testing</div>;
}

export default Table;
