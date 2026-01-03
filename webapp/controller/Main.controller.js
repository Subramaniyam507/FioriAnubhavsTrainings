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
        }
	});
});