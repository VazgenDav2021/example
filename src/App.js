// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import Contacts from "./pages/Contacts/Contacts";
// import DetailedProduct from "./pages/DetailedProduct/DetailedProduct";
// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<Contacts />} />
//         <Route path="/product/:moyId" element={<DetailedProduct />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// // import React, { useEffect, useState } from "react";

// // const App = () => {
// //   const [userId, setUserId] = useState("0");
// //   const [inputsValues, setInputsValue] = useState("");

// //   const changeIinputValue = (e) => {
// //     // e.target.value занчение inputa
// //     setInputsValue(e.target.value);
// //   };

// //   const searchUser = () => {
// //     setUserId(inputsValues);
// //   };

// //   const getUsersInfo = async () => {
// //     const data = fetch(`/${userId}`);
// //   };

// //   useEffect(() => {
// //     getUsersInfo();
// //   }, [userId]);

// //   return (
// //     <div>
// //       {/* <input value={inputsValues} onChange={(e) => changeIinputValue(e)} /> */}
// //       <input value={inputsValues} onChange={changeIinputValue} />
// //       <button onClick={searchUser}>Search</button>
// //     </div>
// //   );
// // };

// // export default App;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment_number } from "./store/reducers/counterReducer";

const App = () => {
  // функция с помощю который мы передаем action в  store
  const dispatch = useDispatch();

  // здесь мы берем значение из стора
  // Для того чтобы понять что писать после state. надо посмотреть в store.js-e
  // в нашем случает это был counter
  const { counter } = useSelector((state) => {
    return state.counter;
  });

  const handleIncrementNumber = () => {
    // dispatch-им action с payload = 111, в стор
    dispatch(increment_number(1));
  };

  return (
    <div>
      <p>{counter}</p>
      <button>-</button>
      <button onClick={handleIncrementNumber}>+</button>
    </div>
  );
};

export default App;
