var onSLIonSalesOrgValue,
	onSLIonDivValue,
	onDistChannelValue,
	onSLIonOpenOrderTypeValue;

sap.ui.define(['sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessageToast',
		'sap/ui/model/Filter'
	],
	function(Controller, JSONModel, MessageToast, Filter) {
		"use strict";
		return Controller.extend("com.sap.so.controller.View1", {
			/**
			 *@memberOf com.sap.so.controller.View1
			 */
			onInit: function() {

				var oModel1 = new sap.ui.model.json.JSONModel("model/valueHelper.json");
				this.getView().setModel(oModel1);
				// var oModel = new sap.ui.model.odata.ODataModel("proxy/http/saptest.argas.local:8000/sap/opu/odata/sap/ZPOC_SO_SRV/");
				this.ModelPassValue = new sap.ui.model.json.JSONModel();
				// console.log(oModel);
			},
		
			onOpenOrderTypeIp: function(oEvent) {
				if (!this.onOpenOrderTypePop) {
					this.onOpenOrderTypePop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onOpenOrderTypeFrag", this);
					this.getView().addDependent(this.onOpenOrderTypePop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onOpenOrderTypePop.openBy(oButton);

				});
			},
			onSalesOrgIP: function(oEvent) {
				if (!this.onSalesOrgPop) {
					this.onSalesOrgPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onSalesOrgFrag", this);
					this.getView().addDependent(this.onSalesOrgPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onSalesOrgPop.openBy(oButton);
				});
			},
			onDistChannelIP: function(oEvent) {
				if (!this.onDistChannelPop) {
					this.onDistChannelPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onDistChannelFrag", this);
					this.getView().addDependent(this.onDistChannelPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onDistChannelPop.openBy(oButton);
				});
			},
			onDivIP: function(oEvent) {
				if (!this.onDivPop) {
					this.onDivPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onDivFrag", this);
					this.getView().addDependent(this.onDivPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onDivPop.openBy(oButton);
				});
			},
			onSLIonSalesOrgIP: function(oEvent) {
				// var onSelectedListItem = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Description;
				// this.getView().byId("SalesOrgIP").setValue(onSelectedListItem);
				// this.onSalesOrgPop.close();

				var onSLIonSalesOrgItem = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Description;
				this.getView().byId("SalesOrgIP").setValue(onSLIonSalesOrgItem);
				onSLIonSalesOrgValue = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("pass1").setValue(onSLIonSalesOrgValue);
		//	MessageToast.show(onSLIonSalesOrgValue);
				this.onSalesOrgPop.close();

			},
			onSLIonDivIP: function(oEvent) {
				var onSLIonDivItem = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonDivValue = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("DivIP").setValue(onSLIonDivItem);
				this.getView().byId("pass2").setValue(onSLIonDivValue);
				this.onDivPop.close();
			},
			onDistChannelIPD: function(oEvent) {
				var onDistChannelItem = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onDistChannelValue = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("DistChannelIP").setValue(onDistChannelItem);
				this.getView().byId("pass3").setValue(onDistChannelValue);
				this.onDistChannelPop.close();

			},
			onSLIonOpenOrderTypeIp: function(oEvent) {
				var onSLIonOpenOrderTypeItem = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonOpenOrderTypeValue = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("OrderTypeIp").setValue(onSLIonOpenOrderTypeItem);
				this.getView().byId("pass4").setValue(onSLIonOpenOrderTypeValue);
				//(onSLIonOpenOrderTypeValue);
				this.onOpenOrderTypePop.close();
			},
				onRightArrow: function() {
				var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("View2");
				
				// var ip1 = new sap.ui.commons.TextField
				var passValue = {};
				passValue.onSLIonSalesOrgValue = onSLIonSalesOrgValue ;
			//	MessageToast.show(passValue.onSLIonSalesOrgValue);
				passValue.onSLIonDivValue = onSLIonDivValue;
				passValue.onDistChannelValue = onDistChannelValue;
				passValue.onSLIonOpenOrderTypeValue = onSLIonOpenOrderTypeValue;
				this.ModelPassValue.setData(passValue);
				sap.ui.getCore().setModel(this.ModelPassValue);
			//	 console.log(passValue);

			}

		});

	});