import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from "react-router"
import { createDeal } from '../actions/index';

class DealNew extends Component {
	  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createDeal(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/proposal');
      });
  }

  render() {
    const { fields: { title, categories, content}, handleSubmit } = this.props;
    return (
	<div className="aboutcontainer">
		<img id="header-image" src="assets/images/topimg.png" width="100%"/>		
		<h1 id="main-title">Shopping</h1>
		<div className="wrapper1">
      	<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div id="usernew">
					<div>
						<p>
							<label> Your Name :</label>
							<input type="text" id = "BuyName"{...title}/>
							<div className="text-help">
            	{title.touched ? title.error : ''}
          		</div>
						</p>
					</div>
					<div id="threecols">
						<div className="col1of3">
							<img src="assets/images/chair.png" alt="item1" id="item1pic" className="item-pic" width="250px" height="200px" />
							<h3>Winnie the pooh chair</h3>
							<p>$150 for each</p>
							<p>
								<label><b>Quantity:</b></label>
								<input type="text" {...categories} />
							</p>
						<div className="col2of3">
							<p>
							</p>
						</div>
						</div>
						<div className="col3of3">
							<img src="assets/images/charger.jpg" alt="item3" id="chargerpic" className="item-pic" width="250px" height="200px" />
							<h3>Winnie the pooh charger</h3>
							<p>$50 for each</p>
							<p>
								<label><b>Quantity:</b></label>
								<input type="text" {...content} />
							</p>
							<br /><br />
						</div>
					</div>
					<button type = "submit" id = "submitbutton">Checkout</button>
        	<Link to ="/" className = "btn-cancel">Cancel</Link>
				</div>
			</form>
		</div>
	</div>
	);
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
	}
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
	validate
}, null, { createDeal })(DealNew);
