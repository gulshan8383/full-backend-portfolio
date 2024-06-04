import React from 'react'
import './data.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carasoul = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
    
  };


  return (
    <div className='maindivsec '>
      <div className='second mt-20'>
        <Slider {...settings}>
          {newdata.map((d) => (
            <div className='first' key={d}>
              <div className="dusradiv flex justify-center items-center rounded-xl">
                <img src={d.img} alt="" className='image  rounded-full' />
              </div>
              <div className='descdiv'>
                <p className='name text-[30px]'>{d.Name}</p>
                <p className='descrip text-md'>{d.desc}</p>
              </div>
            </div>
          ))}
        </Slider>

      </div>

    </div>
  );
}


const newdata = [
  {
    Name: `SELF PORTFOLIO`,
    img: `/web1.jpg`,
    desc: `Explore my portfolio showcasing diverse projects in web development, from dynamic websites to innovative applications. With a focus on clean design and efficient coding, my work highlights creativity and technical proficiency. Dive into my projects to see my skills in action and contact me for collaboration opportunities.`
  },
  {
    Name: `EDUCATION`,
    img: `/web2.jpg`,
    desc: `Gulshan Kumar, a 2023 B.Tech graduate in Computer Science Engineering, completed 10th and 12th grade under the CBSE board. Driven and dedicated, Gulshan brings a solid educational foundation and a passion for technology to the field of computer science. `
  },
  {
    Name: `SKILLS`,
    img: `/web3.jpg`,
    desc: `I'm a MERN stack developer with expertise in creating dynamic and responsive web applications. My portfolio showcases projects built with MongoDB, Express.js, React, and Node.js, highlighting my skills in full-stack development. Explore my work to see innovative solutions and efficient coding practices. Contact me for collaboration opportunities.`
  },
  {
    Name: `SUMIT MEHENDI ART`,
    img: `/web2.jpg`,
    desc: `I recently created SumitMehendiArt.com, showcasing beautiful mehendi designs through a dynamic, responsive website. As a Frontend developer, this project highlights my skills in MongoDB, Express.js, React, and Node.js. Explore my portfolio for more projects and see my expertise in action. `
  },
]
// hello world
export default Carasoul
