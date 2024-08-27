import CardWrapper from "../CardWrapper/CardWrapper"
import Container from "../Container/Container"
import { insuranceCasesData } from "../../data";
import './InsuranceCase.css'
import { useLocation } from "react-router-dom";
export default function InsuranceCase({ casesToShowValue }) {

    const RegistrationItem = ({ title, date }) => (
        <div className="insurance-case__registration-item">
            <p className="insurance-case__registration-title">{title}</p>
            <p className="insurance-case__registration-date">{date}</p>
        </div>
    );
    const casesToShow = casesToShowValue;
    const location = useLocation();
    const isInsuranceActive = location.pathname === '/insurance-active-cases' ? 'insurance-case__header-active' : 'insurance-case__header ';
    return (
        <section className="insurance-case">
            <CardWrapper className={isInsuranceActive}>
                <span className="insurance-case__title ">Страховые случаи:</span>
                <span className="insurance-case__title-number">{insuranceCasesData.length}</span>
            </CardWrapper>
            {casesToShow.map((insuranceCase, index) => (
                <Container className={` ${index > 0 ? `insurance-case__registration-container` : null}`} key={insuranceCase.caseNumber}>
                    <span className="insurance-case__registration-header">{index + 1}. Номер страхового случая: {insuranceCase.caseNumber}</span>
                    <div className="insurance-case__registration-section">
                        {insuranceCase.registrations.map((item) => (
                            <RegistrationItem key={item.id} title={item.title} date={item.date} />
                        ))}
                    </div>
                </Container>
            ))}
        </section>
    )
}