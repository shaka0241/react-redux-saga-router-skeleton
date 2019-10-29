import React, { useState } from 'react';
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core'

import styles from './style'
export default () =>{
	const [searchText, setSearchText] = useState('');
	const classes = styles();

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
		<Container className={classes.container}>
		<Card className={classes.cardContainer}>
			<Grid container className={classes.tittleGridContainer}>
				<Grid>
					<Typography className={classes.tittle}> Bienvenido! </Typography>
				</Grid>
				<Grid>
					<label>
					Icono
					</label>
				</Grid>
			</Grid>
			<TextField value={searchText}
			className={classes.textFieldSearch}
			placeholder="Buscar..."
			onChange={handleSearchTextChange}/>
			<Grid className={classes.buttonsContainer}>
				<Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button> 
				<Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
			</Grid>
		</Card>
	</Container>
	)
}