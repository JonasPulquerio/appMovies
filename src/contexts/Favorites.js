import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

// Hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {

        // primeira coisa a se fazer é verificar se tem item favorito repetido
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

        // segundo coisa a se fazer é criar uma nova lista que recebe a lista anterior
        let newList = [...favorite]

        // terceira coisa a se fazer é verificar se não tem item repetido e adicionar o item na lista de favoritos
        if(!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // quarto item a se fazer é verificar se o item é repitido e retira-lo da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id )
        return setFavorite(newList)

    }

    return {
        favorite,
        addFavorite
    }
    
}
