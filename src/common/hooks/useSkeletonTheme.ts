import {useAppSelector} from "@/common/hooks";
import {selectThemeMode} from "@/app/model";

export const useSkeletonTheme = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const baseColor = themeMode === 'dark' ? '#27354f' : '#ebebeb'
    const highlightColor = themeMode === 'dark' ? '#3d4b72' : '#f5f5f5'
    return {baseColor, highlightColor}
}