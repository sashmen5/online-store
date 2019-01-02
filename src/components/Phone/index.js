import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPhoneById} from "../../actions";


class Phone extends Component {
	componentDidMount() {
		const phoneId = this.props.params.id;
		this.props.fetchPhoneById(phoneId);
	}

	render () {
		return (
			<div>Phone
				<div>Phone</div>
			</div>
		)
	}
}

const mapDispatchToProps = {
	fetchPhoneById
};

export default connect(null, mapDispatchToProps)(Phone);