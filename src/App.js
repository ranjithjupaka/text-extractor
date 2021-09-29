
import './App.css';

function App() {
  return (
    <div className='d-flex justify-content-center mt-5 mb-4'>
      <div className='form-group mt-5'>
        <h2 className='text-center'>Text Extractor</h2>
        <label className='btn btn-secondary '>
          <input type='file' accept='image/*' name='photo' />
        </label>
      </div>
    </div>
  )
}

export default App;
