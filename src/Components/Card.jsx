import './Card.css'

export default function Card() {
  return (
    <div>
      <article className="card">
  <img className="card__background" src="Card.svg"alt="Photo " width="1920" height="2193"/>
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">Colombia</h2>
      <p className="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button className="card__button">Read more</button>
  </div>
</article>
    </div>
  )
}
