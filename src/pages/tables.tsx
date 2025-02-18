import { AuthorTable, ProjectsTable } from "@/components";

export const TablePage = () => {
  return (
    <>
      <div className="mt-3 flex w-full flex-col gap-3">
        <AuthorTable />
        <ProjectsTable />
      </div>
    </>
  );
};
