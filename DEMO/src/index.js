import { App } from './App';

<document.head>
  <style>{`
  .wrapper {
    font-family: sans-serif;
    padding: 25px;
  }

  .toolbar {
    display: flex;
    justify-content: space-between;
    width: 300px;
    padding: 0;
  }

  .field {
    width: 100%;
  }

  .list {
    padding: 0;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-top: 5px;
    padding: 5px;
    word-break: break-all;
    background-color: lightgray;
  }

  .btn {
    white-space: nowrap;
    margin-left: 5px;
  }
`}</style>
</document.head>;

<document.body className="wrapper">
  <App />
</document.body>;
