import React from 'react'

export default function Test (props) {
  console.log(props)
    return (
      <ol>
        <li>{props.data}</li>
      </ol>
    )
}
