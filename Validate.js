
function controlEmail(email) {
    let result = '';
    if (!email) {
      return 'Email can not be empty';
    }
  
    if (!email.includes('@')) {
      result += 'Invalid email format \n';
    }
  
    if (result != '') {
      return result.slice(0, -1);
    }
  
    return true;
  }
  
  function controlInput(text, type, max, min) {
    let result = '';
  
    if (!text) {
      return `${type} section must not be empty`;
    }
  
    if (max && text.length > max) {
      result += `${type} section must be maximum ${max} characters \n`;
    }
  
    if (min && text.length < min) {
      result += `${type} section must be minimum ${min} characters \n`;
    }
  
    if (result !== '') {
      return result.slice(0, -1);
    }
  
    return true;
  }
  
  function controlSelect(value, name) {
    if(!value) {
      return `${name} section must be checked`;
    }
  
    return true;
  
  }
  
  
  export function controlForm(arr) {
  
    let formResult = '';
    arr.forEach(element => {
  
      if (element.type === 'email') {
        let result = controlEmail(element.value);
        if (result != true) {
          formResult += result + '\n';
        }
      }
  
      if (element.type === 'text') {
        let result = controlInput(element.value, element.name, element.max || null, element.min || null);
        if (result != true) {
          formResult += result + '\n';
        }
      }
  
      if(element.type === 'select') {
        let result = controlSelect(element.value, element.name);
        if (result != true) {
          formResult += result + '\n';
        }
      }
  
    });
  
    if (formResult !== '') {
      return formResult;
    } else {
      return true;
    }
  
  }
  
