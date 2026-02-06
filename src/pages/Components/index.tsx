import Sidebar from "../../components/Sidebar";

const ComponentsPage = () => {
  return <div className="grid grid-cols-6 gap-4 p-4 h-full">
    <div className="col-span-1">
      <Sidebar />
    </div>
    <div className="col-span-5 h-full">

    </div>
  </div>;
}

export default ComponentsPage;