import { Link } from "react-router-dom";
import "./Compaign.css";
export const Compaign = () => {
  return (
    <section className="Compaign">
      <div className="container">
        <div className="mainWrap">
          <Link className="link" to="">
            <div>
              <img
                width={700}
                height={580}
                src="https://images.ctfassets.net/eoaaqxyywn6o/1SI6sKI27zCV8480eTLa1Z/284710691d826fafbb8cbc97d63809f5/Trading_Trio.jpg"
                alt=""
              />
              <h3 className="comTitle">Witch, please.</h3>
              <p className="comText">
                Dare to scare with our spooky szn beauty essentials{" "}
              </p>
              <div className="trend-block-content-btn">
                <span>SHOP NOW</span>
                <svg
                  width="4"
                  height="12"
                  viewBox="0 0 4 12"
                  className="cta-label__link__icon"
                  style={{ fill: "rgb(0, 0, 0)" }}
                >
                  <path d="M4,6v0l-4,6v0v-12v0z" fillOpacity="1"></path>
                </svg>
              </div>
            </div>
          </Link>
          <Link to="">
            <div>
              <img
                width={700}
                height={580}
                src="https://images.ctfassets.net/eoaaqxyywn6o/53Y4PcUr5Q4UVoqXJj2CU8/7a06653705a398aea42ef646e744f689/Trading_Trio_Copy_3.jpg"
                alt=""
              />
              <h3 className="comTitle">Your makeup bag can't wait</h3>
              <p className="comText">
                Upgrade your beauty collection with Anastasia Beverly Hills
              </p>
              <div className="trend-block-content-btn">
                <span>SHOP NOW</span>
                <svg
                  width="4"
                  height="12"
                  viewBox="0 0 4 12"
                  className="cta-label__link__icon"
                  style={{ fill: "rgb(0, 0, 0)" }}
                >
                  <path d="M4,6v0l-4,6v0v-12v0z" fillOpacity="1"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
