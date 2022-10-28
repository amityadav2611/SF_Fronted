import axios from 'axios'
import './table.css'

export default function Table ({data}) {

    //DATA = [{},{},{},{}]
    // WILL USE MAP TO REPEATE THE ROWS IN TABLE FOR EACH OBJECT

    const handleDlete = async (newsId) => {
        // will hit one put api will take this id and delete that perticulat news 
       await  axios.put('/delete-news',{newsId})
    }



    return(
            <table>


                <thead>
                    <tr>
                        <th>newsTitle</th>
                        <th>newsDetails</th>
                        <th>Date</th>
                        <th>Detele</th>
                    </tr>
                </thead>


                
                
    {data.map(dataObj => (
        <tbody>
            <tr>
                <td rowspan={3}>{dataObj.newsTitle}</td>
                <td rowspan={3}>{dataObj.newsDetails}</td>
                <td rowspan={3}>{dataObj.publishDate}</td>
                <td>
                    <button 
                        onClick={ () => handleDlete (dataObj._id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
     ))} 
</table>



    )

}