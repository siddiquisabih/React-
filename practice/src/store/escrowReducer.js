import Actions from "./Actions"


const initialState = {
    allCurrency: [],
    getCurrency: false,
    startEscrow: false,
    escrowFailed: false,

    transactionSuccessfull: false,
    transactionStatusData: [],

    transactionFailed: false,



}

const escrowRedu = (state = initialState, action) => {
    switch (action.type) {
        case Actions.escrowStarted:
            return Object.assign({}, initialState, { startEscrow: true, escrowFailed: false })

        case Actions.escrowFail:
            return Object.assign({}, initialState, { startEscrow: false, escrowFailed: true })

        case Actions.getCurrencyData:
            return Object.assign({}, initialState, { getCurrency: true, allCurrency: action.data })



        case Actions.transactionSuccess:
            return Object.assign({}, initialState, { transactionSuccessfull: true, transactionStatusData: action.data, transactionFailed: false })


        case Actions.transactionFail:
            return Object.assign({}, initialState, { transactionSuccessfull: false, transactionFailed: true })

        default:
            return state
    }
}



export default escrowRedu