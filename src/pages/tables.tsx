import { Footer } from "../components/footer";
import { AuthorTable } from "../components/table/authorTable";
import { ProjectsTable } from "../components/table/projectsTable";

export const TablePage = () => {
  return (
    <div className="flex flex-col w-full gap-3 mt-6">
      <AuthorTable />
      <ProjectsTable />
      <Footer />
    </div>
  );
};
