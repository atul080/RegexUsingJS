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
        /**
         * valueValidation method to validate email id.
         * if it is having mandatory parts then valid else throw error.
         * @param email 
         */
          emailValidation(email) 
          {
                let valRegex=RegExp('([a-z]|[a-z+-.a-z0-9])+((@[^-]+[a-z+.a-z+.a-z])|(@[^-][a-z+.a-z]))');
                if((valRegex.test(email)))
                    console.log("Valid email id: "+email)
                else
                    throw "Invalid email id: "+email   
          }
  }

  let obj=new ValidationCheck();
    try{
    obj.emailValidation('abc@yahoo.com')
    obj.valueValidation('400088')
    obj.valueValidation('400 088')
    obj.emailValidation('abcyahoo.com')
    obj.emailValidation('@ymy.co')
    }
    catch(e)
    {
      console.error(e);
    }