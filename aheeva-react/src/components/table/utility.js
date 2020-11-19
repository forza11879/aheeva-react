async function getData() {
  await fetch(`http://localhost:${process.env.REACT_APP_PORT}`);
}

export { getData };
