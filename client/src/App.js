import React from 'react'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import GameList from './pages/GameList'
import SingleGame from './pages/SingleGame'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={GameList} />
      <Route path="/games/:id" component={SingleGame} />
    </Switch>
  </BrowserRouter>
)

export default App









// class App extends React.Component {
//   state = { serverMessage: '' }

//   componentDidMount(){
//     fetch('/api/demo')
//       .then(response => response.json())
//       .then(data => this.setState({ serverMessage: data.message }))
//   }

//   render(){
//     return (
//       <div id="demo">
//         <h1>Hello from client/src/App.js</h1>
//         <h1>{this.state.serverMessage}</h1>
//       </div>
//     )
//   }
// }

