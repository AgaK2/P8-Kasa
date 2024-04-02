import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Carrousel from "../components/Carrousel"
import Collapse from '../components/Collapse'
import Tags from '../components/Tags'
import Host from '../components/Host'
import Rate from '../components/Rate'
import "../styles/Logement.css"

function Logement() {
    const [logementData, setLogementData] = useState(null)
    const { id } = useParams() //ID właściwości, dla której pobierane są slajdy
    

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(data => setLogementData(data))
            //.catch(error => console.error(error))
            console.log(id) 
    }, [id])

    if (!logementData) {
        return <div>Loading...</div>
    }

    return (
        <div className="logement">
            
            <Carrousel images={logementData.pictures} />
            <div className='logement_title_host'>
                <div>
                    <h2 className="logement_title">{logementData.title}</h2>
                    <p className="logement_location">{logementData.location}</p> 
                    <Tags tags={logementData.tags}/>
                </div>
                <div className="logement_host_rate">
                    <Host host={logementData.host} />
                    <Rate rate={logementData.rating} />
                </div>
            </div>
            <div className="logement_collapse">
            <Collapse 
                title="Description"
                content={logementData.description} 
            />
            <Collapse 
                title="Équipments"
                content={logementData.equipments}
            />
            </div>
        </div>
    )
}

export default Logement

//<Carrousel images={logementData.pictures} />
//         
//
//

// import Carrousel from "../components/Carrousel"

// function Logement() {

    
//     return (
//         <div>
//             <Carrousel />
//         </div>
//     )
// }

// export default Logement

