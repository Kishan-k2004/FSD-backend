import React from 'react'
import Register from './component/Register'
import View from './component/View'
import Delete from './component/Delete'
import Update from './component/Update'

const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register/>
      <View />
      <Delete />
      
    </div>
  )
}

export default App