import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => (
  <Link to={`/about/${character.id}`} style={{ textDecoration: "none" }}>
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image={character.image}
          alt="character"
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 10, fontWeight: "bold" }}
            variant="string"
            component="div"
          >
            {character.name}
          </Typography>
          <Typography
            sx={{ fontSize: 8 }}
            variant="string"
            color="text.secondary"
          >
            Species: {character.species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

export default CharacterCard;
