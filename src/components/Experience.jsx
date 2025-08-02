import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import experienceInfo from "../data/experience.json";
import SectionHeader from "./ui/SectionHeader";
import ExternalLinkIcon from "./ui/ExternalLinkIcon";
import Tag from "./ui/Tag";
import { createLinkProps, formatDateRange } from "../utils/helpers";
import { ExperienceItemShape } from "../types/propTypes";

/**
 * ExperienceItem component for individual experience entries
 * @param {Object} props - Component props
 * @param {Object} props.experience - Experience data object
 * @param {Function} props.t - Translation function
 * @returns {JSX.Element} Experience item with job details
 */
const ExperienceItem = ({ experience, t }) => (
  <li className="mb-12">
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label={`${experience.dateInit} to ${experience.dateEnd}`}
      >
        {formatDateRange(experience.dateInit, experience.dateEnd)}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              {...createLinkProps(experience.link, true, `${experience.job} at ${experience.company}`)}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {experience.job}
                <ExternalLinkIcon />
              </span>
            </a>
          </div>
          <div>
            <div className="text-slate-500" aria-hidden="true">
              {experience.company}
            </div>
          </div>
        </h3>
        
        <p className="mt-2 text-sm leading-normal">
          {t(experience.description)}
        </p>
        
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {experience.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

ExperienceItem.propTypes = {
  experience: ExperienceItemShape.isRequired,
  t: PropTypes.func.isRequired,
};

/**
 * Experience component displaying work history
 * @returns {JSX.Element} Experience section with job history
 */
export default function Experience() {
  const { t } = useTranslation();
  
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeader title={t("Experience")} />
      
      <div>
        <ol className="group/list">
          {experienceInfo.map((experience) => (
            <ExperienceItem 
              key={experience.id} 
              experience={experience} 
              t={t} 
            />
          ))}
        </ol>
        
        <div className="mt-12">
          <a
            className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
            aria-label="View Full Résumé"
            href="/resume.pdf"
          >
            {/* Resume link can be uncommented when needed */}
          </a>
        </div>
      </div>
    </section>
  );
}
