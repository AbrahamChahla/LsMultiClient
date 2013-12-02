/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function App2ItemAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the App2ItemAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="App2Item" type="msls.application.App2Item">
        /// Gets or sets the app2Item for this screen.
        /// </field>
        /// <field name="details" type="msls.application.App2ItemAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "App2ItemAddEdit", parameters);
    }

    function App2ItemsBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the App2ItemsBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="App2Items" type="msls.VisualCollection" elementType="msls.application.App2Item">
        /// Gets the app2Items for this screen.
        /// </field>
        /// <field name="details" type="msls.application.App2ItemsBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "App2ItemsBrowse", parameters);
    }

    msls._addToNamespace("msls.application", {

        App2ItemAddEdit: $defineScreen(App2ItemAddEdit, [
            { name: "App2Item", kind: "local", type: lightSwitchApplication.App2Item }
        ], [
        ]),

        App2ItemsBrowse: $defineScreen(App2ItemsBrowse, [
            {
                name: "App2Items", kind: "collection", elementType: lightSwitchApplication.App2Item,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.App2Items;
                }
            }
        ], [
        ]),

        showApp2ItemAddEdit: $defineShowScreen(function showApp2ItemAddEdit(App2Item, options) {
            /// <summary>
            /// Asynchronously navigates forward to the App2ItemAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("App2ItemAddEdit", parameters, options);
        }),

        showApp2ItemsBrowse: $defineShowScreen(function showApp2ItemsBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the App2ItemsBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("App2ItemsBrowse", parameters, options);
        })

    });

}(msls.application));
