sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("captempui.controller.View1", {
        onInit() {
            let oModel = this.getOwnerComponent().getModel();
            console.log(oModel);
            this.getView().bindElement({
                path: "/Books('123')", // Replace '123' with a valid key or use a dynamic binding
                parameters: {}
            });

        }
    });
});