import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core'

const MovieResult = ({ Title, Year, Type, imdbID, Poster}) => {
    return (
        <Card>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} />
                </Grid>
                <Grid item>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                        <Button>Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    );
}

export const MovieResult;