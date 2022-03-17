import styled from 'styled-components'

const Container = styled.div`
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
  }
  h1 {
  }
  p {
    font-weight: bold;
  }
`

export default () => {
  return (
    <Container>
      <button onClick={''}>Toggle</button>
      <h1>Theme Switcher</h1>
      <p>lorem</p>
    </Container>
  )
}
