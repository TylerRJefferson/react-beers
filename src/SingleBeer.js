export default function SingleBeer({ entireObject }) {
  return (
    <div className="menu-items__item">
      <img
        src={entireObject.image}
        alt="" />
      <div>
        <h3>{entireObject.name}</h3>
        <span>Price: {entireObject.price}</span>
      </div>
    </div>
  )
}