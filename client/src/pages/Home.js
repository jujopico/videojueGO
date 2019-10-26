import React from 'react'
import { Redirect } from 'react-router-dom'

class MyComponent extends React.Component {
    state = {
      redirect: false
    }
    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/games' />
      }
    }
    render () {
      return (
         
         
         <div>
         
          {this.renderRedirect()}
          <button className='startSearching'onClick={this.setRedirect}>LETS START SEARCHING</button>
         </div>
      )
    }
  }
export default MyComponent