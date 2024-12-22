import { deleteUser } from "../api/driverApi";
import { useDriverData } from "../hooks/useDriverData";

const DriverList = () => {
  const { drivers, setDrivers } = useDriverData();

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setDrivers(drivers.filter((driver) => driver.id !== id));
      alert("Pilote supprimé avec succès !");
    } catch (error) {
      console.error("Erreur suppression pilote :", error);
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl ">Liste des pilotes :</h1>
      {drivers.length === 0 ? (
        <p className="text-center text-gray-500">Aucun pilote disponible.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="bg-zinc-600 border-l-4 border-black rounded flex flex-row gap-4 items-center max-w-sm m-4 justify-around shadow-md"
            >
              <img
                src={driver.urlimage}
                alt="driver"
                className="max-h-36 max-w-36 border-gray-600"
              />
              <div className="flex flex-col items-center justify-between gap-1">
                <h1 className="font-bold text-xl text-white">{driver.name}</h1>
                <p className="text-white">Équipe : {driver.team}</p>
                <button
                  onClick={() => handleDelete(driver.id)}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5"
                >
                  Supprimer le pilote
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DriverList;
