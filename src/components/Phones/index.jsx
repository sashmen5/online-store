import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhones} from '../../actions';


class Phones extends Component {

  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    return (
			<div>
				Phones
			</div>
    )
  }
}

const mapDispathToProps = {
  fetchPhones
};

export default connect(null, mapDispathToProps)(Phones);