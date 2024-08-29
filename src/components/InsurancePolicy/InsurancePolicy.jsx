import { useState } from "react";
import './InsurancePolicy.css'
import Container from '../Container/Container'
import ArrowVertical from "../ArrowVertical/ArrowVertical";
export default function InsurancePolicy({ policy }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Container>
            <div className="insurance-policy">
                <div className="insurance-policy__header" onClick={toggleDetails}>
                    <span className="insurance-policy__count">{policy.count}</span>
                    <span className="insurance-policy__wrapper">
                        <div className="insurance-policy__number">{policy.number}</div>
                        <ArrowVertical isClick={!isOpen} color="var(--orange-color)" />
                    </span>
                </div>
                {isOpen && (
                    <div className="insurance-policy__details">
                        <p className="insurance-policy__details-text"><span>Наименование страховой компании:</span> {policy.companyName}</p>
                        <p className="insurance-policy__details-text"><span>Уникальный номер полиса:</span> {policy.policyNumber}</p>
                        <p className="insurance-policy__details-text"><span>Модель:</span> {policy.model}</p>
                        <p className="insurance-policy__details-text"><span>ГРНЗ:</span> {policy.grnz}</p>
                        <p className="insurance-policy__details-text"><span>Дата и время заключения:</span> {policy.dateTime}</p>
                        <p className="insurance-policy__details-text"><span>Начало действия:</span> {policy.startDate}</p>
                        <p className="insurance-policy__details-text"><span>Конец действия:</span> {policy.endDate}</p>
                    </div>
                )}
            </div>
        </Container>
    )
}