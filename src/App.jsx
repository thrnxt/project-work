import { Routes, Route} from 'react-router-dom';
import './App.css'
import InsuranceHistoryPage from './pages/InsuranceHistoryPage/InsuranceHistoryPage';
import InsuranceReportPage from './pages/InsuranceReportPage/InsuranceReportPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import InsurancePolicyPage from './pages/InsurancePolicyPage/InsurancePolicyPage'
import InsuranceEventsPage from './pages/InsuranceEventsPage/InsuranceEventsPage'
import RequestHistory from './pages/RequestHistory/RequestHistory'
import InsuranceActiveCasesPage from './pages/InsuranceActiveCasesPage/InsuranceActiveCasesPage'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<InsuranceHistoryPage />} />
          <Route path='/insurance-report' element={<InsuranceReportPage/>}/>
          <Route path='/insurance-events' element={<InsuranceEventsPage/>}/>
          <Route path='/insurance-policy' element={<InsurancePolicyPage/>} />
          <Route path='/request-history' element={<RequestHistory/>} />
          <Route path='/insurance-active-cases' element={<InsuranceActiveCasesPage/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
