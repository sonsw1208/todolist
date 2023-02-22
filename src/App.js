import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if (todos.some((item) => item.id === value.replace(/\s/g, ""))) {
      toast("🦄 Công việc đã trùng", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setTodos((prev) => [
        ...prev,
        { id: value.replace(/\s/g, ""), job: value },
      ]);
      setValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-600 rounded-md text-white "
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Công việc :</h3>
          <ul>
            {todos.map((item) => {
              return (
                <li key={item.id}>
                  {item.job}{" "}
                  <span
                    onClick={() => handleDelete(item.id)}
                    className="pl-10 cursor-pointer"
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
