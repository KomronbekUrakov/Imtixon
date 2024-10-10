import "./Community.css";

const track: HTMLDivElement | null = document.querySelector(".slide-track");
const leftNav: HTMLButtonElement | null = document.querySelector(".nav.left");
const rightNav: HTMLButtonElement | null = document.querySelector(".nav.right");

let currentPosition: number = 0;
const slidesToShow: number = 4.5;
const slideWidth: number = 193;
const slides: NodeListOf<HTMLDivElement> = document.querySelectorAll(".slide");
const totalSlides: number = slides.length;

function moveSlider(direction: "left" | "right"): void {
  if (!track) return; 
  const maxPosition: number = (totalSlides - slidesToShow) * slideWidth;

  if (direction === "left") {
    currentPosition = Math.max(currentPosition - slideWidth, -maxPosition);
  } else if (direction === "right") {
    currentPosition = Math.min(currentPosition + slideWidth, 0);
  }

  track.style.transform = `translateX(${currentPosition}px)`;
}

leftNav?.addEventListener("click", () => moveSlider("left"));
rightNav?.addEventListener("click", () => moveSlider("right"));

setInterval((): void => {
  moveSlider("left");
}, 3000);

export const Community = () => {
  return (
    <section className="Community">
      <div className="container">
        <div className="MainWrap">
          <div className="innerWrap">
            <div className="logoWrap">
              <img
                width={36}
                height={36}
                src="https://images.ctfassets.net/eoaaqxyywn6o/1ijVXXOZhIEbKbjZYavZ0I/43def519eedbcff91e0885b22c745a31/2023_IG.svg"
                alt=""
              />
              <h2 className="CommunityTitle">Our Community</h2>
            </div>
            <p className="cummuntText">
              Show us your latest looks using <span className="cummuntTextStyle">#BEAUTYBAYhaul</span> for a
              chance to appear on our homepage.
            </p>
          </div>
          <div className="slider-container">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/20/18350641783097820/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/22/18036721687843422/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/66/18425958460033066/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/72/17956105775642572/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/96/18075854371473196/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/59/18025896440079259/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/87/18097957123392487/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/13/18008474066175013/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/19/17930842517835619/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/64/17858892963118664/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/86/18020852936294186/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/37/18032819215857837/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/12/18327507367141312/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/73/18030703894744373/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
                <div className="slide">
                  <img
                    width={193}
                    height={193}
                    src="//cdn-yotpo-images-production.yotpo.com/instagram/2/18310751815122902/low_resolution.jpg"
                    alt=""
                  />
                  <button className="buy-now">Buy Now</button>
                </div>
              </div>
            </div>
            <button className="nav1 left">‹</button>
            <button className="nav1 right">›</button>
          </div>
        </div>
      </div>
    </section>
  );
};
