import { useState } from "react";
import "./Button.css";
import { FiAlertCircle } from "react-icons/fi";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-10 top-10 z-50  ">
      <div className="">
        <button
          onClick={() => setIsOpen(true)}
          className=" relative flex animate-bounce drop-shadow-2xl"
        >
          <div className=" absolute animate-ping inline-flex rounded-full bg-[#FFC729] opacity-75 h-2 w-2 overflow-hidden right-0 top-0"></div>
          <div className="flex gap-1">
            <span className="text-white"></span>
            <FiAlertCircle size={24} className="text-white" />
          </div>
        </button>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
            className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity flex items-center justify-center z-10 backdrop-blur-sm"
          >
            <div
              className="bg-white p-6 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div className="text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    NOTICES
                  </h3>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      {/* We will update you shortly */}
                    </p>
                  </div>
                </div>
                <span
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </span>
              </div>
              <div className="text-left my-2">
                <p className="text-sm text-black">We will update you shortly</p>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4">
                {/* <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-blue-500 px-4 py-2 text-base font-medium text-blue-500 hover:text-white hover:border-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button> */}
                {/* <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Accept
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
