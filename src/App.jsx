import { Link, Routes, Route } from "react-router-dom";
import { PokemonList } from "./components/PokemonList";
import { Layout } from "./components/Layout";


export const App = () => {
  
    return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="fire" element={<PokemonList type="fire" />} />
        <Route path="water" element={<PokemonList type="water" />} />
        <Route path="grass" element={<PokemonList type="grass" />} />
        <Route path="electric" element={<PokemonList type="electric" />} />
      </Route>
    </Routes>
  );
};
