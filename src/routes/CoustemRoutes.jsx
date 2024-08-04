import { Route, Routes } from "react-router-dom";
import Pokedesk from "../Components/Pokedesk/Pokedesk";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails";

function CoustemRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Pokedesk/>}/>
            <Route path="/Pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>
    )



}
export default CoustemRoutes;