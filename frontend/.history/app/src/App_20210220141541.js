import './App.css';
import BooskManageView from './components/BooskManageView';

function App() {

  const [id, setId] = useState(1)
  const [bookList, setBookList] = useState({
    'title':'',
    'updated_at': ''
  })
  // Get Books Data
  const GetBooksData = () => {
    axios.get(`http://127.0.0.1:8000/api/books/${id}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <BooskManageView />
      </header>
    </div>
  );
}

export default App;
