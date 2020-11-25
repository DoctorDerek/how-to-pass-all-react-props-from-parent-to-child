import React from "react"

import DisplayAllProps from "./DisplayAllProps"
import GrandChild from "./GrandChild"

const ChildComponent = ({ name }) => (
  <section>
    <h1>ChildComponent's props:</h1>
    <DisplayAllProps name={name}></DisplayAllProps>
    <GrandChild name={name}></GrandChild>
  </section>
)

export default ChildComponent
