import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';

const FeedbackCard = ({ onAnswerClick, data }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {data.user}
      </Typography>
      <Typography variant="body2" component="p">
        {data.message}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={() => onAnswerClick(data)}>
        Answer
      </Button>
    </CardActions>
  </Card>
);

export default FeedbackCard;
