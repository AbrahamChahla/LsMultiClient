/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function App1ItemAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the App1ItemAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="App1Item" type="msls.application.App1Item">
        /// Gets or sets the app1Item for this screen.
        /// </field>
        /// <field name="details" type="msls.application.App1ItemAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "App1ItemAddEdit", parameters);
    }

    function App1ItemsBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the App1ItemsBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="App1Items" type="msls.VisualCollection" elementType="msls.application.App1Item">
        /// Gets the app1Items for this screen.
        /// </field>
        /// <field name="details" type="msls.application.App1ItemsBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "App1ItemsBrowse", parameters);
    }

    msls._addToNamespace("msls.application", {

        App1ItemAddEdit: $defineScreen(App1ItemAddEdit, [
            { name: "App1Item", kind: "local", type: lightSwitchApplication.App1Item }
        ], [
        ]),

        App1ItemsBrowse: $defineScreen(App1ItemsBrowse, [
            {
                name: "App1Items", kind: "collection", elementType: lightSwitchApplication.App1Item,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.App1Items;
                }
            }
        ], [
        ]),

        showApp1ItemAddEdit: $defineShowScreen(function showApp1ItemAddEdit(App1Item, options) {
            /// <summary>
            /// Asynchronously navigates forward to the App1ItemAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("App1ItemAddEdit", parameters, options);
        }),

        showApp1ItemsBrowse: $defineShowScreen(function showApp1ItemsBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the App1ItemsBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("App1ItemsBrowse", parameters, options);
        })

    });

}(msls.application));
