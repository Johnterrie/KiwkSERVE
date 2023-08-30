import './App.css';
import Dashboard from './Dashboard';

const App = ({data}) => {
  const { professionals, user, pending, completed } = data
  return(


    <div className='App'>
        <Dashboard user = {user} professionals = {professionals} pending = {pending} completed = {completed}/>
        </div>
  )
}

export default App;