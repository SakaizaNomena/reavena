import { Outlet, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const ComponentDetailPage = () => {
  const { componentId } = useParams();
  return <div className="grid grid-cols-6 gap-4 p-4 h-full">
    <div className="col-span-1">
      <Sidebar />
    </div>
    <div className="col-span-5 h-full">
      <Outlet />
    </div>
  </div>;
}

export default ComponentDetailPage;