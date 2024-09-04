import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconCoracao1 from "./coracao1.png";
import iconCoracao2 from "./coracao2.png";

function Card({ id }) {
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                alt="Capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img src={iconCoracao1} alt="Ícone" />
            </figure>
        </section>
    );
}

export default Card;
