import React from 'react'
import '../components/imgdata.css';

const Imgdata = ({section}) => {
    const imagePath = `/timetables/${section}.jpg`;

    return (
        <div className='bigdiv-image'>
            <div className="timetable-container">
                <a href={imagePath} download className='download-button'>
                    Download 
                </a>
                <img src={imagePath} className='timetable-image' alt={`Timetable for Section ${section}`} />
              
            </div>
        </div>
    )
}

export default Imgdata;
