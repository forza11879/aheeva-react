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
      setCallData((oldArray) => [
        ...oldArray,
        {
          timestamp: Date.now(),
          id: dataFromServer.id,
          duration: dataFromServer.duration,
        },
      ]);
    };
  }, [callData]);

  console.log('callData: ', callData);

  return (
    <React.Fragment>
      <Table callData={callData} />
    </React.Fragment>
  );
}

export default TableComponent;
