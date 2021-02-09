const { models } = require('../sequelize');
const { getIdParam } = require('../helpers');

module.exports = (app) => {
  // const {{ table.name | friendly | lower }} = require('../controllers/{{ table.name | friendly | lower }}.controller.js')
  {% if table.extraModules %}{{ table.extraModules }}{% endif %}

  {% for route in table.definedRoutes %}
    {% if route.route_active %}
      // {{ route.route_name }}
      app.{{ route.route_method }}('{{ route.route_path }}', async (req, res) => {
        {% if route.route_template != 'source' %}
          {% include includeTemplate('Aptugo Routes' ~ route.route_template ~ '.tpl') %}
        {% else %}
          {{ route.route_code | raw }}
        {% endif %}
      })

    {% endif %}
  {% endfor %}
  {% if table.extraRoutes %}{{ table.extraRoutes }}{% endif %}
}
