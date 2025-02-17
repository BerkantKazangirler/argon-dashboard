import { AuthorTable, ProjectsTable } from "@/components";

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
