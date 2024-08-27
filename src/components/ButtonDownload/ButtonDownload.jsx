import './ButtonDownload.css'
export default function ButtonDownload({onClick, className}){
    return(
        <button className={`button-download ${className}`} onClick={onClick}>Скачать</button>
    )
}