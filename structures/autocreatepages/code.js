const newPage = {
	"asociated_table": Parameters.unique_id,
	"name": `() => aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").name`,
	"type": "page",
	"children": [{
		"name": "Before Page Render",
		"type": "element",
		"value": "bpr",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"collapseStatus": "collapse"
	}, {
		"name": "Page Header",
		"type": "element",
		"value": "ph",
		"prevent_delete": true,
		"children": [],
		"cascades": false,
		"collapseStatus": "collapse"
	}, {
		"name": "Body",
		"type": "element",
		"value": "b",
		"prevent_delete": true,
		"cascades": false,
		"children": [{
	"name": "div",
	"prevent_delete": false,
	"cascades": false,
	"children": [{
		"name": "Table Area",
		"prevent_delete": false,
		"cascades": false,
		"children": [{
			"name": "Head",
			"prevent_delete": false,
			"cascades": false,
			"children": [{
				"name": "dialog",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "dialog",
				"collapseStatus": "expand",
				"values": {
					"addProcedure": "Internal",
						"title": `() => { return "Add " + aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").singleName }`,
						"introText": `() => { return "Enter " + aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").singleName + " data" }`,
						"color": "danger",
						"table": Parameters.unique_id,
						"button": "Add",
						"editButton": "Edit",
						"editTitle": `() => { return "Edit " + aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").singleName }`,
						"editIntroText": `() => { return "Update " + aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").singleName + " data" }`,
				}
			}, {
				"name": "typography",
				"prevent_delete": false,
				"cascades": false,
				"children": [{
					"name": "text",
					"prevent_delete": false,
					"cascades": false,
					"children": [],
					"type": "element",
					"value": "text",
					"collapseStatus": "expand",
					"values": {
						"Content": `() => { return aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").singleName + " list" }`,
					}
				}],
				"type": "element",
				"value": "typography",
				"collapseStatus": "expand",
				"values": {
					"tag": "h4"
				}
			}],
			"type": "element",
			"value": "div",
			"collapseStatus": "expand",
			"values": {
				"class": "classes.tableHeading"
			}
		}, {
			"name": "Body",
			"prevent_delete": false,
			"cascades": false,
			"children": [{
				"name": "table",
				"prevent_delete": false,
				"cascades": false,
				"children": [],
				"type": "element",
				"value": "table",
				"collapseStatus": "expand",
				"values": {
					"table": Parameters.unique_id,
					"addProcedure": "Internal",
					"title": "Table Title",
					"headerColor": "rose"
				}
			}],
			"type": "element",
			"value": "div",
			"collapseStatus": "expand"
		}],
		"type": "element",
		"value": "div",
		"collapseStatus": "collapse",
		"values": {
			"class": "classes.tableResponsive"
		}
	}],
	"type": "element",
	"value": "div",
	"collapseStatus": "expand",
	"values": {
		"class": "sidebarOpen ? classes.withSidebarOpen : classes.withSidebarClosed"
	}
}],
		"collapseStatus": "expand"
	}, {
		"name": "Page Footer",
		"type": "element",
		"value": "pf",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"collapseStatus": "expand"
	}, {
		"name": "After Page Render",
		"type": "element",
		"value": "apr",
		"prevent_delete": true,
		"cascades": false,
		"children": [],
		"collapseStatus": "collapse"
	}],
	"path": `() => '/' + aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").name`,
	"parent": Application.pages[0].unique_id,
	"collapseStatus": "collapse",
	"filename": `() => aptugo.store.getState().application.tables.find(table => table.unique_id === "${Parameters.unique_id}").name + '.tsx'`
}

Application.pages[0].children.push(newPage)
return Application