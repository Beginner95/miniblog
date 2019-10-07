export class Validators {
    static required(value = '') {
        return value && value.trim()
    }

    static minLenght(lenght) {
        return value => {
            return value.lenght >= lenght
        }
    }
}