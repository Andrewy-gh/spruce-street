import hero from './assets/hero.jpg';
import featured1 from './assets/featured-1.webp';
import featured2 from './assets/featured-2.webp';
import featured3 from './assets/featured-3.webp';
import plants480 from './assets/plants-480.mp4';
import monstera from './assets/monstera.webp';
import rubberfig from './assets/rubberfig.webp';
import snakeplant from './assets/snakeplant.webp';
import rattlesnake from './assets/rattlesnake.webp';
import signup from './assets/signup.webp';
import styles from './Bestsellers.module.css';
import NavBar from './components/navbar/index';

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
            <section className="grid h-full mx-auto">
              {/* Fix */}
              <div className="text-light self-center justify-self-center">
                <h1>Welcome</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque, quod?
                </p>
                <button className="py-2 px-5 rounded-md bg-accent text-light">
                  Shop now
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Featured */}
        <section className="container mx-auto">
          <h2>Featured Collections</h2>
          <div className="flex flex-wrap gap-6 mx-auto">
            <div className="mx-auto">
              <img src={featured1} alt="placeholder" className="aspect-[3/5]" />
              <p>Succulents</p>
            </div>
            <div className="mx-auto">
              <img src={featured2} alt="placeholder" className="aspect-[3/5]" />
              <p>Planters</p>
            </div>
            <div className="mx-auto">
              <img src={featured3} alt="placeholder" className="aspect-[3/5]" />
              <p>Placeholder</p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="container mx-auto">
          <h2 className="text-dark text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
            illo quae non esse tempora impedit perspiciatis animi corporis
            corrupti?
          </h2>
        </section>

        {/* Video */}
        <section className="container mx-auto">
          <div>
            <video autoPlay loop>
              <source src={plants480} type="video/mp4" />
            </video>
          </div>
          <div>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aliquid fuga quos asperiores exercitationem obcaecati dolorem
              mollitia ad tempora voluptatibus.
            </p>
          </div>
        </section>

        {/* Best sellers */}
        <section className="container mx-auto">
          <h3>Best Sellers</h3>
          <div className={`${styles.layoutContainer} grid`}>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={monstera} alt="monstera" />
              <button className="hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-2 px-6 rounded-md bg-accent text-light font-bold">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={rubberfig} alt="rubberfig" />
              <button className="hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-2 px-6 rounded-md bg-accent text-light font-bold">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={snakeplant} alt="snakeplant" />
              <button className="hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-2 px-6 rounded-md bg-accent text-light font-bold">
                View Details
              </button>
            </div>
            <div className={`${styles.layoutItem} relative group`}>
              <img src={rattlesnake} alt="rattlesnake" />
              <button className="hidden absolute bottom-5 left-4 z-10 group-hover:inline-block py-2 px-6 rounded-md bg-accent text-light font-bold">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Sign up */}
        <section className="container mx-auto grid grid-cols-[auto_auto]">
          <div>
            <img src={signup} alt="storefront with plants outside" />
          </div>
          <div>
            {' '}
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, assumenda? Pariatur aliquam est aut cum!
            </p>
            <form action="">
              <input
                className="py-2 px-5 rounded-md text-accent"
                type="email"
                placeholder="Enter your email"
              />
              <button className="py-2 px-5 rounded-md bg-accent text-light">
                Sign up!
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer>Footer here</footer>
    </>
  );
}
