import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
// eslint-disable-next-line react/prop-types
export default function Modal({ children, modal, setModal }) {
  // eslint-disable-next-line no-unused-vars
  const ref = useRef();
  const handleClose = (e) => {
    if (e.target == ref.current) return setModal(false);
  };
  return (
    <>
      <AnimatePresence>
        {modal && (
          <div className="fixed   h-screen w-full inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-[999]  ">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={handleClose}
              ref={ref}
              className="w-full h-full flex items-center justify-center"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
