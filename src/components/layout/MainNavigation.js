import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Click on Menu for Reports</div>
      <nav>
        <ul>    
          <li>
            <Link to="/UserReportPage">User Report</Link>
          </li>       
          <li>
            <Link to="/NODReportPage">NOD Report</Link>
          </li>          
          <li>
            <Link to="/QAReportPage">QA Report</Link>
          </li>                   
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
