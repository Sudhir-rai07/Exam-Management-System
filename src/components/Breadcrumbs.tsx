import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Grid2x2, Slash } from "lucide-react";

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
            <BreadcrumbItem>
             <Grid2x2 size={14}/> <BreadcrumbLink href={currentLink}>{crumb}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </BreadcrumbList>
        </Breadcrumb>
      );
    });
  return <div>{crumbs}</div>;
};

export default Breadcrumbs;
