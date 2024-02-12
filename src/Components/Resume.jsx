import './Resume.css'; 
import { HiAcademicCap , HiBriefcase } from "react-icons/hi";

import {TimeLineElements , TimeLineElements2 } from './TimeLineElements';
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
export default function Resume() {
  let degreeIconStyles = {background : "#06D6A0"};
  let workIconStyles = {background : "f9c74f"}
  return (
    <div className='resume-main'>
      <h1 className='heading-resume'>My Journey</h1>
      <div className='edu'>
        <VerticalTimeline>
          {
            TimeLineElements.map(element =>{
              let isDegreeIcon = element.icon === "degree";
              return(
                <VerticalTimelineElement
                key ={element.key}
                date ={element.date}
                className = 'date'
                // iconStyle = {isDegreeIcon ? degreeIconStyles : workIconStyles }
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon = {isDegreeIcon ? <HiAcademicCap  className='Education'/> : <HiBriefcase className='workexp'/>}
               >
                <h4 className='vertical-timeline-element-title'> 
                {element.title}
                </h4>
                <h5 className='vertical-timeline-element-subtitle'> {element.discription}</h5>
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
      </div>
      <div className='edu2'>
        <VerticalTimeline>
          {
            TimeLineElements2.map(element =>{
              let isDegreeIcon = element.icon === "degree";
              return(
                <VerticalTimelineElement
                key ={element.key}
                date ={element.date}
                className = 'date'
                // iconStyle = {isDegreeIcon ? degreeIconStyles : workIconStyles }
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon = {isDegreeIcon ? <HiAcademicCap  className='Education'/> : <HiBriefcase className='workexp'/>}
               >
                <h4 className='vertical-timeline-element-title'> 
                {element.title}
                </h4>
                <h5 className='vertical-timeline-element-subtitle'> {element.discription}</h5>
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
      </div>
    </div>
  );
}
// <HiAcademicCap /> <HiBriefcase />