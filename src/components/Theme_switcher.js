import React, { useState } from 'react'
import styled from 'styled-components'

const SwitcherContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  position: relative;
  gap: 1em;
  button {
    position: absolute;
    right: 180px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 50px;
    width: 67px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 2px;
    svg {
      position: absolute;
      left: ${(props) => props.circule_left_position}px
    }
  }
  h1 {
  }
  p {
    font-weight: bold;
  }
`

export default () => {

  const [switcher, setSwitcher] = useState(0)
  // {switcher = 0 ? setSwitcher(40) : setSwitcher(0)}

  return (
    <SwitcherContainer circule_left_position={switcher}>
      <button onClick={() => {{switcher === 0 ? setSwitcher(40) : setSwitcher(0)}}}>
        <img src="/assets/moon.svg" alt="Moon"></img>
        <img src="/assets/sun.svg" alt="Sun"></img>
        <svg height="28" width="28">
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke="black"
            strokeWidth="0"
            fill="white"
          />
        </svg>
      </button>
      <h1>Theme Switcher</h1>
      <p>lorem</p>
    </SwitcherContainer>
  )
}
