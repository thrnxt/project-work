import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InsuranceClass from "../../components/InsuranceClass/InsuranceClass";
import CardWrapper from './../../components/CardWrapper/CardWrapper';
import Container from '../../components/Container/Container'
import './InsuranceEventsPage.css'
import { insuranceClassesData1 } from "../../data";
import { insuranceClassesData2 } from "../../data";

export default function InsuranceEventsPage() {
    return (
        <>
            <Header />
            <Container className={'insurance-class__check-container'}>
                <div className="insurance-class__check-title">Проверка статуса страхового случая</div>
                <input className="insurance-class__check-input" placeholder="Введите Уникальный идентификатор Заявления СС"></input>
            </Container>
            <CardWrapper className={'insurance-class__card-title'}>
                История страхования:
            </CardWrapper>
            <Container className={'insurance-class__container'}>
                <InsuranceClass insuranceClasses={insuranceClassesData1} />
            </Container>
            <CardWrapper className={'insurance-class__card-title'}>
                Наличие/отсутствие страховых случаев:
            </CardWrapper>
            <Container className={'insurance-class__container'}>
                <InsuranceClass insuranceClasses={insuranceClassesData2} />
            </Container>
            <Footer />
        </>
    )
}