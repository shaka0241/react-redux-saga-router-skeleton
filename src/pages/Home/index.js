import React, { useState } from 'react';
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core'

export default () =>{
	const [searchText, setSearchText] = useState('');
	const handleSearchTextChange = event => {
		setSearchText(event.target.value);
	};
	const handleCleanTextClick = event => {
		console.log('10');
	};
	const handleSearchTextClick = event => {
		console.log('10');
	};
	return(
		<Container>
		<Card>
			<Grid container>
				<Grid>
					<Typography> Bienvenido! </Typography>
				</Grid>
				<Grid>
					<label>
					Icono
					</label>
				</Grid>
			</Grid>
			<TextField value={searchText}
			placeholder="Buscar..."
			onChange={handleSearchTextChange}/>
			<Grid>
				<Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button> 
				<Button variant="contained" color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
			</Grid>
		</Card>
	</Container>
	)
}