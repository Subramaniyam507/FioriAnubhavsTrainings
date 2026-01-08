sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    "use strict";

    return Controller.extend("mickey.controller.Main", {
        oView: null,
        onInit() {
            this.oView = this.getView()
            var oModel = new sap.ui.model.json.JSONModel()
            var data = {
                "empStr":{
                    "empId": 5000,
                    "empName": "Anubhav",
                    "salary": 9000,
                    "currency": "USD",
                    "smoker":false,

                },
                "empTable":[
                    {
                    "empId": 1000,
                    "empName": "Amrut",
                    "salary": 4000,
                    "currency": "USD",
                    "smoker":true,
                    
                },
                {
                    "empId": 5001,
                    "empName": "Bilal",
                    "salary": 8023,
                    "currency": "EURO",
                    "smoker":false,
                    
                },
                {
                    "empId": 5330,
                    "empName": "Shahid",
                    "salary": 11000,
                    "currency": "INR",
                    "smoker":true,
                    
                }
                ]
            }
            oModel.setData(data)
            sap.ui.getCore().setModel(oModel)
        },
        myCode: function () {

            var oInput = sap.ui.getCore().byId("idInp");
            if (!oInp.getValue()) {
                alert("please enter a value")
                return;
            }
            else {
                var sVal = oInp.getValue();
                alert(sVal);
                oInp.setValue("Hey it was fun")
            }
        },

        onClickButton: function (oEvent) {

            var onInp = this.oView.byId("idInputOne");
            var sValue = onInp.getValue();
            alert(sValue)
        },

        onPrint: function (oEvent) {
            var idEmpid = this.oView.byId("idEmpid");
            var idEmpName = this.oView.byId("idEmpName");
            var idSal = this.oView.byId("idSal");
            var idCurr = this.oView.byId("idCurr");
            var idSmoker = this.oView.byId("idSmoker")

            alert(
                idEmpid.getValue(),
                idEmpName.getValue(),
                idSal.getValue(),
                idCurr.getValue(),
                idSmoker.getSelected()
            );
        }

    });


});