import React from 'react'
import  './resumes.css'
import useStyles from '../../Styles/ResumesStyles'
import { CardMedia, Container,CssBaseline,Button } from '@material-ui/core'
import { Typography,Card,CardActions,CardContent,Grid} from '@mui/material'
import { db ,auth} from '../firebase-config'
import { collection,getDocs ,getDoc, doc,deleteDoc} from 'firebase/firestore'
import { useUserAuth } from '../../context/UserContextAuth';
import { useEffect,useState} from 'react'
import { onAuthStateChanged} from "firebase/auth";
import { async } from '@firebase/util'
import { Link } from 'react-router-dom';




const Resumes = () => {
    const A=[1,2,3,4,5,6,7,8,9,10]
    //Import User
    const [result, setResults] = useState([]);
    const{user} = useUserAuth();
    let myResumes=[];
    const [ d,setD]= useState(0);

  //collection Ref
    useEffect(()=>{
        getData();
    },[,d])
    
  
  //get Docs
  const getData = async()=>{
    const cvsRef = collection(db,'Users',user.email,'cvs');
    const docSnap = await getDocs(cvsRef)
    let cvs = []
      docSnap.forEach((doc)=>{
        cvs.push({...doc.data(),id:doc.id})
        myResumes.push({...doc.data(),id:doc.id})
        
      })
     setResults(myResumes)
     

  }
  console.log(result[0])
   const printId=(id)=>{
    console.log(id)
  }
  const handleDelete = async(id)=>{

    
    console.log(id)
    await deleteDoc(doc(db,'Users',user.email,'cvs',id));
    setD(d+1)
   
  }
      const index=0;

    console.log(result);
    const confirmDelete=()=>{
      return window.confirm("Are you sure you want to delete this resume ?");
    }
   


      
  return (
      <div>
      <table className=" table  table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Actions:</th>
          </tr>
        </thead>
        <tbody>
          {result.map((cv) => (
            <tr>
            <th scope="row">{result.indexOf(cv)+1}</th>
            <td>{cv.resumeName} </td>
            <td>{cv.date}</td>
            <td >
            <Link to = {`/view/${cv.id}`}>
                <button type="button" class="btn btn-light">
                View
                </button>
            </Link>
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button"
             class="btn btn-danger"
             onClick={()=>{handleDelete(cv.id);confirmDelete()}}>
              Delete
              </button>


            </td>
          </tr>

          ) )}
          
         
        </tbody>
      </table>
      


      </div>










      /*
    { <div className='principal'>
      <div className='container'>
            <div className='row g-2'>
              
            {   result.map((cv)=>(
              
                <div className='col-12 col-md-6 col-lg-4'>
                <div class="card">
                <img class="card-img-top" src="https://binaries.templates.cdn.office.net/support/templates/en-sg/lw00002110_quantized.png" alt="Card image cap"/>
                <h5 class="card-title">Card title</h5>
                <div class="card-body">
                  <Link to = {`/view/${cv.id}`}>
                <button type="button"
                 class="btn btn-link" 
                 onClick={printId(cv.id)}>View
                 </button>
                 </Link>

                <button type="button" 
                class="btn btn-link">
                  Edit
                  </button>

                <button type="button"
                 class="btn btn-link"
                onClick={()=>onDelete(cv.id)}>Remove</button>
                </div>
                  </div>
                </div>
                 ))}
              

            </div>
            </div> 

          
            
        
        </div> }
        */
         
          )
}
  

export default Resumes

/* {myResumes.map((resume)=>{
  <div>
   <h1 key={resume.id}>{resume.firstName}</h1>
 </div>
})} */