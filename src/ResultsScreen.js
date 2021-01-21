import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { PuppyCard } from './PuppyCard'

const useStyles = makeStyles((theme) => ({
  sorry: {
    marginBottom: theme.spacing(4),
  },
  puppyCard: {
    width: theme.spacing(75),
    maxWidth: '100%',
    margin: 'auto',
    marginTop: theme.spacing(4),
  },
  resetButton: {
    marginTop: theme.spacing(4),
  },
}))

export const ResultsScreen = ({ likedPuppies, resetTinderApp }) => {
  const classes = useStyles()

  const matchedPuppy =
    likedPuppies[Math.floor(Math.random() * likedPuppies.length)]

  return (
    <>
      {matchedPuppy ? (
        <>
          <Typography gutterBottom variant="h4" component="h2">
            Felicitaciones! Usted es compatible con...
          </Typography>
          <div className={classes.puppyCard}>
            <PuppyCard puppy={matchedPuppy} />
          </div>
        </>
      ) : (
        <>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={classes.sorry}
          >
            Lo siento...
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            No hay ningun cachorro compatible contigo.
          </Typography>
        </>
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.resetButton}
        onClick={resetTinderApp}
      >
        Iniciar de nuevo
      </Button>
    </>
  )
}