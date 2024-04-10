import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        I tuoi progetti
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Aggiungi progetto
        </Button>
      </div>
      <ul></ul>
    </aside>
  );
}
