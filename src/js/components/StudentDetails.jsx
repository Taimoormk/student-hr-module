import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, bool, any } from 'prop-types';
import ExpansionPanel, {
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	ExpansionPanelActions
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typed from 'react-typed';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import * as actions from '../actions';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	heading: {
		fontSize: theme.typography.pxToRem(15)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	icon: {
		verticalAlign: 'bottom',
		height: 20,
		width: 20
	},
	details: {
		alignItems: 'center'
	},
	column: {
		flexBasis: '33.33%'
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline'
		}
	},
	expansion: {
		fontFamily: 'Roboto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignContent: 'center'
	},
	expansionSection: {
		flex: 1
	}
});

export class StudentDetails extends Component {
	static propTypes = {
		saveStudentDetailsAction: func.isRequired,
		notificationResetAction: func.isRequired,
		saveFormDataIsSuccess: bool.isRequired,
		studentData: arrayOf(any).isRequired
	};

	saveStudentDetails = studentHR => {
		const { saveStudentDetailsAction } = this.props;
		saveStudentDetailsAction(studentHR);
	};

	notificationReset = () => {
		const { notificationResetAction } = this.props;
		notificationResetAction();
	};

	renderStudentSections = () => {
		const { studentData, saveFormDataIsSuccess } = this.props;
		return studentData.map((item, i) => {
			const { studentHR } = studentData[i];
			const id = studentData[i].computerNumber;
			return (
				<div key={id} className={styles.root}>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typed
								className="heading"
								strings={[
									`Student Name: ${
										studentHR.studentDetails.studentName
									} Date of Birth: ${studentHR.studentDetails.dob}`
								]}
								typeSpeed={40}
								backSpeed={50}
								loop
							/>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails style={styles.details}>
							<div className="expansion">
								Student Details
								<p className="expansion-section">
									Name: {studentHR.studentDetails.studentName}
								</p>
								<p className="expansion-section">
									BForm: {studentHR.studentDetails.bForm}
								</p>
								<p className="expansion-section">
									Date of Birth: {studentHR.studentDetails.dob}
								</p>
								<p className="expansion-section">
									ID Mark: {studentHR.studentDetails.idMark}
								</p>
								<p className="expansion-section">
									Hafiz: {studentHR.studentDetails.hafiz && 'Yes'}
								</p>
								<hr />
							</div>
						</ExpansionPanelDetails>
						<ExpansionPanelDetails className={styles.details}>
							<div className="expansion">
								Father Details
								<p className="expansion-section">
									Name: {studentHR.fatherDetails.fatherName}
								</p>
								<p className="expansion-section">
									CNIC: {studentHR.fatherDetails.fatherCnic}
								</p>
								<p className="expansion-section">
									Mobile: {studentHR.fatherDetails.fatherMobile}
								</p>
								<p className="expansion-section">
									Address: {studentHR.fatherDetails.fatherAddress}
								</p>
								<hr />
							</div>
						</ExpansionPanelDetails>
						<ExpansionPanelDetails className={styles.details}>
							<div className="expansion">
								Admission Details
								<p className="expansion-section">
									Number: {studentHR.classDetails.admissionNumber}
								</p>
								<p className="expansion-section">
									Computer Number: {studentHR.classDetails.computerNumber}
								</p>
								<p className="expansion-section">
									Class:{' '}
									{`${studentHR.classDetails.selectClass}${
										studentHR.classDetails.selectSection
									}`}
								</p>
								<p className="expansion-section">
									Subject: {studentHR.classDetails.selectSubject}
								</p>
								<hr />
							</div>
						</ExpansionPanelDetails>
						<ExpansionPanelDetails className={styles.details}>
							<div className="expansion">
								Emergency Details
								<p className="expansion-section">
									Emergency Name: {studentHR.emergencyDetails.emergencyName}
								</p>
								<p className="expansion-section">
									Emergency Relation:{' '}
									{studentHR.emergencyDetails.emergencyRelation}
								</p>
								<p className="expansion-section">
									Emergency Number: {studentHR.emergencyDetails.emergencyNumber}
								</p>
								<p className="expansion-section">
									Medical Notes: {studentHR.emergencyDetails.medicalNotes}
								</p>
								<hr />
							</div>
						</ExpansionPanelDetails>
						<ExpansionPanelDetails>
							<Button
								size="small"
								onClick={() => this.saveStudentDetails(studentHR)}
							>
								Submit
							</Button>
							<div>
								{saveFormDataIsSuccess && (
									<Button size="small" onClick={() => this.notificationReset()}>
										ok
									</Button>
								)}
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<Divider />
				</div>
			);
		});
	};

	render() {
		const { saveFormDataIsSuccess } = this.props;
		return (
			<div>
				<div className="student-section">
					<div>{this.renderStudentSections()}</div>
					<div>{saveFormDataIsSuccess && 'Saved Successfully'}</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ studentData, saveFormData }) {
	return {
		studentData: studentData.studentData,
		isLoading: studentData.isLoading,
		error: studentData.error,
		saveFormDataIsSuccess: saveFormData.isSuccess
	};
}

export default connect(mapStateToProps, {
	fetchStudentsHRData: actions.fetchStudentsHRData,
	saveStudentDetailsAction: actions.saveStudentDetailsAction,
	notificationResetAction: actions.notificationResetAction
})(StudentDetails);
