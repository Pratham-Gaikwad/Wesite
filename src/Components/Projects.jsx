import "./Projects.css"
export default function Projects() {
  return (
    <div className="main-projects">
        <h1 className="Project-title"> My Projects</h1>

        {/*--------------------- Card Colum 1---------------------------------------- */}
        <div className="Projects-1">
        <article className="card">
            <img className="card__background" src="Card.svg"alt="Photo " width="1920" height="2193"/>
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">DoctoConnect</h2>
                <p className="card__description">
                    Online doctor appointment 
                    booking application with cloud services
                </p>
                </div>
                <button className="card__button">Read more  ➡️</button>
            </div>
        </article>    

        <article className="card">
            <img className="card__background" src="Card.svg"alt="Photo " width="1920" height="2193"/>
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">DoctoConnect</h2>
                <p className="card__description">
                    Online doctor appointment 
                    booking application with cloud services
                </p>
                </div>
                <button className="card__button">Read more  ➡️</button>
            </div>
        </article>
        </div>
        {/* -----------------Card column 2---------------------------------- */}
        <div className="Projects-2">
        <article className="card">
            <img className="card__background" src="Card.svg"alt="Photo " width="1920" height="2193"/>
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">DoctoConnect</h2>
                <p className="card__description">
                    Online doctor appointment 
                    booking application with cloud services
                </p>
                </div>
                <button className="card__button">Read more  ➡️</button>
            </div>
        </article>    

        <article className="card">
            <img className="card__background" src="Card.svg"alt="Photo " width="1920" height="2193"/>
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">DoctoConnect</h2>
                <p className="card__description">
                    Online doctor appointment 
                    booking application with cloud services
                </p>
                </div>
                <button className="card__button">Read more  ➡️</button>
            </div>
        </article>
        </div>
 
        {/* -----------------Card column 3---------------------------------- */}
        <div className="Projects-3">
        <article className="card">
            <img className="card__background" src="Card.svg"alt="Photo " width="1920" height="2193"/>
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">DoctoConnect</h2>
                <p className="card__description">
                    Online doctor appointment 
                    booking application with cloud services
                </p>
                </div>
                <button className="card__button">Read more  ➡️</button>
            </div>
        </article>    

        <article className="card">
            <img className="card__background" src="Card.svg"alt="Photo " width="1920" height="2193"/>
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">DoctoConnect</h2>
                <p className="card__description">
                    Online doctor appointment 
                    booking application with cloud services
                </p>
                </div>
                <button className="card__button">Read more  ➡️</button>
            </div>
        </article>
        </div>
 

    </div>

  )
}
