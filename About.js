import React from "react";

const About = ({heading}) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={require("../../../assets/aboutimg.jpg")} alt="" />
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            nam blanditiis, eligendi minus autem excepturi dicta cum est quam
            quasi beatae deserunt consectetur facere, ipsum dolore. Molestias,
            blanditiis? Ducimus, cupiditate. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis nam blanditiis, eligendi
            minus autem excepturi dicta cum est quam quasi beatae deserunt
            consectetur facere, ipsum dolore. Molestias, blanditiis? Ducimus,
            cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eos, maiores totam nobis illum quis quod a quas aliquam
            reprehenderit possimus quia, tempora laboriosam quo, neque
            doloremque est corrupti dolor.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
