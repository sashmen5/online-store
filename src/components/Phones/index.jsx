import React, {Component} from 'react';

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

export default Phones;