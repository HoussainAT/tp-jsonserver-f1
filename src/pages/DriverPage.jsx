import AddDriver from "../components/AddDriver";
import DriverList from "../components/DriverList";

const DriverPage = () => {
  return (
    <div>
      <div className="p-8 flex justify-center">
        <AddDriver />
      </div>
      <div className="p-8 m-10  border-l-4 border-gray-600 shadow-lg rounded bg-gray-300">
        <DriverList />
      </div>
    </div>
  );
};

export default DriverPage;
