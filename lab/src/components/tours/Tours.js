import './Tours.css'
import Tour from './tour/Tour'
const data = require('../../data/db.json')

function Tours(){
  // const[city, setCity]=useState()
    return(
        <>
        {
          data.map((item,i)=>{
            return(
              <div key={i}>

                <Tour city={item}/>
              </div>
            )
          })
        }
        {/* <Tour imag={data.name}/> */}
       
        </>
    )
}

export default Tours 