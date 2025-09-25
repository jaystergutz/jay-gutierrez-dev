import { useRef, ReactNode } from "react";

export default function ContactForm({
  children,
}: {
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.show();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div onClick={openDialog}>
        {children}
      </div>
      
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 max-w-md w-full border-0"
        onClose={closeDialog}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <button
            onClick={closeDialog}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl leading-none"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Send me a message and I'll get back to you as soon as possible.
        </p>
        
        <div className="py-4">
          {/* Form content will go here */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Form inputs will be added here...
          </p>
        </div>
      </dialog>
    </>
  );
}
