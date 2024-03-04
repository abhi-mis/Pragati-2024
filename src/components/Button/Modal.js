import { useState, useEffect } from "react";
import "./Button.css";
import { FiAlertCircle } from "react-icons/fi";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    let timeoutId;

    const isModalShown = sessionStorage.getItem('isModalShown');
    if (!isModalShown) {
      timeoutId = setTimeout(() => {
        setIsOpen(true);
        body.classList.add('overflow-hidden');
        sessionStorage.setItem('isModalShown', true);
      }, 1500);
    }

    return () => {
      clearTimeout(timeoutId);
      body.classList.remove('overflow-hidden');
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    document.querySelector('body').classList.remove('overflow-hidden');
  };

  const openPopup = () => {
    setIsOpen(true);
    document.querySelector('body').classList.add('overflow-hidden');
  };

  return (
    <>
      <div className="absolute right-10 top-10 z-50">
        <div className="">
          {isOpen && (
            <div
              onClick={closePopup}
              onKeyDown={(e) => e.key === "Escape" && closePopup()}
              className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity flex items-center justify-center z-10 backdrop-blur-sm"
            >
              <div
                className="bg-white p-6 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between">
                  <div className="text-left">
                    <h3 className="text-3xl leading-6 font-extralarge text-gray-900">
                      NOTICES
                    </h3>
                    <div className="mt-1">
                      <p className="text-sm text-gray-800">
                        {/* We will update you shortly */}
                      </p>
                    </div>
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={closePopup}
                  >
                    ✕
                  </span>
                </div>
                <div className="text-left my-2">
                  <p className="text-sm text-black">-Registration fees for PRAGATI-24 will be collected at B301 from 09:45 AM to 02:30 PM on 05.03.2024 (Tuesday).
Collection of registration fees on the event dates is only for the external participants.
So submit the registration fees as early as possible to avoid the last minute rush.</p>
                </div>
                <div className="flex items-center justify-end gap-2 mt-4">
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute right-10 top-10 z-50">
        <div className="">
          <button
            onClick={openPopup}
            className="relative flex animate-bounce drop-shadow-2xl"
          >
            <div className="absolute animate-ping inline-flex rounded-full bg-[#FFC729] opacity-75 h-2 w-2 overflow-hidden right-0 top-0"></div>
            <div className="flex gap-1">
              <span className="text-white"></span>
              <FiAlertCircle size={40} className="text-white" /> {/* Changed size to 32 */}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
