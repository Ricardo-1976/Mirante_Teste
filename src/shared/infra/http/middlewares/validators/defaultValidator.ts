const { validationResult } = require('express-validator');
let failCode = 422;
let message = 'Todos os campos devem estar preenchidos corretamente';

/**
 * @description Checa a validação dos paramentros da rota
 * @param errorOptions {{failCode: Integer, message: String}} - (Opcional) Passe se quiser mudar a mensagem padrão
 * @return {function}
 */
const defaultCheckValidation = (errorOptions?: any) => {
  failCode = errorOptions?.failCode || failCode;
  message = errorOptions?.message || message;
  return _check;
};

const _check = (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { errors: any; message: string; }): any; new(): any; }; }; }, next: () => void) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(failCode)
      .json({
        errors: errors.array(),
        message: message
      });
  }
  next();
};

export default defaultCheckValidation