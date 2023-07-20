import Drum from './components/Drum';

function App() {

  return (
    <div id='drum-machine' className='w-screen h-screen flex items-center justify-around  '>
      <Drum />
      <div className='w-4/12 h-5/6 mx-5 p-2 bg-slate-600 rounded-lg shadow-inner '>
        <div className='w-full text-center my-6 text-5xl font-semibold text-white'>
          Drum Machine
        </div>

      </div>
    </div>
  );
}

export default App;
