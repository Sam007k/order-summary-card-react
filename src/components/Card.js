// import Button from "./Button";

const Card = () => {
  return (
    <div className="container">
      <div className="card-img">
        <img
          className="main-img"
          src="/images/illustration-hero.svg"
          alt="card_image"
        />
        <div className="card-content">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="plan-card">
            <img src="/images/icon-music.svg" alt="music_icon" />
            <div className="plan-desc">
              <h4>Anuual Plan</h4>
              <h5>$59.99/year</h5>
            </div>

            <a href="a">Change</a>
          </div>
          <button className="payment">Proceed to Payment</button>
          <button className="cancel-order">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
