var onSelectedListItem,onSLIonIncotermsItem,onSLIonPamytermItem,onSLIonOrdReasonItem,onSLIonBilBlkItem,onSLIonDeliveryBlkItem,onSLIonDeliveryPlantItem,
onSLIonSalesOrgItem,onSLIonShipToPartyItem,onSLIonSoldToPartyItem,onSLIonGetRfrIPItem,onSLIonGetMaterialIPItem,onSLIonGetuomIPItem,	onSelectedListValue,
onSLIonIncotermsValue,onSLIonPamytermValue,onSLIonOrdReasonValue,onSLIonBilBlkValue,onSLIonDeliveryBlkValue,onSLIonDeliveryPlantValue,onSLIonSalesOrgValue,
onSLIonGetuomIPValue,onSLIonShipToPartyValue,onSLIonSoldToPartyValue,onSLIonGetRfrIPValue,onSLIonGetuomIPValue,	onSLIonGetPlantIPValue,onSLIonGetPlantIPItem,
PassValuetoMatTblDate,PassValuetoMatTblValue;
sap.ui.define(['sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessageToast',
		'sap/ui/model/Filter'
	],
	function(Controller, JSONModel, MessageToast, Filter) {
		"use strict";
		return Controller.extend("com.sap.so.controller.View2", {
			onInit: function() {
				//Model for Json Value Helper
				var oModel1 = new sap.ui.model.json.JSONModel("model/valueHelper.json");
				this.getView().setModel(oModel1);
			//	console.log(this.passValue);
			},
				onNavButtonPressed: function() {
				var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("View1");
			},
			//1
			onSoldToPartyIP: function(oEvent) {
				if (!this.onSoldToPartyPop) {
					this.onSoldToPartyPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onSoldToPartyFrag", this);
					this.getView().addDependent(this.onSoldToPartyPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onSoldToPartyPop.openBy(oButton);
				});
			},
			//2
			onShipToPartyIP: function(oEvent) {
				if (!this.onShipToPartyPop) {
					this.onShipToPartyPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onShipToPartyFrag", this);
					this.getView().addDependent(this.onShipToPartyPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onShipToPartyPop.openBy(oButton);
				});
			},
			//3
			onPurOrdDtIP: function(oEvent) {
				if (!this.onPurOrdDtPop) {
					this.onPurOrdDtPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onPurOrdDtFrag", this);
					this.getView().addDependent(this.onPurOrdDtPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onPurOrdDtPop.openBy(oButton);
				});
			},
			//4
			onDeliveryPlantIP: function(oEvent) {
				if (!this.onDeliveryPlantPop) {
					this.onDeliveryPlantPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onDeliveryPlantFrag", this);
					this.getView().addDependent(this.onDeliveryPlantPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onDeliveryPlantPop.openBy(oButton);
				});
			},
			//5
			onDeliveryBlkIP: function(oEvent) {
				if (!this.onDeliveryBlkPop) {
					this.onDeliveryBlkPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onDeliveryBlkFrag", this);
					this.getView().addDependent(this.onDeliveryBlkPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onDeliveryBlkPop.openBy(oButton);
				});
			},
			//6
			onBillBlkIP: function(oEvent) {
				if (!this.onBillBlkPop) {
					this.onBillBlkPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onBillBlkFrag", this);
					this.getView().addDependent(this.onBillBlkPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onBillBlkPop.openBy(oButton);
				});
			},
			//7
			onOrdReasonIP: function(oEvent) {
				if (!this.onOrdReasonPop) {
					this.onOrdReasonPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onOrdReasonFrag", this);
					this.getView().addDependent(this.onOrdReasonPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onOrdReasonPop.openBy(oButton);
				});
			},
			//8
			onPaytermIP: function(oEvent) {
				if (!this.onPaytermPop) {
					this.onPaytermPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onPaytermFrag", this);
					this.getView().addDependent(this.onPaytermPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onPaytermPop.openBy(oButton);
				});
			},
			//9
			onIncotermsIP: function(oEvent) {
				if (!this.onIncotermsPop) {
					this.onIncotermsPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onIncotermsFrag", this);
					this.getView().addDependent(this.onIncotermsPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onIncotermsPop.openBy(oButton);
				});
			},
			//10
			onSalAreaIP: function(oEvent) {
				if (!this.onSalAreaPop) {
					this.onSalAreaPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onSalAreaFrag", this);
					this.getView().addDependent(this.onSalAreaPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onSalAreaPop.openBy(oButton);
				});
			},
			//11
			onGetRfrIP: function(oEvent) {
				if (!this.onGetRfrPop) {
					this.onGetRfrPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onGetRfrFrag", this);
					this.getView().addDependent(this.onGetRfrPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onGetRfrPop.openBy(oButton);
				});

			},
			//12
			onGetMaterialIP: function(oEvent) {
				if (!this.onGetMaterialPop) {
					this.onGetMaterialPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onGetMaterialFrag", this);
					this.getView().addDependent(this.onGetMaterialPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onGetMaterialPop.openBy(oButton);
				});

			},
			//13
			onGetuomIP: function(oEvent) {
				if (!this.onGetuomPop) {
					this.onGetuomPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onGetuomFrag", this);
					this.getView().addDependent(this.onGetuomPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onGetuomPop.openBy(oButton);
				});

			},
			//14
			onGetPlantIP: function(oEvent) {
				if (!this.onGetPlantPop) {
					this.onGetPlantPop = sap.ui.xmlfragment("com.sap.so.view.Fragments.onGetPlantFrag", this);
					this.getView().addDependent(this.onGetPlantPop);
				}
				// delay because addDependent will do a async rerendering and the popover will immediately close without it
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this.onGetPlantPop.openBy(oButton);
				});

			},

			//1
			onSLIonSalAreaIP: function(oEvent1) {
				onSelectedListItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSelectedListValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("SalAreaIP").setValue(onSelectedListItem);
				this.onSalAreaPop.close();
			},
			//2
			onSLIonIncotermsIP: function(oEvent1) {
				onSLIonIncotermsItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonIncotermsValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("IncotermsIP").setValue(onSLIonIncotermsItem);
				this.onIncotermsPop.close();
			},
			//3
			onSLIonPaytermIP: function(oEvent1) {
				onSLIonPamytermItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonPamytermValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("PayTermIP").setValue(onSLIonPamytermItem);
				this.onPaytermPop.close();
			},
			//4
			onSLIonOrdReasonIP: function(oEvent1) {
				onSLIonOrdReasonItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonOrdReasonValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("OrdReasonIP").setValue(onSLIonOrdReasonItem);
				this.onOrdReasonPop.close();
			},
			//5
			onSLIonBilBlkIP: function(oEvent1) {
				onSLIonBilBlkItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonBilBlkValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("BillBlkIP").setValue(onSLIonBilBlkItem);
				this.onBillBlkPop.close();
			},
			//6
			onSLIonDeliveryBlkIP: function(oEvent1) {
				onSLIonDeliveryBlkItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonDeliveryBlkValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("DeliveryBlkIP").setValue(onSLIonDeliveryBlkItem);
				this.onDeliveryBlkPop.close();
			},
			//7
			onSLIonDeliveryPlantIP: function(oEvent1) {
				onSLIonDeliveryPlantItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonDeliveryPlantValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("DeliveryPlantIP").setValue(onSLIonDeliveryPlantItem);
				this.onDeliveryPlantPop.close();
			},
			//8
			onSLIonSalesOrgIP: function(oEvent1) {
				onSLIonSalesOrgItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonSalesOrgValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("SalesOrgIP").setValue(onSLIonSalesOrgItem);
			},
			//9
			onSLIonShipToPartyIP: function(oEvent1) {
				onSLIonShipToPartyItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonShipToPartyValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("ShipToPartyIP").setValue(onSLIonShipToPartyItem);
				this.onShipToPartyPop.close();
			},
			//10
			onSLIonSoldToPartyIP: function(oEvent1) {
				onSLIonSoldToPartyItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonSoldToPartyValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("SoldToPartyIP").setValue(onSLIonSoldToPartyItem);
				this.onSoldToPartyPop.close();

			},
			//11
			onSLIonGetRfrIPItem: function(oEvent1) {
				onSLIonGetRfrIPItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonGetRfrIPValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("RfrtableReasons").setValue(onSLIonGetRfrIPItem);
				this.onGetRfrPop.close();

			},
			//12
			onSLIonGetMaterialIP: function(oEvent1) {
				
				var InitialItemValue = "10";
				this.getView().byId("Mattableitem").setValue(InitialItemValue);
				
				//Set Value to material in material value 
				onSLIonGetMaterialIPItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("MattableMaterial").setValue(onSLIonGetMaterialIPItem);
				
				//Pass Requested Delivery date to Material table
				PassValuetoMatTblDate = this.getView().byId("ReqDeliveryDtIP").getValue();
				this.getView().byId("MattableReqDD").setValue(PassValuetoMatTblDate);
				
				//Set Value in Plant field of Material table	
				var PassValuetoMatTblPlant = this.getView().byId("DeliveryPlantIP").getValue();
				this.getView().byId("MattablePlant").setValue(PassValuetoMatTblPlant);
				
				//Set Description in Description field of Material table	
				var PassValuetoMatTblDesc = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				this.getView().byId("MattableDesc").setValue(PassValuetoMatTblDesc);
				
				//Set Value in Material Variable field of Material table	
				PassValuetoMatTblValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.onGetMaterialPop.close();
				
				//Set Value in Material field of Reason for rejection table	
				var passValuetoRfrMaterial = this.getView().byId("MattableMaterial").getValue();
				this.getView().byId("RfrtableMaterial").setValue(passValuetoRfrMaterial);
				
				//Set Value in Item field of Reason for rejection table
				var passValuetoRfrItem = this.getView().byId("Mattableitem").getValue();
				this.getView().byId("RfrtableItem").setValue(passValuetoRfrItem);
			},
			//13
			onSLIonGetuomIP: function(oEvent1) {
				onSLIonGetuomIPItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonGetuomIPValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("MattableUom").setValue(onSLIonGetuomIPItem);
				this.onGetuomPop.close();

			},
			//14
			onSLIonGetPlantIP: function(oEvent1) {
				onSLIonGetPlantIPItem = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Description;
				onSLIonGetPlantIPValue = oEvent1.getSource().getSelectedItem().getBindingContext().getObject().Value;
				this.getView().byId("MattablePlant").setValue(onSLIonGetPlantIPItem);
				this.onGetPlantPop.close();

			},
			
			
			
			onAdd: function(oEvent1) {
				//	var PurOrdNoIP = this.getView().byId("PurOrdNoIP").getValue();
				//var a = this.getView().byId("SoldToPartyIP").getValue();
				//	var av = this.getValue();
				//	this.a = this.getView().byId("ReqDeliveryDtIP").getValue();
				//	this.getView().byId("MattableReqDD").setValue(a);
				//MessageToast.show(PurOrdNoIP);
				//	alert(a);
				
				
			 var oTable = sap.ui.getCore().byId("__table0");
			 oTable.addRow();
			},

			onPlaceOrder: function() {
			//get plain text values Values to pass to gate way
			
				//var PurOrdNoIP = this.getView().byId("PurOrdNoIP").getValue();
				var CustMaterial = this.getView().byId("CustMaterial").getValue();
				var PortoFShipmnt = this.getView().byId("PortoFShipmntIP").getValue();
				var PortoFDesti = this.getView().byId("PortoFDestiIP").getValue();
				var WtTerms = this.getView().byId("WtTermsIP").getValue();
				var OrderBasis = this.getView().byId("OrderBasisIP").getValue();
				var NoofPacking = this.getView().byId("NoofPackingIP").getValue();
				var PackingUOM = this.getView().byId("PackingUOMIP").getValue();
				var PerPack = this.getView().byId("PerPackIP").getValue();
				var PackingType = this.getView().byId("PackingTypeIP").getValue();
				var MattableQty = this.getView().byId("MattableQty").getValue();
				var PricingDtIP = this.getView().byId("PricingDtIP").getValue();
				var oEntry = {};
				//Parameters sent to gateWay
				//oEntry.Salesdocument     
     oEntry.DocTyp = "TA";//HC   
     oEntry.SalesOrg= "1000" ;   
     oEntry.DistrChan=  "10" ;  
     oEntry.Division=     "10";
     oEntry.ReqDateH=PassValuetoMatTblDate;   
     oEntry.Incoterms1=onSLIonIncotermsValue;
     oEntry.Incoterms2=onSLIonIncotermsValue;
     oEntry.DlvBlock=onSLIonDeliveryBlkValue;
     oEntry.BillBlock=onSLIonBilBlkValue;
     oEntry.PriceDate=PricingDtIP;    //passvalue 
     oEntry.OrdReason=onSLIonOrdReasonValue;
     oEntry.Pmnttrms=onSLIonPamytermValue;
     oEntry.Material=PassValuetoMatTblValue;     
     oEntry.Plant=onSLIonDeliveryPlantValue;
     oEntry.TargetQty=MattableQty;
     oEntry.TargetQu=onSLIonGetuomIPValue;
     oEntry.ReasonRej=onSLIonGetRfrIPValue;
     oEntry.CustMat22=CustMaterial;
     oEntry.PartnRole="AG";//HC
     oEntry.PartnNumb=onSLIonSoldToPartyValue;
     oEntry.PortShip=PortoFShipmnt;
     oEntry.PortDest=PortoFDesti;
     oEntry.WtTerms=WtTerms;
     oEntry.OrderBasis=OrderBasis;
     oEntry.NoPacks=NoofPacking;
     oEntry.PackUom=PackingUOM;
     oEntry.QtyPack=PerPack;
     oEntry.PackType=PackingType;
				
				
				
				
				
				

				var sServiceUrl = "/sap/opu/odata/sap/ZPOC_SO_SRV";
				var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, false);
				sap.ui.getCore().setModel(oModel);
				oModel.setHeaders({
					"X-Requested-With": "XMLHttpRequest",
					"content-type": "application/atom+xml; charset=utf-8",

					"DataServiceVersion": "2.0",
					"Accept": "application/atom+xml,application/atomsvc+xml,application/xml",
					"X-CSRF-Token": "Fetch"
				});
				oModel.create("/SalesOrderDataSet", oEntry, null, function(response) {
						MessageToast.show("Sales Order Created Successfully");
					},
					function(oError) {
						MessageToast.show("Sales Order Creating failed");
					}
				);

				console.log(oEntry);
			}

		});
	});