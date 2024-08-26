import { useState } from "react";
import Header from "../../components/Header/Header";
import './InsuranceReportPage.css';
import CardWrapper from './../../components/CardWrapper/CardWrapper';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';

const RegistrationItem = ({ title, date }) => (
    <div className="insurance-case__registration-item">
        <p className="insurance-case__registration-title">{title}</p>
        <p className="insurance-case__registration-date">{date}</p>
    </div>
);

function InsuranceReportPage() {
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
    const insurancePolicies = [
        {
            id: 1,
            insuranceClass: 'ОС ГПО ВТС',
            policyNumber: '1111А1111111А',
            companyName: 'НСК',
            policyDates: '27.07.2023 - 26.07.2024'
        },
        {
            id: 2,
            insuranceClass: 'Каско',
            policyNumber: '2222B2222222B',
            companyName: 'Росгосстрах',
            policyDates: '01.01.2024 - 31.12.2024'
        },
        {
            id: 3,
            insuranceClass: 'noname',
            policyNumber: '77777777777777',
            companyName: 'Salut',
            policyDates: '01.01.2024 - 31.12.2024'
        }
    ]


    const [showAllCases, setShowAllCases] = useState(false);
    const handleToggleCases = () => {
        setShowAllCases(!showAllCases);
    };
    const casesToShow = showAllCases ? insuranceCases : insuranceCases.slice(0, 1);
    return (
        <>
            <Header />
            <Container>
                <div className="report__description">
                    <span className="report__description-title">Страховой отчет – </span>
                    получение полной или частичной информации, содержащейся в базе данных,
                    в виде установленных форм отчетов.
                </div>
            </Container>
            <section className="report">
                <Container>
                    <h2 className="report__table-title">Полисы/договоры страхования:</h2>
                </Container>
                <CardWrapper className="report__table-header">
                    <span className="report__table-status">Активные:</span>
                    <span className="report__table-number">{insurancePolicies.length}</span>
                </CardWrapper>
                <Container>
                    <table className="report__table">
                        <thead>
                            <tr>
                                <th>Класс страхования</th>
                                <th>Уникальный номер страхового полиса</th>
                                <th>Наименование страховой компании</th>
                                <th>Даты действия страхового полиса</th>
                            </tr>
                        </thead>
                        <tbody>
                            {insurancePolicies.map((policy) => (
                                <tr key={policy.id}>
                                    <td>{policy.insuranceClass}</td>
                                    <td>{policy.policyNumber}</td>
                                    <td>{policy.companyName}</td>
                                    <td>{policy.policyDates}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Container>
            </section>

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
                {insuranceCases.length > 1 && <button className="insurance-case__see-more" onClick={handleToggleCases}>Показать все...</button>}
            </section>
            <Footer />
        </>
    );
};

export default InsuranceReportPage;
