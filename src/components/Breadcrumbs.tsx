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
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="ml-4">
             <LayoutGrid size={14}/> <BreadcrumbLink href={currentLink} className="text-pink-600">{crumb}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </BreadcrumbList>
        </Breadcrumb>
      );
    });
  return <div className="">{crumbs}</div>;
};

export default Breadcrumbs;
