import { useState } from "react";
import { useNavigate } from "react-router-dom"
import CardWrapper from "../CardWrapper/CardWrapper"
import Container from "../Container/Container"

export default function InsuranceCase() {

    const insuranceCases = [
        {
            caseNumber: '12121212',
            registrations: [
                { id: 1, title: 'Дата регистрации СС', date: '01.01.2022' },
                { id: 2, title: 'Дата регистрации заявления СС', date: '01.01.2022' },
                { id: 3, title: 'Дата регистрации документов СС', date: '01.01.2022' },
                { id: 4, title: 'Дата регистрации экспертиз СС', date: '01.01.2022' },
                { id: 5, title: 'Дата регистрации заключений СС', date: '01.01.2022' },
                { id: 6, title: 'Дата регистрации выплат СС', date: '01.01.2022' }
            ]
        },
        {
            caseNumber: '34343434',
            registrations: [
                { id: 1, title: 'Дата регистрации СС', date: '01.02.2022' },
                { id: 2, title: 'Дата регистрации заявления СС', date: '01.02.2022' },
                { id: 3, title: 'Дата регистрации документов СС', date: '01.02.2022' },
                { id: 4, title: 'Дата регистрации экспертиз СС', date: '01.02.2022' },
                { id: 5, title: 'Дата регистрации заключений СС', date: '01.02.2022' },
                { id: 6, title: 'Дата регистрации выплат СС', date: '01.02.2022' }
            ]
        },

    ];
    const RegistrationItem = ({ title, date }) => (
        <div className="insurance-case__registration-item">
            <p className="insurance-case__registration-title">{title}</p>
            <p className="insurance-case__registration-date">{date}</p>
        </div>
    );
    const [showAllCases, setShowAllCases] = useState(true);
    const casesToShow = showAllCases ? insuranceCases : insuranceCases.slice(0, 1);
    return (
        <section className="insurance-case">
            <CardWrapper className="insurance-case__header">
                <span className="insurance-case__title">Страховые случаи:</span>
                <span className="insurance-case__title-number">{insuranceCases.length}</span>
            </CardWrapper>
            {casesToShow.map((insuranceCase, index) => (
                <Container key={insuranceCase.caseNumber}>
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