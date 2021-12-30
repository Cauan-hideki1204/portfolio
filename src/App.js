import './App.css';

const App = () => {
  return (
    <div className='container'>
      <header className="App-header">
        <div className="App">
          <h1 className='name'>Cauan Hideki Fumoto</h1>
          <div className='containerButton'>
            <button
              type='text'
              className='Button'
            >
              <a
                className="App-link"
                href="https://github.com/Cauan-hideki1204"
                target="_blank"
                rel="noreferrer"
              >
                Meu GitHub
              </a>
            </button>
            <button
              type='text'
              className='Button'
            >
              <a
                className="App-link"
                href="https://www.instagram.com/cauanfumoto/"
                target="_blank"
                rel="noreferrer"
              >
                Meu Instagram
              </a>
            </button>
            <button
              type='text'
              className='Button'
            >
              <a
                className="App-link"
                href="https://www.linkedin.com/in/cauan-fumoto-6363a31ab/"
                target="_blank"
                rel="noreferrer"
              >
                Meu Linkedin
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
