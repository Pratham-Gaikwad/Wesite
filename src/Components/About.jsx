import './About.css'

export default function About() {
  return (
    <div className='main-About'>
      <h1 className='heading'> About Me</h1>
      {/* Information */}
      <div className="info">
      <div>
        <span className="label">Name:</span> <span className="value">Pratham Gaikwad</span>
      </div>
      <div>
        <span className="label">Date of Birth:</span> <span className="value">December 02, 2002</span>
      </div>
      <div>
        <span className="label">Address:</span> <span className="value">Wakad , Pune-411057 India</span>
      </div>
      <div>
        <span className="label">Zip Code:</span> <span className="value">411057</span>
      </div>
      <div>
        <span className="label">Email:</span> <span className="value">prathamgaikwad2011@gmail.com</span>
      </div>
      <div>
        <span className="label">Phone:</span> <span className="value">+91-8329-599-761</span>
      </div>
      {/* Button */}
      <button className="btn type2"/>
    </div>
    </div>
  )
}
