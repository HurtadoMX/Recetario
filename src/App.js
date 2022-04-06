import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import style from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={'/'}>Delicious App</Logo>
    </Nav>
      <Search/>
      <Category/>
     <Pages/>
    </BrowserRouter>
    </div>
  );
}

const Logo = style(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
const Nav = style.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
