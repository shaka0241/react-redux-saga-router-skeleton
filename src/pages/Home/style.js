import {makeStyles} from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
   };

export default makeStyles ({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centeredStyleObj
    },
    tittleGridContainer:{
       ...centeredStyleObj 
    },
    tittle:{
        fontSize: '4rem'
     },
     textFieldSearch:{
         width: '90%'
     },
     searchButton:{
         marginLeft: '.5rem'
     },
     buttonsContainer: {
         marginTop: '.5rem'
     }
});