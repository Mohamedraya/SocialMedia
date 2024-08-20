
export const getFontFamily = (baseFont = "Inter", weight) => {

    switch (weight) {

        case "100":
            return `${baseFont}-Thin`;
            break;

        case "200":
            return `${baseFont}-ExtraLight`;
            break;

        case "300":
            return `${baseFont}-Light`;
            break;

        case "400":
        case "normal":
            return `${baseFont}-Regular`;
            break;

        case "500":
            return `${baseFont}-medium`;
            break;

        case "600":
            return `${baseFont}-SemiBold`;
            break;

        case "700":
        case "bold":
            return `${baseFont}-Bold`;
            break;

        case "800":
            return `${baseFont}-ExtraBold`;
            break;

        case "900":
            return `${baseFont}-Black`;
            break;
        default:
            return `${baseFont}-Regular`;
    }

}