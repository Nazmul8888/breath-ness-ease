
import mission1 from '../../../assets/mission/mission -1.jpg'
import mis2 from '../../../assets/mission/mission -2.jpg'
import mis3 from '../../../assets/mission/mission-3.jpg'
import mis4 from '../../../assets/mission/mission-4.jpg'

// import { useEffect, useState } from "react";


const OurMission = () => {
    // const [mission, setMission] = useState([]);

    // useEffect(()=>{
    //     fetch('mission.json')
    //     .then(res=> res.json())
    //     .then(data=> setMission(data))
    // },[])
    return (
        <div>
         <img src="https://i.ibb.co/gDM8N3Z/flyer-with-copyspace-portrait-young-caucasian-woman-isolated-with-copyspace.jpg" alt="" />
        <div className='py-10'>
            <div className=' flex justify-evenly items-center'>
            <div>
                <div className=' flex '>
                    <div>
                    <img src={mission1} alt="" />
                    </div>
                    <div className=''>
                    <p>The aim of the foundation is to offer relief</p> 
                    <p>and support for Astham sufferes who are</p> 
                    <p>unable to afford payment for the right treatment.</p>
                    </div>
                </div>
                <br />
                <div className=' flex '>
                    <div>
                    <img src={mis2} alt="" />
                    </div>
                    <div>
                    <p>The aim of the foundation is to offer relief</p> 
                    <p>and support for Astham sufferes who are</p> 
                    <p>unable to afford payment for the right treatment.</p>
                    </div>
                </div>
                </div>
                <div>
                <div className=' flex '>
                    <div>
                    <img src={mis3} alt="" />
                    </div>
                    <div>
                    <p>The aim of the foundation is to offer relief</p> 
                    <p>and support for Astham sufferes who are</p> 
                    <p>unable to afford payment for the right treatment.</p>
                    </div>
                </div>
                <br />
                <div className=' flex '>
                    <div>
                    <img src={mis4} alt="" />
                    </div>
                    <div>
                    <p>The aim of the foundation is to offer relief</p> 
                    <p>and support for Astham sufferes who are</p> 
                    <p>unable to afford payment for the right treatment.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
          
    );
};

export default OurMission;