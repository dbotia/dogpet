import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(50),
    maxWidth: '100%',
    margin: 'auto',
  },
  button: {
    marginTop: theme.spacing(4),
  },
}))

export const WelcomeScreen = ({ handleGetStartedClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <p><b><h1>
      Todo dueño de un perro quiere encontrar los amigos perfectos para su nuevo cachorro.
        ¡Ahora tenemos una aplicación para eso!
        </h1></b></p>
      <p><b>
      Navegue a través de varios perfiles de cachorros y pase el dedo por la derecha o la izquierda para encontrar tu nuevo amigo cachorro.
      </b></p>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleGetStartedClick}
      >
       Iniciemos
      </Button>
      <p><b>
     Desarrollado por: DIEGO JOSE LUIS BOTIA.  Curso ARQUITECTURA DE SOFTWARE 2021
      </b></p>
    </div>
  )
}