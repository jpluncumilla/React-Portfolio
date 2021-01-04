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
        title: 'Dice Game',
        technology: 'Javascript & CSS',
        description:
          'Dice Game was made using JavaScript and CSS as a practice of logic as well as DOM manipulation.',
        github: 'https://github.com/iamjpyo/Dice-Game-With-DOM',
        link: 'https://iamjpyo.github.io/Dice-Game-With-DOM/',
      },
      {
        id: 3,
        title: 'Stern-X',
        technology: 'React.js, Node.js & Sass',
        description:
          'Stern-X is a product presentation website built for disinfecting products company. Client is well satisfied with outcome.',
        github: 'https://github.com/InfinityITDept/Stern-X-React',
        link: 'https://stern-x.com',
      },
      {
        id: 4,
        title: 'Disaster Relief',
        technology: 'React.js, Node.js & Express',
        description:
          "Friend Finder is a collaborative project made as a disaster relief effort for IBM's Call for Code with Heroku deployment.",
        github: 'https://github.com/iamjpyo/project2',
        link: 'https://project2fam.herokuapp.com/',
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
