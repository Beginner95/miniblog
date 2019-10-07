export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }

    value() {
        const value = {}
        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        })
        return value
    }

    isValid() {
        let isFormValid = true

        Object.keys(this.controls).forEach(control => {
            const validators = this.contorls[contorls]

            let isValis = true
            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid
            })

            isFormValid = isFormValid && isValid
        })

        return isFormValid
    }
}