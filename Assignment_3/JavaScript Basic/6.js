function replace_first_digit(input_str) {

    return input_str.replace(/[0-9]/, '$');
  }
  console.log(replace_first_digit("123thy"));
  console.log(replace_first_digit("%@#12rt"));  
  
