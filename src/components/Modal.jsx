import { MdOutlineCancel } from "react-icons/md";

function Modal({ children, setIsOpen, isOpen }) {
  return (
    <div className="fixed w-[100%] mx-auto inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white relative w-[40%] p-6 rounded-lg">
        <button
          className="absolute top-[2%] right-[2%]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MdOutlineCancel className="text-red-500" size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
