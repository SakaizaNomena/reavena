import { useParams } from "react-router-dom";

const ComponentDetailPage = () => {
  const { componentId } = useParams();
  return <div>Component Detail Page {componentId}</div>;
}

export default ComponentDetailPage;