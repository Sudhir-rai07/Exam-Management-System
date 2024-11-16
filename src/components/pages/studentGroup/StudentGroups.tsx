import { useStudentGroupStore } from "@/zustand/store";
import { Link } from "react-router-dom";

const StudentGroups = () => {
  const { groups } = useStudentGroupStore();
  return (
    <div>
      <h1 className="text-xl font-semibold">Existing Student Group</h1>
      <div className="grid grid-cols-1 mt-8 place-items-center md:grid-cols-2 lg:grid-cols-3 md:place-items-start">
        {groups.map((group) => {
          return (
            <Link to={`${group.group_id}`}
              key={group.group_id}
              className="p-4 font-[500] max-w-[350px] w-full bg-white rounded-md shadow-md mb"
            >{group.name}</Link>
          );
        })}
      </div>
    </div>
  );
};

export default StudentGroups;
