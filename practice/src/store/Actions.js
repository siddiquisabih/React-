class Actions {

    static escrowStarted = "escrow"
    static escrowFail = 'fail escrow'
    
    static getCurrencyData = 'getCurrencyData'


    static transactionSuccess = 'transactionSuccess'
    static transactionFail = 'transactionFail'



    static satrtEscrow() {
        return {
            type: Actions.escrowStarted
        }
    }

    static failedEscrow() {
        return {
            type: Actions.escrowFail
        }
    }

    static getCurrency(data) {
        return {
            type: Actions.getCurrencyData,
            data: data
        }
    }



    static transactionSuccessful(data) {
        return {
            type: Actions.transactionSuccess,
            data: data
        }
    }
    static transactionError() {
        return {
            type: Actions.transactionFail
        }
    }

}


export default Actions;