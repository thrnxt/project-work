import './CardWrapper.css'
export default function CardWrapper({children, className, onClick}){
    return(
        <button onClick={onClick} className={`card-wrapper ${className}`}>
            {children}
        </button>
    )
}