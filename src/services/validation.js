import * as yup from "yup"

const notAllowedSymbols = ['<', '>', ':', 'js', 'javascript']

const checkNotAllowedCharacters = (val) => {
    const isNotAllowedSymbolsExist = notAllowedSymbols.find(el => val.includes(el))
    return val ? !isNotAllowedSymbolsExist : true
}

const schema = yup.object({
    nickName: yup.string().min(1)
        .required()
        .max(100).test(
            'is-not-allowed-symbols',
            'is not allowed characters',
            checkNotAllowedCharacters
        )
    ,
    source: yup.string().required().max(100).test(
        'is-not-allowed-symbols',
        'is not allowed characters',
        checkNotAllowedCharacters),

    telegram: yup.string().required().max(100).test(
        'is-not-allowed-symbols',
        'is not allowed characters',
        checkNotAllowedCharacters),
    email: yup.string().required().email().max(100).test(
        'is-not-allowed-symbols',
        'is not allowed characters',
        checkNotAllowedCharacters),
}).required()

export default schema