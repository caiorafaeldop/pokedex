import React from "react";
import { Button, Stack } from "@mui/material";

export default function GenSelect({ onSelectGeneration }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => onSelectGeneration(1)}>
          1
        </Button>
        <Button variant="outlined" onClick={() => onSelectGeneration(2)}>
          2
        </Button>
        <Button variant="outlined" onClick={() => onSelectGeneration(3)}>
          3
        </Button>
        <Button variant="outlined" onClick={() => onSelectGeneration(4)}>
          4
        </Button>
        <Button variant="outlined" onClick={() => onSelectGeneration(5)}>
          5
        </Button>
      </Stack>
    </div>
  );
}
