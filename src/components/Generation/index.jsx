import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function GenSelect() {

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" >1</Button>
        <Button variant="outlined" >2</Button>
        <Button variant="outlined" >3</Button>
        <Button variant="outlined" >4</Button>
        <Button variant="outlined" >5</Button>
      </Stack>
    </div>
  );
}
