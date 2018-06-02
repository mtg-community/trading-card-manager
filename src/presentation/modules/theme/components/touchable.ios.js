import React from 'react'
import { TouchableOpacity } from 'react-native'

export const Touchable = props => {
  return (
    <TouchableOpacity onPress={props.onPress} {...props}>
      {props.children}
    </TouchableOpacity>
  )
}
