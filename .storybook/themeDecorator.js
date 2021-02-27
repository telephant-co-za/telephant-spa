// themeDecorator.js
import React from "react"
import { ThemeProvider, theme } from '@material-ui/core/styles'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator