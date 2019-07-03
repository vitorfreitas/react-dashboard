import React from 'react';
import FeedbackCard from './FeedbackCard';
import { Grid } from '@material-ui/core';

const cards = [
  {
    id: 1,
    user: 'John Doe',
    message: 'I Really Like your product. Keep doing it!'
  },
  { id: 2, user: 'Jane Doe', message: 'It helped me a lot. I love it!' },
  { id: 3, user: 'Jack Jackson', message: 'This product really saved me!' },
  { id: 4, user: 'James Jameson', message: 'Just AWESOME!' }
];

const Feedbacks = () => {
  const anwserCardClient = data => {
    console.log(data);
  };

  const renderFeedbackCard = data => (
    <Grid key={data.id} xs={4} item>
      <FeedbackCard data={data} onAnswerClick={anwserCardClient} />
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {cards.map(renderFeedbackCard)}
    </Grid>
  );
};

export default Feedbacks;
