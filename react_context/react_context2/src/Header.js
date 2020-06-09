import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
  return(
    <ThemeContextConsumer>
      {theme => (
        <header className={`${theme}-theme`}>
          <h2 style={light}>{theme ==="light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  )
}
export default Header
