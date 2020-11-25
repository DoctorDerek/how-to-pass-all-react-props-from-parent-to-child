import React from "react"

const DisplayAllProps = (props) => (
  <table>
    <tbody>
      {Array.from(Object.entries(props)).map(([key, value]) => (
        <tr key={key + Math.random()}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default DisplayAllProps
