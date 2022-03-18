# form-validation-react-native

Add Validate.js in your project.

Import it in your form page.

    import { controlForm } from '../Validate';

Get your form data and validate.

    const data = {
      password: this.state.mobile,
      email: this.state.email,
      office_id: this.state.office_id
    };
    
    const formCtrl = [
      {
        type: 'text',
        value: data.mobile,
        name: 'Mobile Phone',
        min: 10,
        max: 12
      },
      {
        type: 'email',
        value: data.email,
        name: 'Email',
      },
      {
        type: 'select',
        value: data.office_id,
        name: 'Office Name',
      },
    ];

    let result = controlForm(formCtrl);

    if (!result) {
      this.showError(result);
      return;
    }

Select type can be used for checkbox or select.

