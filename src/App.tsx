import plants480 from './assets/plants-480.mp4';
import monstera from './assets/monstera.webp';
import rubberfig from './assets/rubberfig.webp';
import snakeplant from './assets/snakeplant.webp';
import rattlesnake from './assets/rattlesnake.webp';
import signup from './assets/signup.webp';
import styles from './Bestsellers.module.css';
import NavBar from './components/navbar/index';
import Featured from './components/featured';
import Footer from './components/footer/index';
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
                <h1 className="font-accent text-step-5 text-light font-bold ">
                  Welcome
                </h1>
                <p className="font-body text-step-0 text-light mb-space-xs">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque, quod?
                </p>
                <button className="font-accent py-space-2xs px-space-m rounded-md bg-accent text-light">
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
          <h4 className="text-step-2 font-medium font-accent text-dark text-center p-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
            illo quae non esse tempora impedit perspiciatis animi corporis
            corrupti?
          </h4>
        </section>

        {/* Video */}
        <section className="w-container mx-auto my-space-l grid grid-cols-1 lg:grid-cols-[60%_40%] lg:items-center gap-space-s">
          <div>
            <video autoPlay loop>
              <source src={plants480} type="video/mp4" />
            </video>
          </div>
          <div>
            <h3 className="text-step-3 font-accent">Lorem, ipsum.</h3>
            <p className="text-step--1 font-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aliquid fuga quos asperiores exercitationem obcaecati dolorem
              mollitia ad tempora voluptatibus.
            </p>
          </div>
        </section>

        {/* Best sellers */}
        <section className="w-container mx-auto my-space-xl">
          <h3 className="text-step-3 font-accent mb-space-2xs">Best Sellers</h3>
          <div className={`${styles.layoutContainer} grid`}>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={monstera} alt="monstera" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={rubberfig} alt="rubberfig" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={snakeplant} alt="snakeplant" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={rattlesnake} alt="rattlesnake" />
              <button className="font-accent md:hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-space-2xs px-space-m rounded-md bg-accent text-light font-bold">
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
              <h3 className="text-step-3 font-accent">Lorem, ipsum.</h3>
              <p className="text-step--1 font-body mb-space-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, assumenda? Pariatur aliquam est aut cum!
              </p>
              <form action="">
                <input
                  className="font-body py-space-2xs px-space-m mr-space-2xs rounded-md text-accent font-bold"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="font-accent py-space-2xs px-space-m rounded-md bg-accent text-light">
                  Sign up!
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
