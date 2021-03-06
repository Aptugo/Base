
const newPage = {
    name: 'Untitled',
    type: 'page',
    children: [
        {
            "name": "Before Page Render",
            "type": "element",
            "value": "bpr",
            "prevent_delete": true,
            "cascades": false,
            "children": []
        }, {
            "name": "Page Header",
            "type": "element",
            "value": "ph",
            "prevent_delete": true,
            "children": [],
            "cascades": false
        }, {
            "name": "Body",
            "type": "element",
            "value": "b",
            "prevent_delete": true,
            "cascades": false,
            "children": []
        }, {
            "name": "Page Footer",
            "type": "element",
            "value": "pf",
            "prevent_delete": true,
            "cascades": false,
            "children": []
        }, {
            "name": "After Page Render",
            "type": "element",
            "value": "apr",
            "prevent_delete": true,
            "cascades": false,
            "children": []
        }
    ]
}
            
Application.pages.push(newPage)
return Application