import { AuthorTable } from "../components/table/author-table";
import { ProjectsTable } from "../components/table/projects-table";

export const TablePage = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-3 mt-3">
        <AuthorTable />
        <ProjectsTable />
      </div>
    </>
  );
};
