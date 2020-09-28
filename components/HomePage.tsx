import { Container, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h1" gutterBottom={true}>
        To? Do!
        <div style={{ float: 'right' }}>right</div>
      </Typography>

      <Paper elevation={2}>Paper</Paper>
    </Container>
  );
};

export default HomePage;
