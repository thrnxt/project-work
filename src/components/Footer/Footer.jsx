import './Footer.css'
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__line"></div>
            <div className="container">
                <div className="footer__content">
                    <a href='https://t.me/gkb_kz_bot' target='_blank' className="footer__follow-btn" rel="noreferrer">Подписаться в TELEGRAM для уведомлений</a>
                    <img className="footer__logo" src="/img/footer-logo.png" alt="" />
                </div>
            </div>
        </footer>
    )
}