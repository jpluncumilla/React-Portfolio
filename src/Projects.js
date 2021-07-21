import React, { Component } from 'react';
import './Projects.css';
import Cards from './Cards';
import Fade from 'react-reveal/Fade';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

class Projects extends Component {
  static defaultProps = {
    projects: [
      {
        id: 1,
        title: 'Miscreant Agency',
        technology: 'React.js & CSS',
        description:
          "Freelance project created for Miami Digital Media client with purpose of showcasing agency's work.",
        github: 'https://github.com/iamjpyo/Miscreant-React',
        link: 'https://miscreant-38b2a.web.app/',
      },
      {
        id: 2,
        title: 'Stern-X',
        technology: 'React.js, Node.js & Sass',
        description:
          'Stern-X is a product presentation website built for disinfecting products company. Client is well satisfied with outcome.',
        github: 'https://github.com/InfinityITDept/Stern-X-React',
        link: 'https://stern-x.com',
      },
      {
        id: 3,
        title: 'CircleHub',
        technology: 'Wordpress, HTML & CSS',
        description:
          'CircleHub is a presentation website for LA based coworking space. Site was built on Wordpress for marketing agency.',
        github: 'https://circlehub.net/',
        link: 'https://circlehub.net/',
      },
      {
        id: 4,
        title: 'Introlift Spa',
        technology: 'Wordpress, HTML & CSS',
        description:
          "Introlift is a informative website for Medical Spa located in Plantation, FL. Site was built on Wordpress for marketing purposes.",
        github: 'https://introlift.com/',
        link: 'https://introlift.com/',
      },
      {
        id: 5,
        title: 'FLPL',
        technology: 'Wordpress, HTML & CSS',
        description:
          "FLPL is an services information site for Private Labeling company. Site was built on Wordpress for marketing purposes.",
        github: 'https://flpl.biz/',
        link: 'https://flpl.biz/',
      },
      {
        id: 6,
        title: 'Disaster Relief',
        technology: 'React.js, Node.js & Express',
        description:
          "Friend Finder is a collaborative project made as a disaster relief effort for IBM's Call for Code with Heroku deployment.",
        github: 'https://github.com/iamjpyo/project2',
        link: 'https://project2fam.herokuapp.com/',
      },
      {
        id: 7,
        title: 'Dice Game',
        technology: 'Javascript & CSS',
        description:
          "Dice Game was made using JavaScript and CSS as a practice of logic as well as DOM manipulation.",
        github: 'https://iamjpyo.github.io/Dice-Game-With-DOM/',
        link: 'https://github.com/iamjpyo/Dice-Game-With-DOM',
      },
    ],
  };

  render() {
    return (
      <div className='Projects' id='Projects'>
        <Fade bottom>
          <h1 className='Projects-title'>Work</h1>
          <div className='Projects-cards'>
            {this.props.projects.map((p) => (
              <Cards
                id={p.id}
                title={p.title}
                technology={p.technology}
                description={p.description}
                github={p.github}
                link={p.link}
              />
            ))}
          </div>
        </Fade>
        <Fade bottom>
          <NavLink smooth to='/Contact#Contact' activeClassName='selected'>
            <IoIosArrowDropdownCircle className='Projects-icon' />
          </NavLink>
        </Fade>
      </div>
    );
  }
}

export default Projects;
