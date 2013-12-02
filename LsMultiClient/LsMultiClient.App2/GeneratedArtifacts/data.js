/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function App1Item(entitySet) {
        /// <summary>
        /// Represents the App1Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this app1Item.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this app1Item.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this app1Item.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this app1Item.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this app1Item.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this app1Item.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this app1Item.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this app1Item.
        /// </field>
        /// <field name="details" type="msls.application.App1Item.Details">
        /// Gets the details for this app1Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function App2Item(entitySet) {
        /// <summary>
        /// Represents the App2Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this app2Item.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this app2Item.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this app2Item.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this app2Item.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this app2Item.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this app2Item.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this app2Item.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this app2Item.
        /// </field>
        /// <field name="details" type="msls.application.App2Item.Details">
        /// Gets the details for this app2Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="App1Items" type="msls.EntitySet">
        /// Gets the App1Items entity set.
        /// </field>
        /// <field name="App2Items" type="msls.EntitySet">
        /// Gets the App2Items entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        App1Item: $defineEntity(App1Item, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        App2Item: $defineEntity(App2Item, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "App1Items", elementType: App1Item },
            { name: "App2Items", elementType: App2Item }
        ], [
            {
                name: "App1Items_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.App1Items },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/App1Items(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "App2Items_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.App2Items },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/App2Items(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
