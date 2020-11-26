import React from "react"

import DisplayAllProps from "./DisplayAllProps"
import GrandChild from "./GrandChild"

const JOBS_LOOKUP = {
  "👨‍🎤": { job: "🎤 Rockstar", pay: "💸 Excellent" }
}

const ChildComponent = (props) => {
  // Partial destructuring of the React props:
  const { job } = props
  // Object composition, combining the original props + a lookup
  const grandChildProps = { ...props, ...JOBS_LOOKUP[job] }
  // Any conflicting properties are replaced with the last-found

  // In this case, job goes from "👨‍🎤" to "🎤 Rockstar" because
  // ...props came before ...JOBS_LOOKUP[job] in the new object.

  return (
    <section>
      <h1>ChildComponent's props:</h1>
      <DisplayAllProps {...props}></DisplayAllProps>
      <GrandChild {...grandChildProps}></GrandChild>
    </section>
  )
}

export default ChildComponent
