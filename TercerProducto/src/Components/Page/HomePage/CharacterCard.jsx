import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function CharacterCard({ image, name, status, species, gender, location, origin }) {
  return (
    <Card className="character-card">
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2"><strong>Estado: </strong><font color="blue">{status}</font></Typography>
        <Typography variant="body2"><strong>Especie: </strong><font color="blue">{species}</font></Typography>
        <Typography variant="body2"><strong>Género: </strong><font color="blue">{gender}</font> </Typography>
        <Typography variant="body2"><strong>Localización: </strong><font color="blue">{location}</font> </Typography>
        <Typography variant="body2"><strong>Origen: </strong> <font color="blue">{origin}</font></Typography> 
        
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
