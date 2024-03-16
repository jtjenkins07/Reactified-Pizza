import Order from "../order/Order";

function Footer() {
  const hour = new Date().getHours();
  // const hour = 10;
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're closed, we welcome you to return between {openHour}:00AM and{" "}
          {closeHour - 12}
          :00PM.
        </p>
      )}
    </footer>
  );
}

export default Footer;
