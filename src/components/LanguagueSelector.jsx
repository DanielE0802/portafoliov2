import { useState } from "react";
import { useTranslation } from "react-i18next";

function LenguagueSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      key: "en",
      name: "English",
    },
    {
      key: "es",
      name: "Español",
    },
  ];

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.key);
    setIsOpen(false);
  };

  const selectedLanguage = languages.find(
    (language) => language.key === i18n.language
  );

  // eslint-disable-next-line react/prop-types
  function FlagIcon({ countryCode = "" }) {
    if (countryCode === "en") {
      countryCode = "gb";
    }

    return <span className={`fi fis inline-block mr-2 fi-${countryCode}`} />;
  }

  return (
    <>
      <div className="flex items-center z-40 mb-4 justify-end">
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center w-32  rounded-md border  shadow-sm px-4 focus:ring-gray-700 py-2 bg-gray-700 hover:bg-gray-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  text-white border-gray-600"
              // id={LANGUAGE_SELECTOR_ID}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <FlagIcon countryCode={selectedLanguage.key} />
              {selectedLanguage.name}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>


          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-50"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-selector"
            >
              <div className="py-1 gap-2 w-full" role="none">
                {languages.map((language) => {
                  console.log(language);
                  return (
                    <button
                      key={language.key}
                      onClick={() => handleLanguageChange(language)}
                      className={`${
                        selectedLanguage.key === language.key
                          ? "bg-gray-800 text-gray-900"
                          : "bg-gray-700"
                      } block w-full px-4 py-2 text-sm text-left items-center hover:text-white hover:bg-gray-600 text-gray-400`}
                      role="menuitem"
                    >
                      <FlagIcon countryCode={language.key} />
                      <span className="truncate">{language.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LenguagueSelector;
