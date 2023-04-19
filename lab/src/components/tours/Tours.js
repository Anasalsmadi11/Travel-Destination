
function Tours(props){
    return(
        <>
           {
             props.arrayData.map((item,i) => {
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