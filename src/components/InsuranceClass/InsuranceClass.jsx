import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './InsuranceClass.css'
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale';
import ButtonDownload from './../ButtonDownload/ButtonDownload';

const InsuranceClass = ({ insuranceClasses }) => {
    const [selectedInsuranceClass, setSelectedInsuranceClass] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showInsuranceDropdown, setShowInsuranceDropdown] = useState(false);

    const handleInsuranceClassClick = () => {
        setShowInsuranceDropdown(!showInsuranceDropdown);
    };

    const handleInsuranceClassSelect = (insuranceClass) => {
        setSelectedInsuranceClass(insuranceClass);
        setShowInsuranceDropdown(false);
    };

    return (
        <div className="insurance-class">
            <div className="insurance-class__field-group">
                <label className='insurance-class__label'>Класс страхования <span>*</span></label>
                <div className="insurance-class__dropdown" onClick={handleInsuranceClassClick}>
                    <div className='insurance-class__input'>
                        <div className="insurance-class__input-text">
                            {selectedInsuranceClass || 'Выберите класс'}
                            <div className={`insurance-class__arrow ${!showInsuranceDropdown ? "insurance-class__arrow-left" : "insurance-class__arrow-down"}`}></div>
                        </div>
                        {showInsuranceDropdown && (
                        <ul className="insurance-class__dropdown-menu">
                            {insuranceClasses.map((insuranceClass, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleInsuranceClassSelect(insuranceClass)}
                                >
                                    {insuranceClass}
                                </li>
                            ))}
                        </ul>
                    )}
                    </div>
                </div>
            </div>
            <div className="insurance-class__field-group">
                <label className='insurance-class__label'>Период <span>*</span></label>
                <div className="insurance-class__date-picker">
                    <DatePicker
                        className='insurance-class__input-data input-field'
                        selected={startDate}
                        locale={ru}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd.MM.yyyy"
                        popperClassName="custom-calendar"
                    />
                    <div className='insurance-class__line'></div>
                    <DatePicker
                        className='insurance-class__input-data'
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd.MM.yyyy"
                        popperClassName="custom-calendar"
                        locale={ru}
                    />
                </div>
            </div>
            <div className="insurance-class__actions">
                <div className='insurance-class__actions-text'>Показать отчет</div>
                <ButtonDownload onClick={()=>{console.log('nothing')}}>Скачать</ButtonDownload>
            </div>
        </div>
    );
};

export default InsuranceClass;
