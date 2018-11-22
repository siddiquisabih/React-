
import Actions from "./Actions"
import axios from "axios";


import Constants from "./constants";


class Midware {




    static submitForm(userdetail) {
        return (dispatch) => {



            var data = userdetail
            axios.post(`${Constants.BASE_URL}${Constants.START_ESCROW_PROCESS}`, data)

                .then((res) => {

                    dispatch(Actions.satrtEscrow())

                })
                .catch((err) => {

                    dispatch(Actions.failedEscrow())
                })




        }
    }





    static getAllCurrency() {
        return (dispatch) => {


            axios.get(Constants.BASE_URL + Constants.GET_ALL_CURRENCY)
                .then((res) => {

                    if (res.data[0] !== undefined) {
                        dispatch(Actions.getCurrency(res.data))
                    }
                })



        }
    }




    static transactionStatus(keyPass) {
        return (dispatch) => {

            console.log(keyPass)
            axios.post(`${Constants.BASE_URL}${Constants.GET_FORM_DETAILS}`, keyPass)
                .then((res) => {

                    if (res.data[0] !== undefined) {
                        dispatch(Actions.transactionSuccessful(res.data))
                    }

                    else {
                        dispatch(Actions.transactionError())
                    }


                })

        }
    }


}
export default Midware;