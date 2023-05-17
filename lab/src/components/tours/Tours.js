import './Tours.css'
import Tour from './tour/Tour'
const data = require('../../data/db.json')

function Tours(){
  // const[city, setCity]=useState()
    return(
        <>

           {
             props.arrayData.map((item,i) => {
              console.log(item.image)
               return(
               <div key={i}>
                    <h3>{item.name}</h3>
                    <p>{item.id}</p>
                    <p>{item.info}</p>
                    <p>{item.price}</p>
                    <img src={item.image} alt={item.name} />
                </div>
                )
             })
           }

        </>
    )
}

export default Tours 