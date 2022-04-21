import React, {memo} from 'react'
import PropTypes from 'prop-types'
import {Card as CardUI} from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

function Card({value, lable, color}) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{lable}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)