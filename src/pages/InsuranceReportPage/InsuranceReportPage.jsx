import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import './InsuranceReportPage.css';
import CardWrapper from './../../components/CardWrapper/CardWrapper';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import InsuranceCase from "../../components/InsuranceCase/InsuranceCase";
import { insuranceCasesData } from "../../data";
import {insurancePoliciesData} from "../../data";
import BonusMalus from './../../components/BonusMalus/BonusMalus';

export default function InsuranceReportPage() {
    const navigate = useNavigate();
    const goToInsuranceAll = () => {
        navigate('/insurance-active-cases')
    }
   
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
                    <span className="report__table-number">{insurancePoliciesData.length}</span>
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
                            {insurancePoliciesData.map((policy) => (
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
            <InsuranceCase casesToShowValue={insuranceCasesData.slice(0, 1)}/>
            <Container>
                {insuranceCasesData.length > 1 && <button className="insurance-case__see-more" onClick={goToInsuranceAll}>Показать все...</button>}
            </Container>
            <BonusMalus value={'M'}/>
            <Footer />
        </>
    );
};
