// import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import Table from './table.jsx';

// web socket
const client = new W3CWebSocket(`ws://localhost:${process.env.REACT_APP_PORT}`);

function TableComponent() {
  const [callData, setCallData] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      dataFromServer.map((item) => {
        return setCallData((oldArray) => [
          ...oldArray,
          {
            timestamp: Date.now(),
            id: item.id,
            duration: item.duration,
          },
        ]);
      });
    };
  }, [callData]);

  return (
    <React.Fragment>
      {/* <Sidebar /> */}
      <Table callData={callData} />
      <div>Table</div>
      {/* <Sidebartwo /> */}
    </React.Fragment>
  );
}

export default TableComponent;
