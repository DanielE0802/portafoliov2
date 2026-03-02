import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "./icons/CloseIcon";

/**
 * Modal component for previewing PDF certificates
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {Function} props.onClose - Close handler
 * @param {Object} props.certificate - Certificate data
 * @returns {JSX.Element|null} PDF preview modal
 */
const CertificatePreviewModal = ({ isOpen, onClose, certificate }) => {
  const { t } = useTranslation();

  if (!isOpen || !certificate) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-lg shadow-xl w-full max-w-5xl relative border border-slate-700/50 flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-slate-700/50">
          <div className="min-w-0 flex-1 mr-4">
            <h2 className="text-xl font-bold text-slate-200 truncate">
              {certificate.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {certificate.issuer} • {certificate.year}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors flex-shrink-0"
            aria-label={t("modal.close")}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        
        <div className="flex-1 overflow-hidden">
          <iframe
            src={certificate.fileUrl}
            className="w-full h-full min-h-[70vh]"
            title={`Preview de ${certificate.title}`}
            frameBorder="0"
          />
        </div>
        
        <footer className="flex flex-wrap gap-3 p-4 border-t border-slate-700/50">
          <a
            href={certificate.fileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
          >
            {t("certificaciones.actions.viewFull")}
          </a>
          <a
            href={certificate.fileUrl}
            download={certificate.fileName}
            className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
          >
            {t("certificaciones.actions.download")}
          </a>
        </footer>
      </div>
    </div>
  );
};

CertificatePreviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  certificate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
  }),
};

export default CertificatePreviewModal;
