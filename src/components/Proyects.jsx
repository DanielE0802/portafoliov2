
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import SectionHeader from "./ui/SectionHeader";
import ExternalLinkIcon from "./ui/ExternalLinkIcon";
import Tag from "./ui/Tag";
import { LazyImage, ProjectModal } from "./ui";
import { createLinkProps } from "../utils/helpers";
import { ProjectItemShape } from "../types/propTypes";

/**
 * ProjectItem component for individual project entries
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {Function} props.onOpenModal - Function to open project modal
 * @param {Array} props.detailedProjectInfo - Array with detailed project information
 * @returns {JSX.Element} Project item with details
 */
const ProjectItem = ({ project, onOpenModal, detailedProjectInfo }) => {
  const handleCardClick = (e) => {
    console.log("Card clicked - target:", e.target);
    console.log("Card clicked - currentTarget:", e.currentTarget);
    
    // Si el clic fue en el enlace del título o sus elementos hijos, no abrir el modal
    const linkElement = e.target.closest('a[href]');
    if (linkElement) {
      console.log("Click on link, preventing modal");
      return;
    }

    console.log("Opening modal for project:", project);
    // Buscar información detallada del proyecto
    const detailedInfo = detailedProjectInfo.find(
      info => {
        // Buscar por diferentes combinaciones de nombre
        const projectName = project.name.toLowerCase().trim();
        const infoTitle = info.title.toLowerCase().trim();
        
        return infoTitle === projectName || 
               infoTitle.includes(projectName) ||
               projectName.includes(infoTitle) ||
               // Buscar coincidencias específicas conocidas
               (projectName.includes('todo') && infoTitle.includes('task')) ||
               (projectName.includes('ally360') && infoTitle.includes('ally')) ||
               (projectName.includes('gifos') && infoTitle.includes('gifos'));
      }
    );
    
    console.log("Detailed project info found:", detailedInfo);

    if (detailedInfo) {
      onOpenModal(detailedInfo);
    } else {
      // Si no se encuentra información detallada, crear un objeto básico
      const basicInfo = {
        title: project.name,
        description: project.description,
        image: project.image,
        tags: project.skills,
        link: project.url,
        detailedDescription: {
          es: project.description,
          en: project.description
        }
      };
      onOpenModal(basicInfo);
    }
  };

  return (
    <li className="mb-12">
      <div 
        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg pointer-events-none"></div>
        
        <div className="z-10 sm:order-2 sm:col-span-6 relative">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative z-30"
              {...createLinkProps(project.url, true, project.name)}
              onClick={(e) => e.stopPropagation()}
            >
              <span>
                {project.name}
                <ExternalLinkIcon />
              </span>
            </a>
          </h3>
          
          <p className="mt-2 text-sm leading-normal">
            {project.description}
          </p>
          
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {project.skills.map((skill) => (
              <Tag key={skill} text={skill} />
            ))}
          </ul>
        </div>
        
        <LazyImage
          src={project.image}
          alt={`${project.name} project screenshot`}
          width="200"
          height="48"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        />
      </div>
    </li>
  );
};

ProjectItem.propTypes = {
  project: ProjectItemShape.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  detailedProjectInfo: PropTypes.array.isRequired,
};

/**
 * Projects component displaying project portfolio
 * @param {Object} props - Component props
 * @param {Array} props.proyectsData - Array of project data
 * @param {string} props.link - Section ID for navigation
 * @returns {JSX.Element} Projects section with portfolio items
 */
const Proyects = ({ proyectsData, link }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleOpenModal = (project) => {
    console.log("Opening modal for project:", project);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  
  return (
    <section
      id={link}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeader title={t("Personal Projects")} />
      
      <div>
        <ul className="group/list">
          {proyectsData.projects?.map((project) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              onOpenModal={handleOpenModal}
              detailedProjectInfo={proyectsData.detailedProjectInfo || []}
            />
          ))}
        </ul>
        
        {/* Modal para mostrar detalles del proyecto */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
        
        {/* Uncomment when project archive page is available */}
        {/* <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Archive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

Proyects.propTypes = {
  proyectsData: PropTypes.shape({
    projects: PropTypes.arrayOf(ProjectItemShape).isRequired,
    detailedProjectInfo: PropTypes.array,
  }).isRequired,
  link: PropTypes.string.isRequired,
};

export default Proyects;
