import { createContext, useState } from "react";
import { Component1 } from "./components/Component1/Component1";

export const UserContext = createContext();

/**
 * Проблема:
 * 1) Вложенность кобейген сайын кадагалау киын болады
 * 2) Props көбейген сайын оны жіберу
 * 3) Керек емес компоненттерге айнымалыларды жіберу: Component1, Component2
 * @returns
 */

/**
 * Қай кезде біз бүны қолданамыз?
 * 1. user - глобальный объект
 * 2. Сайттын темасы: Dark or White
 */

/**
 * Қайсы локальное состояние ал қайсы глобальное состояние?
 * Егер сіздің состояние басқа компоненттерде қолданылса онда бұл - глобальное сотояние
 */

function App() {
  const [user, setUser] = useState(null);

  function logout() {
    setUser(null);
  }

  function login() {
    setUser({ name: "Madi" });
  }

  /**
   * 1. Контекс объектісін құру
   * 2. Компоненттерді қоршап алу керек UserContext.Provider
   * 3. Бастапқы мәнді бердік немесе айнымалыны жіберу / қадағалау
   */

  return (
    <UserContext.Provider value={user}>
      <div>
        <button onClick={login}>Кіру</button>
      </div>
      <div>
        <button onClick={logout}>Шығу</button>
      </div>
      <Component1 />
    </UserContext.Provider>
  );
}

export default App;
