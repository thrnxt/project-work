import React from 'react';
import './BonusMalus.css';
import CardWrapper from '../CardWrapper/CardWrapper';
import Container from '../Container/Container';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import { useLocation } from 'react-router-dom';

const calculateProgress = (value) => {
    if (value === "M") {
        return 3;
    }
    const maxClass = 13;
    const numericValue = parseInt(value, 10);
    return ((numericValue) / (maxClass)) * 100;
};

export default function BonusMalus({ value }) {
    const progress = calculateProgress(value);
    const location = useLocation();
    const isInsuranceReportPage = location.pathname === '/insurance-report' ? true : false;
    return (
        <div className="bonus-malus">
            <CardWrapper>
                <div className="bonus-malus__header">
                    Класс бонус-малус:
                </div>
            </CardWrapper>
            <Container>
                <div className="bonus-malus__description">
                    <span>Бонус-малус</span> – система, изменяющая страховую премию клиента в зависимости от его истории страховых случаев.
                </div>
                <div className="bonus-malus__content">
                    <div className="bonus-malus__value">{value}</div>
                    <div className="bonus-malus__progress">
                        <span className="bonus-malus__progress-label">Класс M</span>
                        <div className="bonus-malus__progress-bar">
                            <div
                                className="bonus-malus__progress-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="bonus-malus__progress-label">Класс 13</span>
                    </div>
                </div>
                <div className="bonus-malus__info">
                    <div className="bonus-malus__info-item">
                        <span className="bonus-malus__info-label">Дата присвоения:</span>
                        <span className="bonus-malus__info-value">31.12.2007</span>
                    </div>
                    <div className="bonus-malus__info-item">
                        <span className="bonus-malus__info-label">Страховая компания:</span>
                        <span className="bonus-malus__info-value bonus-malus__info-value-right">STANDARD</span>
                    </div>
                </div>

                {isInsuranceReportPage && (
                    <div className="bonus-malus__actions">
                    <div className="bonus-malus__report-descr">Получить страховой отчет</div>
                    <ButtonDownload/>
                </div>
                ) }
               
            </Container>
        </div>
    );
};




