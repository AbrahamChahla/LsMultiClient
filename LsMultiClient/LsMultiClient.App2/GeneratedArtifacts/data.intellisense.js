/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.App1Item, {
        /// <field>
        /// Called when a new app1Item is created.
        /// <br/>created(msls.application.App1Item entity)
        /// </field>
        created: [lightSwitchApplication.App1Item]
    });

    msls._addEntryPoints(lightSwitchApplication.App2Item, {
        /// <field>
        /// Called when a new app2Item is created.
        /// <br/>created(msls.application.App2Item entity)
        /// </field>
        created: [lightSwitchApplication.App2Item]
    });

}(msls.application));
