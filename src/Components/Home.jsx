  import "./Home.css"
  import Typical from "react-typical"

  export default function Home() {
    const customStyle = {
            color: '#e7a7f5' // Change 'red' to any color value you desire
    }; 
    return (
      <div className="Home-cointainer">
        <div className="title">
          <span className="greetings"> Hello! Im <span className="name">Pratham Gaikwad</span></span>
          <div style={customStyle}>
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'A Developer.', 1000,
            'A Designer.', 1000,
            'A Freelancer.', 1000
          ]}
        />
      </div>
          </div>
        <div className="Intro">
          <p>
          Aspiring Full Stack Developer with a passion for coding quality, <br />
          eager to add new views to creative projects. <br /> 
          </p>
        </div>
        <div className="btn-home">
        <button className="button type1"/>
        </div>

      </div>
    )
  }
