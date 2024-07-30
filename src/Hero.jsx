import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad
            perferendis beatae magnam? Vero praesentium quidem fugiat. Quidem
            tempore natus, sit facilis suscipit quod numquam rem explicabo
            quibusdam aperiam molestias.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
