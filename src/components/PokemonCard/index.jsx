import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PokemonCard({ name, image, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`/assets/${types[0].type.name} type.ico`}
            alt={types[0].type.name}
            style={{ width: "30px", height: "30px" }}
          />
          <img
            src={`/assets/${types[1].type.name} type.ico`}
            alt={types[1].type.name}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      );
    }
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={`/assets/${types[0].type.name} type.ico`}
          alt={types[0].type.name}
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    );
  };

  //return `./assets/${types[0].type.name}`
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 220 }} image={image} title="Pokémon" />
      <CardContent>
        <div style={{ textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="OCR A Std, monospace"
          >
            {name}
          </Typography>
        </div>
        <Typography gutterBottom variant="caption" component="div">
          {typeHandler()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
