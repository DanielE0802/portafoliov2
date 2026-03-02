import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import SectionHeader from "./ui/SectionHeader";
import ExternalLinkIcon from "./ui/ExternalLinkIcon";
import Tag from "./ui/Tag";
import CertificatePreviewModal from "./ui/CertificatePreviewModal";

const CertificationShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  fileName: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  credentialId: PropTypes.string,
  verifyUrl: PropTypes.string,
  previewImage: PropTypes.string,
});

const CertificateCard = React.memo(({ cert, t, onPreview }) => {
  const viewLabel = t("certificaciones.actions.viewAria", {
    title: cert.title,
  });

  const downloadLabel = t("certificaciones.actions.downloadAria", {
    title: cert.title,
  });

  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        
        {/* Preview Image or Icon */}
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={cert.fileUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={viewLabel}
            >
              <span>
                {cert.title}
                <ExternalLinkIcon />
              </span>
            </a>
          </h3>
          
          <div className="mt-1 flex items-center gap-2">
            <p className="text-sm font-semibold text-slate-400">
              {cert.issuer}
            </p>
            {cert.year !== "—" && (
              <>
                <span className="text-slate-600">•</span>
                <p className="text-sm text-slate-500">{cert.year}</p>
              </>
            )}
          </div>

          {cert.description && (
            <p className="mt-2 text-sm leading-normal text-slate-400">
              {cert.description}
            </p>
          )}
          
          <ul className="mt-2 flex flex-wrap" aria-label={t("certificaciones.fields.skills")}>
            {cert.tags.map((tag) => (
              <Tag key={`${cert.id}-${tag}`} text={tag} />
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <button
              onClick={() => onPreview(cert)}
              className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
              aria-label={viewLabel}
            >
              {t("certificaciones.actions.preview")}
            </button>

            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
              href={cert.fileUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={viewLabel}
            >
              <span>
                {t("certificaciones.actions.view")}
                <ExternalLinkIcon />
              </span>
            </a>

            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href={cert.fileUrl}
              download={cert.fileName}
              aria-label={downloadLabel}
            >
              {t("certificaciones.actions.download")}
            </a>
          </div>
        </div>
        
        {/* Certificate Preview/Thumbnail */}
        <div className="z-10 sm:order-1 sm:col-span-2">
          {cert.previewImage ? (
            <img
              src={cert.previewImage}
              alt={`${cert.title} certificate preview`}
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 w-full"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-28 items-center justify-center rounded border-2 border-slate-200/10 bg-slate-800/50 transition group-hover:border-slate-200/30">
              <img
                src="/file.png"
                alt=""
                className="h-12 w-12 opacity-40 filter invert"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>
      </div>
    </li>
  );
});

CertificateCard.displayName = "CertificateCard";
CertificateCard.propTypes = {
  cert: CertificationShape.isRequired,
  t: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
};

/**
 * Certifications section
 * @param {Object} props
 * @param {Array} props.items - Certifications array
 */
const Certifications = ({ items }) => {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreview = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section
      id="certificaciones"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t("certificaciones.aria")}
    >
      <SectionHeader title={t("Courses and Certifications")} />

      <div>
        <p className="mb-8 max-w-prose text-sm leading-normal">
          {t("certificaciones.description")}
        </p>

        <ol className="group/list">
          {items.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} t={t} onPreview={handlePreview} />
          ))}
        </ol>
      </div>

      <CertificatePreviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certificate={selectedCert}
      />
    </section>
  );
};

Certifications.propTypes = {
  items: PropTypes.arrayOf(CertificationShape).isRequired,
};

export default Certifications;
