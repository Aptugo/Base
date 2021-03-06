/*
path: button.tpl
type: file
unique_id: hdTHQyeA
icon: ico-button
options:
  - name: ButtonText
    display: Button Text
    type: text
    options: ''
    settings:
      default: Button
  - name: Action
    display: Action
    type: text
    options: ''
  - name: className
    display: ClassName
    type: text
    options: ''
  - name: Variant
    display: Variant
    type: dropdown
    options: text;contained;outlined
  - name: Color
    display: Color
    type: dropdown
    options: default;inherit;primary;secondary
    settings:
      default: primary
  - name: disabled
    display: Disabled
    type: checkbox
    options: ''
  - name: fullWidth
    display: Full Width
    type: checkbox
    options: ''
  - name: icon
    display: Icon
    type: dropdown
    options: >-
      None;Add;Home;Link;Send;AllInbox;Menu;DeleteOutline;Favorite;Clear;Google;Facebook;Twitter;Person;ThumbUp
sourceType: javascript
children: []
*/




{% if element.values.icon and element.values.icon != 'None' %}
{% set bpr %}
import {{ element.values.icon }}Icon from '@material-ui/icons/{{ element.values.icon }}'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% endif %}
{% set bpr %}
import Button from '@material-ui/core/Button'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Button 
  {% if element.values.Variant %}variant='{{ element.values.Variant }}'{% endif %}
  {% if element.values.Color %}color='{{ element.values.Color }}'{% endif %}
  {% if element.values.Action %}onClickCapture={ {{ element.values.Action }} }{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
  {% if element.values.fullWidth %}fullWidth{% endif %}
  {% if element.values.icon and element.values.icon != 'None' %}startIcon={<{{ element.values.icon }}Icon />}{% endif %}
>
  {{ element.values.ButtonText }}{{ content | raw }}
</Button>