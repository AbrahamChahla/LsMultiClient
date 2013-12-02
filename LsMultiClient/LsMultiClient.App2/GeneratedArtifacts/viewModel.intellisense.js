/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.App2ItemAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App2ItemAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.App2ItemAddEdit,
            data: lightSwitchApplication.App2ItemAddEdit,
            value: lightSwitchApplication.App2ItemAddEdit
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.App2ItemAddEdit,
            data: lightSwitchApplication.App2ItemAddEdit,
            value: lightSwitchApplication.App2Item
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.App2ItemAddEdit,
            data: lightSwitchApplication.App2Item,
            value: lightSwitchApplication.App2Item
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.App2ItemAddEdit,
            data: lightSwitchApplication.App2Item,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.App2ItemAddEdit,
            data: lightSwitchApplication.App2Item,
            value: lightSwitchApplication.App2Item
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App2ItemAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.App2ItemAddEdit, {
        /// <field>
        /// Called when a new App2ItemAddEdit screen is created.
        /// <br/>created(msls.application.App2ItemAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.App2ItemAddEdit],
        /// <field>
        /// Called before changes on an active App2ItemAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.App2ItemAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.App2ItemAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.App2ItemAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.App2ItemAddEdit().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.App2ItemAddEdit().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.App2ItemAddEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.App2ItemAddEdit().findContentItem("right"); }]
    });

    lightSwitchApplication.App2ItemsBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App2ItemsBrowse
        },
        App2ItemList: {
            _$class: msls.ContentItem,
            _$name: "App2ItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.App2ItemsBrowse,
            data: lightSwitchApplication.App2ItemsBrowse,
            value: lightSwitchApplication.App2ItemsBrowse
        },
        App2Item: {
            _$class: msls.ContentItem,
            _$name: "App2Item",
            _$parentName: "App2ItemList",
            screen: lightSwitchApplication.App2ItemsBrowse,
            data: lightSwitchApplication.App2ItemsBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.App2ItemsBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.App2Item
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "App2Item",
            screen: lightSwitchApplication.App2ItemsBrowse,
            data: lightSwitchApplication.App2Item,
            value: lightSwitchApplication.App2Item
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.App2ItemsBrowse,
            data: lightSwitchApplication.App2Item,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.App2ItemsBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.App2ItemsBrowse, {
        /// <field>
        /// Called when a new App2ItemsBrowse screen is created.
        /// <br/>created(msls.application.App2ItemsBrowse screen)
        /// </field>
        created: [lightSwitchApplication.App2ItemsBrowse],
        /// <field>
        /// Called before changes on an active App2ItemsBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.App2ItemsBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.App2ItemsBrowse],
        /// <field>
        /// Called after the App2ItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        App2ItemList_postRender: [$element, function () { return new lightSwitchApplication.App2ItemsBrowse().findContentItem("App2ItemList"); }],
        /// <field>
        /// Called after the App2Item content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        App2Item_postRender: [$element, function () { return new lightSwitchApplication.App2ItemsBrowse().findContentItem("App2Item"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.App2ItemsBrowse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.App2ItemsBrowse().findContentItem("Name"); }]
    });

}(msls.application));