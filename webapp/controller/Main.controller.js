sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("mickey.controller.Main", {


        myCode:function(){

            var oInput = sap.ui.getCore().byId("idInp");
            if(!oInp.getValue()){
                alert("please enter a value")
                return;
            }
            else {
                var sVal = oInp.getValue();
                alert(sVal);
                oInp.setValue("Hey it was fun")
            }
        },

		onClickButton: function(oEvent) {
			var oView = this.getView();
            var onInp = oView.byId("idInputOne");
            var sValue = onInp.getValue();
            alert(sValue)
		},

	});


});