import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paperTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchIcon: {
    position: 'absolute',
    right: theme.spacing(2),
    color: '#999'
  },
  paper: {
    position: 'relative',
    padding: theme.spacing(2),
    overflow: 'auto'
  },
  addNewItemFab: {
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    position: 'fixed',
    '& *': {
      marginRight: theme.spacing(1)
    }
  }
}));

export default useStyles;
