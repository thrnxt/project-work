import './ArrowVertical.css';

export default function ArrowVertical({ isClick }) {
    return (
        <div 
            className={`arrow ${isClick ? "down" : "up"}`}
        ></div>
    );
}
