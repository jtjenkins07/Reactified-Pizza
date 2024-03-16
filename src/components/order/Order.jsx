function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open! From {openHour}:00AM to {closeHour - 12}:00PM. Come visit us
        or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
