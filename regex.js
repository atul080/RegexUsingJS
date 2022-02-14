  /**
   * @Author: Atul Srivastav
   * @Date 11-Feb-2022
   * User Validation
   */
  class ValidationCheck{
        /**
         * valueValidation method to validate pincode.
         * if it is 6 digit then valid else throw error.
         * @param pin 
         */
        valueValidation(pin) 
          {
                let valRegex=RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
                if((valRegex.test(pin)))
                    console.log("Valid pin code: "+pin)
                else
                    throw "Invalid Pincode: "+pin   
          }
  }

  let obj=new ValidationCheck();
    try{
    obj.valueValidation('400088')
    obj.valueValidation('400 088')
    }
    catch(e)
    {
      console.error(e);
    }