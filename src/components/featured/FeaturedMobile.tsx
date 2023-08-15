import featured1 from '../../assets/featured-1.webp';
import featured2 from '../../assets/featured-2.webp';
import featured3 from '../../assets/featured-3.webp';

export default function FeaturedMobile() {
  return (
    <section className="lg:hidden w-container mx-auto text-primary-dark my-space-l">
      <h3 className="text-step-3 font-medium font-accent mb-space-2xs">
        Featured Collections
      </h3>

      <div className="lg:hidden  flex items-center justify-center">
        <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
          <div className="w-[220px] inline-block cursor-pointer mr-4">
            <img src={featured1} alt="placeholder" className="aspect-[4/5]" />
            <p className="text-step-0 font-body">Succulents</p>
          </div>
          <div className="w-[220px] inline-block cursor-pointer mr-4">
            <img src={featured2} alt="placeholder" className="aspect-[4/5]" />
            <p className="text-step-0 font-body">Planters</p>
          </div>
          <div className="w-[220px] inline-block cursor-pointer mr-4">
            <img src={featured3} alt="placeholder" className="aspect-[4/5]" />
            <p className="text-step-0 font-body">Placeholder</p>
          </div>
          <div className="w-[220px] inline-block cursor-pointer">
            <img src={featured3} alt="placeholder" className="aspect-[4/5]" />
            <p className="text-step-0 font-body">Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
