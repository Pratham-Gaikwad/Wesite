import './Resume.css'
import {Timeline, TimelineEvent} from 'react-event-timeline'

export default function Resume() {

  return (
    <div className='resume-main'>

    <h1 className='heading-resume'>My Journey</h1>
        
    <div className='edu'>
    <Timeline lineColor='#84b289'>

            <TimelineEvent title="Higher Secondary Education" createdAt="2018 - 2020" icon={<img className="Graduate.svg"/>}>
                Text
            </TimelineEvent>
            <TimelineEvent title="Btech" createdAt="2021 - Present" icon={<img className="Graduate.svg"/>}>
                Text
            </TimelineEvent>
    </Timeline>
    </div>
    </div>
  )
}
