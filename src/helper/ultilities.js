
const ultilities = {
    removeVietNameseTone(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    },


    checkOutOfIndexBirthChartData(number) {
        if (number == '') return ''

        console.log(number[0])

        if (number[0] == '1') {
            if (number.length >= 5) return '11111'
        }
        else if (number[0] == '2') {
            if (number.length >= 5) return '22222'
        }
        else if (number[0] == '3') {
            if (number.length >= 5) return '33333'
        }
        else if (number[0] == '4') {
            if (number.length >= 4) return '4444'
        }
        else if (number[0] == '5') {
            if (number.length >= 5) return '55555'
        }
        else if (number[0] == '6') {
            if (number.length >= 5) return '66666'
        }
        else if (number[0] == '7') {
            if (number.length >= 5) return '77777'
        }
        else if (number[0] == '8') {
            if (number.length >= 5) return '88888'
        }
        else if (number[0] == '9') {
            if (number.length >= 6) return '999999'
        }

        return number

    }
}

export default ultilities