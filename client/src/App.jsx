import './App.css'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import Provider from './components/Providers';
function App() {
  const [id,setId] = useLocalStorage('id',"");
  return (
    <div className="App">
      { 
        !id ? <Login submitId = {setId} />:<Provider id={id} setId={setId} />
      }
    </div>
  )
}

export default App
