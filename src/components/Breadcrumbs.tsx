import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { LayoutGrid, Slash } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <Breadcrumb key={crumb}>
          <BreadcrumbList>
            <BreadcrumbItem className="">
              <BreadcrumbLink href={currentLink} className="text-[14px] cursor-pointer text-pink-600">{crumb}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </BreadcrumbList>
        </Breadcrumb>
      );
    });
  return <div className="flex items-center gap-2 ml-4"><LayoutGrid size={14}/>{crumbs}</div>;
};

export default Breadcrumbs;
