import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import teal from '@material-ui/core/colors/teal'
import indigo from '@material-ui/core/colors/indigo'

const themes = [
  {
    id: 'default',
    color: blue[500]
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red
      }
    }
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red
      }
    }
  },
  {
    id: 'Teal',
    color: teal[500],
    source: {
      palette: {
        primary: teal,
        secondary: indigo,
        error: red
      }
    }
  }
]

export default themes
