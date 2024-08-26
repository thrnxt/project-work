import Header from "../../components/Header/Header";
import './InsuranceHistoryPage.css'
import { useNavigate } from "react-router-dom";
import CardWrapper from './../../components/CardWrapper/CardWrapper';
export default function InsuranceHistoryPage() {
	const navigate = useNavigate();
	const goToInsuranceReportPage = () => {
		navigate('/insurance-report')
	}
	const goToInsuranceEvents = () => {
		navigate('/insurance-events')
	}
	const goToInsurancePolicy = () => {
		navigate('/insurance-policy')
	}
	const goToRequestHistory = () => {
		navigate('/request-history')
	}
	return (
		<>
			<Header />
			<main className="insurance-history">
				<div className="container">
					<div className="insurance-history__main-content">
						<CardWrapper onClick={goToInsuranceReportPage} className="insurance-history__menu-button">
							Страховой отчет
						</CardWrapper>

						<CardWrapper onClick={goToInsuranceEvents} className="insurance-history__menu-button">
							Проверка страховых событий
						</CardWrapper>

						<CardWrapper onClick={goToInsurancePolicy} className="insurance-history__menu-button">
							Страховой полис
						</CardWrapper>

						<CardWrapper onClick={goToRequestHistory} className="insurance-history__menu-button">
							Мои запросы
						</CardWrapper>
					</div>
				</div>
			</main>
			<footer className="insurance-history__footer">
				<div className="container">
					<a href="https://t.me/gkb_kz_bot" target="_blank" rel="noopener noreferrer" className="insurance-history__subscribe-button" >
						ПОДПИСАТЬСЯ В ТЕЛЕГРАММ ДЛЯ УВЕДОМЛЕНИЙ
					</a>
					<div className="insurance-history__credit-bureau">
						<img src="/img/footer-logo.svg" alt="" />
					</div>
				</div>
			</footer>
		</>

	)
}