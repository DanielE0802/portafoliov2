import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CloseIcon } from './icons/CloseIcon';

const Modal = ({ isOpen, onClose, children, title }) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg shadow-xl p-6 w-11/12 md:w-2/3 lg:w-1/2 relative text-white border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center pb-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-teal-400">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={t('modal.close')}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <div className="mt-4 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
