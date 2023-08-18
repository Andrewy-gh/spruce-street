import monstera from "./assets/monstera.webp";
import rubberfig from "./assets/rubberfig.webp";
import snakeplant from "./assets/snakeplant.webp";
import rattlesnake from "./assets/rattlesnake.webp";
import signup from "./assets/signup.webp";
import NavBar from "./components/navbar/index";
import Featured from "./components/featured";
import Footer from "./components/Footer";
import styles from "./Bestsellers.module.css";
export default function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Overlay */}
        <div className="showcase">
          <div className="overlay">
            <section className="grid h-full w-container mx-auto">
              {/* Fix */}
              <div className="text-light self-center justify-self-start">
                <h1 className="font-accent text-step-5  font-bold ">Welcome</h1>
                <p className="font-body text-step-0  mb-space-xs">
                  Creating Serene Spaces: Find Your Perfect Plant Companions
                  with Us
                </p>
                <button className="font-accent py-space-2xs px-space-m rounded-md bg-accent  shadow-button-accent hover:bg-accent-dark">
                  Shop now
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Featured */}
        <Featured />

        {/* Call to action */}
        <section className="w-container mx-auto my-space-2xl">
          <h4 className="text-step-2 font-medium font-accent text-primary text-center p-8">
            Start Your Plant Journey Today: Cultivate Green Inspiration with Us!
            Shop now and Enjoy 20% Off Your First Purchase!"
          </h4>
        </section>

        {/* Video */}
        <section className=" w-container mx-auto my-space-l grid grid-cols-1 lg:grid-cols-[60%_40%] lg:items-center gap-space-s">
          <div style={{ padding: "56.34% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/854529820?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              loading="lazy"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="plants-480"
            ></iframe>
          </div>
          <div className="text-primary-dark">
            <h3 className="text-step-3 font-accent">
              Drop By Our Nearby Haven.
            </h3>
            <p className="text-step--1 font-body">
              Our store is your urban oasis. Swing by for plant browsing,
              potting sessions, curbside pickup, hands-on workshops, and more
              green goodness.
            </p>
          </div>
        </section>

        {/* Best sellers */}
        <section className="w-container mx-auto my-space-xl">
          <h3 className="text-step-3 text-primary-dark font-accent mb-space-2xs">
            Best Sellers
          </h3>
          <div className={`${styles.layoutContainer} grid`}>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={monstera} alt="monstera" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold shadow-button-accent hover:bg-accent-dark">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={rubberfig} alt="rubberfig" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold shadow-button-accent hover:bg-accent-dark">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={snakeplant} alt="snakeplant" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold shadow-button-accent hover:bg-accent-dark">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={rattlesnake} alt="rattlesnake" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold shadow-button-accent hover:bg-accent-dark">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Sign up */}
        <section className="w-container mx-auto my-space-xl flex flex-wrap flex-row-reverse lg:flex-row">
          <div className="basis-full lg:basis-[60%] ">
            <img src={signup} alt="storefront with plants outside" />
          </div>
          <div className="basis-full lg:basis-[40%] grid place-items-start lg:place-items-center pt-space-s lg:pl-space-s lg:pt-0">
            <div>
              <h3 className="text-step-3 text-primary-dark font-accent">
                Feed your plant passion!
              </h3>
              <p className="text-step--1 text-primary-dark font-body mb-space-xs">
                Get nurturing plant care insights, exclusive deals, and first
                dibs on plant-filled events. We promise no inbox overload.
              </p>
              <form action="">
                <input
                  className="font-body py-space-2xs px-space-m mr-space-2xs rounded-md text-accent font-bold shadow-[-3px_4px_5px_0px_rgba(33,32,22,0.75)]"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="font-accent py-space-2xs px-space-m mt-space-2xs rounded-md bg-accent text-light shadow-button-accent hover:bg-accent-dark">
                  Subscribe!
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
