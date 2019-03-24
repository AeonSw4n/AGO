import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function ReturnText(answer) {
	if (answer == 'Yes') {
		return (
			<p class="alertText" style={{'text-align':'center'}}>Based on the information provided, this case may meet the definition of labor trafficking under Massachusetts law.
							Please contact the local police department, local District Attorney’s Office, or state Attorney General’s Office immediately.</p>
		);
	}
	else if(answer == 'Maybe'){
		return (
			<p class="alertText" style={{'text-align':'center'}}>Based on the information provided, this case may meet the definition of labor trafficking under Massachusetts law.
							Consider going back to the "Assess" menu and assessing more categories, or, contact the local police department, local District Attorney’s office, or
							state Attorney General’s Office.</p>
		);
	}
	else {
		return (
			<p class="alertText" style={{'text-align':'center'}}>This case cannot be considered to be at the level of human trafficking under Massachusetts
	          law. Please contact a local, state, or federal prosecutor immediately and
	          continue the criminal investigation.</p>
		);
	}
}



function Result(props) {

  return (
      <div>
        {ReturnText(props.quizResult)}
      </div>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
