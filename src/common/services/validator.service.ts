import Validator from 'fastest-validator';


const validator = new Validator();

const validate = (schema: object, data: any) => {
  const check = validator.compile(schema);

  return check(data);
}

export default { 
  validate
}