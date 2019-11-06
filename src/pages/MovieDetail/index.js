import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById, searchMovie } from '../../redux/actions/search';

export default ( { match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const movieId =  match.params.id
        dispatch(searchMovieById({movieId}));
    });
    
    return (
        <Container>
            MovieDetail
        </Container>
    )
}