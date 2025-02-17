import { projects } from '@data/data';

import styles from './projects.module.css'
import ProjectCard from '@components/project-card';

export default function index() {
  return (
    <section className={ styles[`projects`] } id="projects">
      <h2 className={ styles[`projects__title`] }>Projects</h2>

      <section className={ styles[`projects__list`] }>
        {
          Object.keys(projects).map((project : string, index : number) => {
            return (
              <ProjectCard
                key={ index }
                url={ `project/${ project }` }
                { ...projects[project].introduction }
              />
            )
          })
        }
      </section>

    </section>
  )
}
