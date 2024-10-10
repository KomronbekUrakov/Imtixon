import { Link } from "react-router-dom";
import "./Edited.css";

export const Edited = () => {
  return (
    <section className="Edited">
      <div className="container">
        <div className="EditedMainWrap">
          <img
            width={112.14}
            height={25}
            src="https://images.ctfassets.net/eoaaqxyywn6o/5Vukic1DKqF8l35OlJ3mYE/3862179c4693d4a147859af325a1bf08/EDITEDLOGO_Full_2.svg"
            alt="Edited"
          />
          <p className="EditedText">
            Discover the latest and greatest in beauty, including tutorials,
            trends, reviews and advice.
          </p>
          <div className="EditedContent">
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/459Li8ddoZEjaUsHAhohm9/76bec7595fba98fcf965deca3f11b87e/Edited_Social.jpg"
                  alt=""
                />
                <h3 className="CardName">Everything You Need To Know About LED Skincare</h3>
              </Link>
            </div>
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/tUeofgmMDhGNUSEtGTtMn/716d44d2d6e01f46a63437fc3bec6982/Edited_Social_results_7.jpg"
                  alt=""
                />
                <h3 className="CardName">How To Apply Glamnetic Press-On Nails</h3>
              </Link>
            </div>
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/42qdKEsXtkYm1VgfadEbJY/9918d053867a16e5f5a2554a1d26a1ff/Edited_Social.jpg"
                  alt=""
                />
                <h3 className="CardName">A Guide to All The Best Sol de Janeiro Scents</h3>
              </Link>
            </div>
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/1pdNO2xldsGBJh2L8hHZHl/3424f6213b98881005a522cd2598bf09/Edited_Social.jpg"
                  alt=""
                />
                <h3 className="CardName">14 Korean Skincare Brands You Can Find On BEAUTY BAY</h3>
              </Link>
            </div>
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/4YGeATjE6Fc5l8Aan7lFH0/e8fabd30f381b2be8982ad813d5ad335/Edited_Social.jpg"
                  alt=""
                />
                <h3 className="CardName">What Is OLAPLEX?</h3>
              </Link>
            </div>
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/5fG4mq1woi5Ja9Dh4hH5aE/c7312973dd776d5f590a31bfd7bfc6e3/Edited_Social.jpg"
                  alt=""
                />
                <h3 className="CardName">The Best The Ordinary Products For Blemish-Prone Skin</h3>
              </Link>
            </div>
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/67ghNeB0VlRwNUztIgbxAt/f030c2ad0e862c352afa2f078e3248d3/Edited_Social.jpg"
                  alt=""
                />
                <h3 className="CardName">What Causes Dull Skin & How To Treat It</h3>
              </Link>
            </div>
            <div className="EditedContentCard">
              <Link to="">
                <img
                  width={350}
                  height={350}
                  src="https://images.ctfassets.net/eoaaqxyywn6o/18OPFhhonsHJ55kAQ6hjoe/7ea31a04cedade5b630058bd13140636/Edited_Social.jpg"
                  alt=""
                />
                <h3 className="CardName">The Different Types of Perfumes Explained</h3>
              </Link>
            </div>
          </div>
          <button className="ReadBtn">Read more</button>
        </div>
      </div>
    </section>
  );
};
