import React from "react"
import "./styles.css"
import ChildComponent from "./ChildComponent"

const App = () => (
  <div className="App">
    <ChildComponent name="Johnny" job="👨‍🎤">
      🌟
    </ChildComponent>
  </div>
)

export default App
