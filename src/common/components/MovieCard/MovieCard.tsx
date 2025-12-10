import {IMAGE_PATH, POSTER_SIZES} from "@/common/constants/constants.ts";

type Props = {
    imgSrc: string
    title: string
}

export const MovieCard = ({imgSrc, title}: Props) => {
    const imagePath = IMAGE_PATH + POSTER_SIZES.CARD + imgSrc

    return (
        <article>
            <img src={imagePath} alt={'movie poster'}/>
            <h4>{title}</h4>
        </article>
    )
}