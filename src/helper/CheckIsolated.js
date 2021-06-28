import { BirthChartData } from "../../data/BirthChartData"

const CheckIsolated={
    isIsolated(Chart,number){
        isolatedTitle=''
        isolatedDescribe=''
        if (Chart[4] == '' && (number == 1 || number == 3 || number == 7 || number == 9)) {

            if (number == 1 && Chart[0] != '' && Chart[1] == '' && Chart[3] == ''){
                isolatedTitle = BirthChartData['1CL'].title
                isolatedDescribe = BirthChartData['1CL'].describe
            }

            if (number == 3 && Chart[2] != '' && Chart[1] == '' && Chart[5] == ''){
                isolatedTitle = BirthChartData['3CL'].title
                isolatedDescribe = BirthChartData['3CL'].describe
            }


            if (number == 7 && Chart[6] != '' && Chart[3] == '' && Chart[7] == ''){
                isolatedTitle = BirthChartData['7CL'].title
                isolatedDescribe = BirthChartData['7CL'].describe
            }


            if (number == 9 && Chart[8] != '' && Chart[5] == '' && Chart[7] == '')
            {
                isolatedTitle = BirthChartData['9CL'].title
                isolatedDescribe = BirthChartData['9CL'].describe
            }       

        }
        if (Chart[6] == '' && number == 7) {
            isolatedTitle = BirthChartData['Not7'].title
            isolatedDescribe = BirthChartData['Not7'].describe
        }

        if (Chart[8] == '' && number == 9) {
            isolatedTitle = BirthChartData['Not9'].title
            isolatedDescribe = BirthChartData['Not9'].describe
        }    
        return {isolatedTitle,isolatedDescribe}
    }
}

export default CheckIsolated;