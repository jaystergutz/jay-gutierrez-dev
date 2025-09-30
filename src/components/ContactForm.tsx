import { useRef, ReactNode, useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Textarea from "./ui/textarea";
import { useForm } from "@formspree/react";

export default function ContactForm({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, handleSubmit] = useForm("xgvnvaod");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        closeDialog();
      }, 3000);
    }
  }, [state.succeeded]);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.name === "email"
      ? setEmailError(false)
      : setMessageError(false);
  };


  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const validEmail =
      email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/) !== null;
    const messagePresent = formData.get("message") as string;
    setEmailError(!validEmail);
    setMessageError(!messagePresent);
    if (validEmail && messagePresent) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <div onClick={openDialog}>{children}</div>

      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/10 bg-white rounded-lg shadow-xl p-5 m-3 max-w-fit w-full border-0 m-auto"
        onClose={closeDialog}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <Button
            onClick={closeDialog}
            aria-label="Close dialog"
            variant="ghost"
            size="icon"
            className="text-xl leading-none"
          >
            ×
          </Button>
        </div>

        <p className="text-gray-600 mb-4 text-left">
          Send me a message and I'll get back to you as soon as possible.
        </p>

        {state.succeeded ? (
          <p className="text-green-600 mb-4 text-left">
            Message sent successfully!
          </p>
        ) : (
          <form className="py-4 flex flex-col gap-4" onSubmit={validate}>
            {/* Form content will go here */}
            <Input name="name" placeholder="Name" />
            <div className="flex flex-col gap-1">
              <Input
                name="email"
                onChange={onChange}
                aria-invalid={emailError}
                placeholder="Email Address"
                type="text"
              />
              {emailError && (
                <p className="text-sm text-left text-red-500">
                  Please enter a valid email
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Textarea
                name="message"
                placeholder="Message"
                rows={5}
                onChange={onChange}
                aria-invalid={messageError}
              />
              {messageError && (
                <p className="text-sm text-left text-red-500">
                  Please enter a message
                </p>
              )}
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </dialog>
    </>
  );
}
