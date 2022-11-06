import "./ProdPage.css";
import bottle from "../assets/item-bottle.png";
import next from "../assets/next-btn.png";
import prev from "../assets/prev-btn.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import four from "../assets/fourth.png";
import video from "../assets/video.png";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";


function ProdPage() {
  return (
    <div className="main-section">
      <div className="seller-name">LARQ Bottle Filtered<span className="animate-fade"> _</span></div>
      <div className="info-section">
        <div className="flex">
          <div className="tab">General Info</div>
          <div className="unselected-tab">Product Details</div>
          <div className="unselected-tab">Reviews</div>
        </div>
        <div className="flex">
          <div>star</div>
          <div>12 reviews</div>
        </div>
      </div>
      <div className="border-line"></div>
      <div className="item-section">
        <div className='item-des'>
        <div className="item-image">
          <img src={prev} alt="" className="prev-btn" />
          <img src={bottle} alt="" className="bottle" />
          <img src={next} alt="" className="next-btn" />
        </div>
        <div className='all-image'>
        <img src={first} alt="" className="alt-image" />
          <img src={second} alt="" className="alt-image" />
          <img src={third} alt="" className="alt-image" />
          <img src={four} alt="" className="alt-image" />
          <img src={video} alt="" className="alt-image" />
        </div>
        </div>
      
        <div className="item-info">
          <div className="price">
            <div className="original">$150.00</div>
            <div className="dis">$300.00</div>
            <div className="off-tag">-50%</div>
          </div>
          <div className="color-text">Color</div>
          <div className="color-switch">
            <div className="button">
              <div className="radio-button-black" />
              <div className="radio-button-white" />
              <div className="radio-button-green" />
              <div className="black-text">Black</div>
            </div>
            <div className="insulated-button">Insulated</div>
            <div className="non-insulated">Non-Insulated</div>
          </div>
          <div>Size</div>
          <div className="size-options">
            <input
              autoComplete="off"
              type="text"
              placeholder="17 oz"
              name="hidden"
              className="input-box"
            />
          </div>
          <div className="filter">
            <div className="increase-size">1</div>
            <div className="add-to-cart">Add to cart</div>
            <div className="fav">Favourite</div>
          </div>
          <div className="delivery-text">Delivery</div>
          <div className="normal-info">
            Fre standard shipping on order over $35 before tax,plus free returns
          </div>
          <table>
            <tr className="table-title">
              <th className="single-cell">TYPE</th>
              <th className="single-cell">HOW LONG</th>
              <th className="single-cell">HOW MUCH</th>
            </tr>
            <tr className="table-title">
              <td className="single-cell">standard Delivery</td>
              <td className="single-cell">1-4 Business day</td>
              <td className="single-cell">$4.50</td>
            </tr>
            <tr className="table-title">
              <td className="single-cell"> Express Delivery</td>
              <td className="single-cell">1 Business days</td>
              <td className="single-cell"> $10.00</td>
            </tr>
            <tr className="table-title">
              <td className="single-cell">Pick up in store</td>
              <td className="single-cell">1-3 business</td>
              <td className="single-cell">Austria</td>
            </tr>
          </table>
          <div className="return-text">Return</div>
          <div className="text">
            You have 15 days to return the items using any of following methods
          </div>
          <ul>
            <li>Free Store return</li>
            <li>Free returns via USPS DroppOff Service</li>
          </ul>
        </div>
      </div>
      <div className="other-rec">
        <div className='rec-text'>Recomendations...</div>
        <div className='other-photo'>
        <img src={item1} alt="" className ="img-item" />
          <img src={item2} alt="" className ="img-item" />
          <img src={item3} alt="" className ="img-item" /> 

        </div>
      </div>
    </div>
  );
}

export default ProdPage;