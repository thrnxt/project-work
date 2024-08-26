import { Routes, Route} from 'react-router-dom';
import './App.css'
import InsuranceHistoryPage from './pages/InsuranceHistoryPage/InsuranceHistoryPage';
import InsuranceReportPage from './pages/InsuranceReportPage/InsuranceReportPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import InsurancePolicy from './pages/InsurancePolicy/InsurancePolicy'
import InsuranceEvents from './pages/InsuranceEvents/InsuranceEvents'
import RequestHistory from './pages/RequestHistory/RequestHistory'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<InsuranceHistoryPage />} />
          <Route path='/insurance-report' element={<InsuranceReportPage/>}/>
          <Route path='/insurance-events' element={<InsuranceEvents/>}/>
          <Route path='/insurance-policy' element={<InsurancePolicy/>} />
          <Route path='/request-history' element={<RequestHistory/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
