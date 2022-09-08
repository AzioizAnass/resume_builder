
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    container: {
        backgroungColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6),
    
      },
      cardGrid: {
        padding: '20px 0 ',
       

    
      },
      card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    
      },
      cardMedia:{
        paddingTop:'56.25%',
        height:'100%' ,
    
      },
      cardContent: {
          flexGrow: 1,
      }

     



  
}));
export default useStyles;