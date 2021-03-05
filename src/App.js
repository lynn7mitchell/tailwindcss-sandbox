import logo from "./logo.svg";
import "./index.css";
import aviarOrange from "./images/aviar-orange.jpg";
function App() {
  return (
    <div className="min-h-screen bg-white grid grid-cols-3 w-full h-full">
      <div className="bg-blue-500 text-white rounded-b-lg shadow-2xl absolute top-0 p-4 w-full ">
        <p className="text-xl font-semibold">Shopazon</p>
      </div>
      <div className="border-black text-black rounded-lg shadow-2xl m-20">
        
          <img src={aviarOrange} alt="Aviar Orange" className="rounded-t-lg"/>
        <div className="p-2">
        <p className="text-lg font-medium ">
          Aviar <i className="text-sm font-light ">(Innova)</i>
        </p>

        <p className="text-sm font-base ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumfef expedita
          laboriosam quas iure quod animi possimus, doloremque dolore est totam,
          praesentium fugit illum nesciunt adipisci quae fugiat, atque dolor ut.
        </p>

    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>
      Add to cart
    </button>
</div>
      </div>
    </div>
  );
}

export default App;
