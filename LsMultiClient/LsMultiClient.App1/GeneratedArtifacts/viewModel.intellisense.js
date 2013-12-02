/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.App1ItemAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App1ItemAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.App1ItemAddEdit,
            data: lightSwitchApplication.App1ItemAddEdit,
            value: lightSwitchApplication.App1ItemAddEdit
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.App1ItemAddEdit,
            data: lightSwitchApplication.App1ItemAddEdit,
            value: lightSwitchApplication.App1Item
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.App1ItemAddEdit,
            data: lightSwitchApplication.App1Item,
            value: lightSwitchApplication.App1Item
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.App1ItemAddEdit,
            data: lightSwitchApplication.App1Item,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.App1ItemAddEdit,
            data: lightSwitchApplication.App1Item,
            value: lightSwitchApplication.App1Item
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App1ItemAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.App1ItemAddEdit, {
        /// <field>
        /// Called when a new App1ItemAddEdit screen is created.
        /// <br/>created(msls.application.App1ItemAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.App1ItemAddEdit],
        /// <field>
        /// Called before changes on an active App1ItemAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.App1ItemAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.App1ItemAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.App1ItemAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.App1ItemAddEdit().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.App1ItemAddEdit().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.App1ItemAddEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.App1ItemAddEdit().findContentItem("right"); }]
    });

    lightSwitchApplication.App1ItemsBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App1ItemsBrowse
        },
        App1ItemList: {
            _$class: msls.ContentItem,
            _$name: "App1ItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.App1ItemsBrowse,
            data: lightSwitchApplication.App1ItemsBrowse,
            value: lightSwitchApplication.App1ItemsBrowse
        },
        App1Item: {
            _$class: msls.ContentItem,
            _$name: "App1Item",
            _$parentName: "App1ItemList",
            screen: lightSwitchApplication.App1ItemsBrowse,
            data: lightSwitchApplication.App1ItemsBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.App1ItemsBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.App1Item
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "App1Item",
            screen: lightSwitchApplication.App1ItemsBrowse,
            data: lightSwitchApplication.App1Item,
            value: lightSwitchApplication.App1Item
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.App1ItemsBrowse,
            data: lightSwitchApplication.App1Item,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App1ItemsBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.App1ItemsBrowse, {
        /// <field>
        /// Called when a new App1ItemsBrowse screen is created.
        /// <br/>created(msls.application.App1ItemsBrowse screen)
        /// </field>
        created: [lightSwitchApplication.App1ItemsBrowse],
        /// <field>
        /// Called before changes on an active App1ItemsBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.App1ItemsBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.App1ItemsBrowse],
        /// <field>
        /// Called after the App1ItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        App1ItemList_postRender: [$element, function () { return new lightSwitchApplication.App1ItemsBrowse().findContentItem("App1ItemList"); }],
        /// <field>
        /// Called after the App1Item content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        App1Item_postRender: [$element, function () { return new lightSwitchApplication.App1ItemsBrowse().findContentItem("App1Item"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.App1ItemsBrowse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.App1ItemsBrowse().findContentItem("Name"); }]
    });

}(msls.application));