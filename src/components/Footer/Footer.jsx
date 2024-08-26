import './Footer.css'
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__line"></div>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__follow-btn">Подписаться в TELEGRAM для уведомлений</div>
                    <img className="footer__logo" src="/img/footer-logo.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}