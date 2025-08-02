import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { Tag, ExternalLinkIcon } from "./index";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Imagen del proyecto */}
        <div className="flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg max-w-full h-auto max-h-64 object-cover border border-gray-700"
          />
        </div>

        {/* Descripción detallada */}
        <section>
          <h3 className="text-lg font-semibold text-teal-400 mb-2">
            {t("projects.modal.description")}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {project.detailedDescription?.[currentLang] || project.description}
          </p>
        </section>

        {/* Desafíos */}
        {project.challenges && (
          <section>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">
              {t("projects.modal.challenges")}
            </h3>
            <ul className="space-y-2">
              {project.challenges[currentLang]?.map((challenge, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Aprendizajes */}
        {project.learnings && (
          <section>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">
              {t("projects.modal.learnings")}
            </h3>
            <ul className="space-y-2">
              {project.learnings[currentLang]?.map((learning, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  {learning}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tecnologías */}
        <section>
          <h3 className="text-lg font-semibold text-teal-400 mb-2">
            {t("projects.modal.technologies")}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {(project.tags || []).map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </ul>
        </section>

        {/* Enlace al proyecto */}
        <section className="pt-4 border-t border-gray-700">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            {t("projects.modal.visitProject")}
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
          {project["link-github"] && (
            <a
              href={project["link-github"]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-
700 text-white px-4 py-2 rounded-lg transition-colors font-medium ml-4"
            >
              {t("projects.modal.viewCode")}
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
        </section>
      </div>
    </Modal>
  );
};

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    detailedDescription: PropTypes.object,
    challenges: PropTypes.object,
    learnings: PropTypes.object,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default ProjectModal;
