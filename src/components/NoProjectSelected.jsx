import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="empty task" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">Nessun progetto selezionato</h2>
      <p className="mb-4 text-stone-400">Seleziona un progetto o iniziane uno nuovo.</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Crea nuovo progetto</Button>
      </p>
    </div>
  );
}
