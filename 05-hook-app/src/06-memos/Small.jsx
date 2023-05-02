import { memo } from "react"
import React from "react"

export const Small = React.memo(({ value }) => {

    console.log('I draw again')

  return (
    <small>{ value }</small>
  )
})
