import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconCoracao1 from "./coracao1.png";
import iconCoracao2 from "./coracao2.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id }) {

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? iconCoracao1 : iconCoracao2

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                alt="Capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img
                    src={icone}
                    alt="Ícone"
                    onClick={() => addFavorite({id})}    
                />
            </figure>
        </section>
    );
}

export default Card;
