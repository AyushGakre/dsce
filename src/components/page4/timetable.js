import React, {useState} from 'react'
import Imgdata from '../imgdata';
import '../page4/timetable.css';
import Header from "../../pages/header.js"
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';
function Timetable() {

    const [selectedSection, setSelectedSection] = useState(null);
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

  return (
    <div>
    <Header/>
    <div style={{height:"69vh"}} >
       
       
    
       <div className="trdyr">
      <center>
        <h3> 3rd year time table</h3>
        </center>
     </div>

       <div className='secbtn'>
        <button onClick={() => handleSectionClick('sec-3A')} className ="button-86 red" > Sec-A</button>
        <button onClick={() => handleSectionClick('sec-3B')}  className ="button-86 blue"> Sec-B</button>
       </div>
   
      {/* apering section of timetable */}
      {selectedSection && <Imgdata section={selectedSection}/>}
 
    </div>
     <Footer/> <MyChatbot/>
     </div>
  )


}

export default Timetable
