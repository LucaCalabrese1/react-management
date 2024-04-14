import Input from './Input.jsx';
import { useRef } from 'react';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef(); //verra forewardata
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validate
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return; //usciamo
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Chiudi">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Input invalido
        </h2>
        <p className="mb-4 text-stone-600">
          Hai dimenticato di inserire un valore.
        </p>
        <p className="mb-4 text-stone-600">
          Inserisci un valore per ogni input.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-slate-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Titolo" />
          <Input textarea={true} ref={description} label="Descrizione" />
          <Input type="date" ref={dueDate} label="Data consegna" />
        </div>
      </div>
    </>
  );
}
