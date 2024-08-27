import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InsuranceCase from "../../components/InsuranceCase/InsuranceCase";
import './InsuranceActiveCasesPage.css'
import { insuranceCasesData } from '../../data'
export default function InsuranceActiveCasesPage() {
    return (
        <>
            <Header />
            <InsuranceCase casesToShowValue={insuranceCasesData} />
            <Footer />
        </>
    )
}