import { createUser } from "../api/driverApi";

export default function AddDriver() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const newDriver = await createUser(data);
      console.log("newDriver", newDriver);
      window.location.reload();
      alert("Pilote ajouté avec succès !");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-300 p-4 border-l-4 border-gray-600 rounded flex flex-col w-1/3 max-w-lg shadow-md">
      <h1 className="font-bold text-2xl text-center p-2">Ajouter un pilote</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <label htmlFor="name" className="">
          Nom du pilote :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
        />
        <label htmlFor="team">Équipe : </label>
        <input
          id="team"
          name="team"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
        <label htmlFor="urlimage">Url de l&apos;image du pilote : </label>
        <input
          type="text"
          id="urlimage"
          name="urlimage"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Ajouter le pilote
        </button>
      </form>
    </div>
  );
}
