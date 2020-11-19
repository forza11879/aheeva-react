import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { getData } from './utility.js';
import Table from './table.jsx';

const urlWebSocket = `ws://localhost:${process.env.REACT_APP_PORT}`;
const url = `http://localhost:${process.env.REACT_APP_PORT}`;

// web socket
const client = new W3CWebSocket(urlWebSocket);

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
      <button onClick={() => getData(url)}>Connect</button>
    </React.Fragment>
  );
}

export default TableComponent;
