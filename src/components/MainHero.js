// import ek from '../assets/video/ek.mp4'
import ekLogo from '../assets/images/logo.png'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button, Hero } from 'react-bulma-components';
import heroImg from "../assets/images/stock_tattoo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedin, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

const MainHero = () => {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-contents",
          pin: true,
          start: '+=10 top',
          end: 'bottom +=3000px',
          markers: true,
          scrub: 2,
        }
      })

      tl.to(".hero-center h1", { duration: 12, opacity: 0, })
        .to(".hero-center p", { duration: 6, opacity: 0 })
        .to(".hero-link", { duration: 6, opacity: 0 })
        .to("#myVideo", { duration: 6, opacity: 0 })

      ScrollTrigger.refresh();
    }, component);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={component} data-scroll-section className="hero_main">
      <section class="hero is-info is-fullheight">
  <div class="hero-head">
    
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">Title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>

  {/* <!-- Hero footer: will stick at the bottom --> */}
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class=""><a>Overview</a></li>
          <li><a>Modifiers</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
    </section>
  );

}

export default MainHero;