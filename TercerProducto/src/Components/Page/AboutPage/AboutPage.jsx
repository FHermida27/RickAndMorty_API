import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div id="about-div">
      <header>
        <h1>Sobre Felipe Andrés Hermida P.</h1>
        <p className="header-subtitle">Estudiante de Ingeniería de Sistemas</p>
      </header>
      <section className="main-content">
        <div className="content-container">
          <div className="description">
            <h2>¿Quién es Felipe Andrés Hermida P.?</h2>
            <p>
              <strong>Felipe Andrés Hermida P.</strong> es estudiante de la Universidad de la Amazonía, actualmente cursando el V semestre en Ingeniería de Sistemas. Este producto es parte del curso de Programación Web.
            </p>
            <h3>Creado por:</h3>
            <p>
              Felipe es un apasionado del desarrollo de software y la tecnología. Su meta es completar sus estudios para poder ayudar a su familia, aprovechando sus habilidades para contribuir en proyectos de impacto.
            </p>
            <h3>Intereses y Habilidades</h3>
            <p>
              Felipe tiene un gran interés en el desarrollo de aplicaciones web, la programación en Java, y la creación de soluciones que mejoren la calidad de vida de las personas.
            </p>
            <h3>Contacto</h3>
            <p>
              Puedes contactarlo a través de su correo electrónico:{" "}
              <a href="mailto:fhermida100@gmail.com">fhermida100@gmail.com</a>
            </p>
          </div>
        </div>
        <div id="IMG">
          <img
            src="https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/327696795_520783486813533_6575749002775530346_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGGKrjZTbSnRvvv8fSt2xt7mB5nAJ0mI8uYHmcAnSYjy12SwX-cR-wCnJJ62CvTsgdAtVhEdkAO_ivOngMut_Ao&_nc_ohc=hpNR9ApuknsQ7kNvgGn468d&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=ARzqdlKItu21skftqJDxCf5&oh=00_AYCAdY3EywevyM03yTDJbN_6z6hpHbIi3KtB5WfQM1Yf-A&oe=67288769"
            alt="Yo"
            className="profile-img"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
