import {IMAGE_PATH, POSTER_SIZES} from "@/common/constants/constants.ts";
import {useNavigate} from "react-router";

type Props = {
    movieId: number;
    imgSrc: string
    title: string
}

export const MovieCard = ({movieId, imgSrc, title}: Props) => {
    const navigate = useNavigate();
    const imagePath = IMAGE_PATH + POSTER_SIZES.CARD + imgSrc
    const handleClick = () => {
        navigate(`/movies/${movieId}`)
    }

    return (
        <article>
            <img src={imagePath} alt={'movie poster'} onClick={handleClick}/>
            <h4>{title}</h4>
        </article>
    )
}