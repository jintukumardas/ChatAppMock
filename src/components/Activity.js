import { makeStyles } from '@mui/styles';
import { Typography, Grid, Divider } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#E6F3FF',
    padding: theme.spacing(2),
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  activityLine: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '100px',
    marginBottom: theme.spacing(1),
  },
  activityBar: {
    width: '100%',
    height: ({ activityHeight }) => activityHeight,
    backgroundColor: '#1976d2',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    '& svg': {
      color: '#fff',
    },
  },
}));

function ActivityGraph() {
  const activityData = [8, 2, 4, 6, 3, 7, 1];
  const classes = useStyles();
  const maxActivity = Math.max(...activityData);
  const activityHeightRatio = 100 / maxActivity;

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.heading}>
        <InfoOutlined />
        Current Week Activity
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <Grid item xs={1} key={day}>
            <Typography variant="body2" align="center">{day}</Typography>
            <div className={classes.activityLine}>
              <div className={classes.activityBar} style={{ height: activityData[index] * activityHeightRatio }}>
                <InfoOutlined fontSize="large" />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ActivityGraph;
