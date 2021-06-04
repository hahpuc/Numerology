
const LetterToNumber = {
    "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9,
    "J": 1, "K": 2, "L": 3, "M": 4, "N": 5, "O": 6, "P": 7, "Q": 8, "R": 9,
    "S": 1, "T": 2, "U": 3, "V": 4, "W": 5, "X": 6, "Y": 7, "Z": 8
}

// Vowel/Consonant (Nguyên âm/ Phụ âm)
// 0: Nguyên âm , 1: Phụ âm 
const LetterCV = {
    "A": 0, "B": 1, "C": 1, "D": 1, "E": 0, "F": 1, "G": 1, "H": 1, "I": 0,
    "J": 1, "K": 1, "L": 1, "M": 1, "N": 1, "O": 0, "P": 1, "Q": 1, "R": 1,
    "S": 1, "T": 1, "U": 0, "V": 1, "W": 1, "X": 1, "Y": 0, "Z": 1,
}

const calculator = {
    isMasterNumber(num) {
        return num == '10' || num == '11' || num == '22'
    },

    calNumber(number) {
        var plus = "+"

        while (number.length > 1 && !calculator.isMasterNumber(number)) {
            number = '' + eval(('' + number).split('').join(plus))
        }

        console.log(number)
    },
    nameInfo(name) {
        var upperName = name.toUpperCase()

        var vowelArray = ''
        var consonantArray = []

        for (var i = 0; i < upperName.length; ++i) {
            var letter = upperName[i]
            var letterToNumber = LetterToNumber[letter]
            var letterCV = LetterCV[letter]

            if (letter != ' ') {
                vowelArray += letterToNumber
                consonantArray += letterCV
            }
        }

        console.log(vowelArray)
        console.log(consonantArray)

        // Soul: con số linh hồn - Cộng tổng các số ở phần nguyên âm (0)
        // Outer Expression: con số Biểu Đạt - Cộng tổng các số ở phần phụ âm (1)
        var soulSum = '0'
        var outerSum = '0'
        for (var i = 0; i < vowelArray.length; ++i) {
            if (consonantArray[i]) {
                // outerNumber += 
            }
        }
    }

}

export default calculator;