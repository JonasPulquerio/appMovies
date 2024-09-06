import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useEffect, useState } from "react";
import Loader from "../Loader";

//Filtrando vídeos por categoria ou título
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                //nesse caso o "e" é o mesmo que "event", o que poderia está sendo usado nesse caso também, mas por escolha minha optei por manter o "e" mesmo.
                onChange={e => setSearchText(e.target.value)}
            />   
            { 
                loading ? <Loader /> :
                <VideoList 
                    videos={foundVideos} 
                    emptyHeading={`Sem vídeos sobre "${searchText}"`}
                />
            }
        </section>
    );
}

export default SearchVideoList;
