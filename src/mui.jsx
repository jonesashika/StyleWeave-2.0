import React from 'react'
// import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// import ChurchIcon from '@mui/icons-material/Church';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import Paper from '@mui/material/Paper';
//  function HomeIcon(props: SvgIconProps) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }
// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

 
const mui = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  return (
    <>
     <div>

       <Stack direction="row" spacing={3}>
          <HomeIcon />
          <HomeIcon color="primary" />
          <HomeIcon color="secondary" />
          <HomeIcon color="success" />
          <HomeIcon color="action" />
          <HomeIcon color="disabled" />
          <HomeIcon sx={{ color: pink[500] }} />
        </Stack>
      </div>
      <div>



        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

      </div>
      <div>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint />
          </IconButton>
          <IconButton aria-label="fingerprint" color="success">
            <Fingerprint />
          </IconButton>
        </Stack>
      </div>
      <div>
        <ButtonGroup variant="outlined" aria-label="Loading button group">
          <Button>Submit</Button>
          <Button>Fetch data</Button>
          <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Box>
      </div>
      <div>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0bIMZ71HVeR5zF4PihQaDvTQQk6bsVERw&s" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYcPCwvXj0Hw45RIS47oLwDWmN0gWiyxKeA&s" />
          <Avatar alt="Cindy Baker" src="data:image/png;base64,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" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </div>
     
      {/* <div>

        const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 70 },
        {field: 'firstName', headerName: 'First name', width: 130 },
        {field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
  },
        {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
        ];

        const rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        {id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        ];

        const paginationModel = {page: 0, pageSize: 5 };
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>

      </div> */}
       <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
     <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
    </>
  )
}

export default mui
