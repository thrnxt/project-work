import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { insurancePoliciesData } from "../../data";
import InsurancePolicy from "../../components/InsurancePolicy/InsurancePolicy";
import './InsurancePolicyPage.css'
import CardWrapper from './../../components/CardWrapper/CardWrapper';
import BonusMalus from './../../components/BonusMalus/BonusMalus';
import Container from "../../components/Container/Container";
export default function InsurancePolicyPage({ policy }) {

    return (
        <>
            <Header />
            <Container>
                <div className="insurance-policy__description"><span>Страховой полис –</span>  документ, подтверждающий договор страхования, который определяет покрываемые риски, условия выплаты возмещения, размер премии и срок действия.</div>
            </Container>
            <CardWrapper className={'insurance-policy__card'}>
                <span className="insurance-policy__title ">Страховые полисы:</span>
                <span className="insurance-policy__title-number">{insurancePoliciesData.length}</span>
            </CardWrapper>
            {insurancePoliciesData.map((policy) => (
                <InsurancePolicy key={policy.id} policy={policy} />
            ))}
            <BonusMalus value={'M'}/>
            <Container>
                <div className="insurance-policy__warning">Для скачивания страхового полиса перейдите во вкладку “Другие документы” в разделе “Цифровые документы”</div>
            </Container>
            <Footer />
        </>
    )
}