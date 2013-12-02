<h2>LightSwitch 2013 - Multi-HTMLClient Project!</h2>

In this post we will show you how to create a LightSwitch 2013 project that contains multiple HTMLClients.  It’s a pretty exciting development, as we can now create apps for specific areas, Admin vs. Worker, and all share the same data source within a single solution.

A side benefit is app payload.  We can break up large enterprise grade apps into multiple clients thus keeping the individual downloads to a reasonable size.

So… here we go!

<ol>
<li>Open Visual Studio 2013
<li>Create a new LightSwitch Desktop Project
<li>Name:  LsMultiClient
<li>Solution name: LsMultiClient
<li>Create two test tables
	App1Item
	App2Item
<li>Set Forms Authentication
<li>Grant debug to SecurityAdministration
<li>Right click on the main LsMultiClient project
<li>Add a new Client, HTMLClient
<li>Name: App2
<li>Add screens to browse App2Items with add/edit 
<li>Open the default.htm file
<li>In the document.ready section, update the msls._run() to show the screen you'd like to have as the start screen for this app, msls._run("App2ItemsBrowse")
<li>Save all
<li>Right click on the LsMultiClient.App2 project
<li>Select Remove
<li>Right click again on the main LsMultiClient project
<li>Add a new Client, HTMLClient
<li>Name: App1
<li>Add screens to browse App1Items with add/edit
<li>Open the default.htm file
<li>In the document.ready section, update the msls._run() to show the screen you'd like to have as the start screen for this app, msls._run("App1ItemsBrowse")
<li>Save all
<li>Right click on the main LsMultiClient solution this time.
<li>Select Add, existing project
<li>Navigate to the LsMultiClient folder, find the LsMultiClient.App2 folder and select the project
<li>Save all
<li>Close your solution
<li>In a Windows explorer, navigate to your LsMultiClient solution folder.
<li>Locate and edit the LsMultiProject.lsxproj in a text editor
<li>Towards the bottom of the file, locate the  section.
<li>Copy the LsMultiClient.App1 section
<li>Paste it under the LsMultiClient.App1 section
<li>Change the 
ProjectReference Include="LsMultiClient.App1\LsMultiClient.App1.jsproj" to
ProjectReference Include="LsMultiClient.App2\LsMultiClient.App2.jsproj"
<li>Replace the text in the  tag to be LsMultiClient.App2
<li>Get the Project GUID from LsMultiProject.sln for your LsMultiClient.App2 project.
<li>Back in the LsMultiClient.lsxproj fileUnder the new copied section for LsMultiClient.App2.jsproj
<li>Replace the GUID in the  tag with the App2 GUID from your LsMultiClient.sln file
<li>Save your files
<li>Back to Visual Studio 2013
<li>Open your LsMultiClient solution
<li>Select Build, Clean solution
<li>Select Build
<li>Run your app
<li>http://localhost:{port}/App1
<li>http://localhost:{port}/App2
<li>http://localhost:{port}/DesktopClient
</ol>

Notes
<ul>
<li>Create your HTMLClients starting with your last one
<li>You can remove the DesktopClient once you are sure you are done adding HTMLClients
<li>Keep screen names globally unique
<li>Make sure you set your startup project
</ul>

You can download an example project from our <a href="https://github.com/dwm9100b/LsMultiClient">github</a>.

We will be posting an LsCoreProject with multiple HTMLClients soon.
