import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.div`
  background-color: #457667;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-right: 20px;
      a {
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-weight: bold;
        font-family: "Helvetica Neue",Helvetica;
      }
    }
  }
`

export default () => {
  return (
    <Header>
      <ul>
        <li>
          <Link to="/">Theme Switcher</Link>
        </li>
        <li>
          <Link to="/todolist">Todolist</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </Header>
  )
}
