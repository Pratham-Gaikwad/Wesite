import "./skills.css"
import SkillBar from 'react-skillbars';
const Skills = () => {

  const TechinicalSkills =[
    { type: 'Python', level: 100 },
    { type: 'C++', level: 85 },
    { type: 'HTML', level: 75 },
    { type: 'Css', level: 50 },
    { type: 'Javascript', level: 25 },
    { type: 'Linux', level: 20 },
    { type: 'DBMS', level: 0 }
  ];
  const colors = {
    bar: "#84b289",
    title: {
      text: "'#bdffd9'",
      background: "#5c7c66"
    }
  };
  
  return (
    <div className="main-skill">
      <h1 className='heading-skills'> My Skills </h1>
      <div className="Techinical-1">
        <div className="techHead">Techinical Skills :</div>
        <SkillBar skills={TechinicalSkills} height={30} colors={colors} symbolColor={'#bdffd9'}/>
      </div>
      <div className="Softskill-1">
        <div className="softHead"> Soft Skills :</div>
      </div>

    </div>
  )
}

export default Skills
