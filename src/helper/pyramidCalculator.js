const pyramidCalculator = {
    splitNumber(number) {
        number = number.split('-')
        var day = number[0]; var month = number[1]; var year = number[2]
        return { day, month, year }
    },

    sumFoot(number) {
        var plus = "+"
        while (number.length > 1) {
            number = '' + eval(('' + number).split('').join(plus))
        }
        return number
    },

    isMasterNumber(num) {
        return num == '10' || num == '11'
    },

    sumTop(number) {
        var plus = "+"
        while (number.length > 1 && !this.isMasterNumber(number)) {
            number = '' + eval(('' + number).split('').join(plus))
        }
        return number
    },

    calNumberPyramid(number) {
        number = this.splitNumber(number)

        var leftFoot = this.sumFoot(number.month)
        var midFoot = this.sumFoot(number.day)
        var rightFoot = this.sumFoot(number.year)

        var firstTop = this.sumFoot((leftFoot + midFoot).toString())
        var secondTop = this.sumFoot((midFoot + rightFoot).toString())

        var thirdTop = this.sumTop((firstTop + secondTop).toString())
        var fourthTop = this.sumTop((leftFoot + rightFoot).toString())

        return { firstTop, secondTop, thirdTop, fourthTop }
    }
}

export default pyramidCalculator;