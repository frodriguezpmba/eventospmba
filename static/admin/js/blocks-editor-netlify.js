// Crear WIDGET personalizado para insertar mejor?
// https://www.netlifycms.org/docs/custom-widgets/#registerwidget



// Creado el componente shortcode para Insertar la estructura de Tabs-PMBA
// https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent
CMS.registerEditorComponent({
    id: "tabs-pmba",
    label: "Insertar Tabs del Torneo",
    fields: [
      {
        name: 'tabTotal',
        label: 'Numero de Tabs',
        widget: 'number',
        //widget: 'hidden',
        hint: 'Número máximo de tabs (3 por defecto)',
        value_type: 'int',
        min: 3,
        max: 3,
        default: 3
      },
      {
        name: 'tabName',
        label: 'Nombre del Tab',
        widget: "select", 
        options: ["Informacion", "Premios", "Multimedia"]
      },
      { // TODO: Hacer que tanto el 'tabName' como el 'contenidoTab' sean shortcode independientes para poder insertar esta funcionalidad.
        // Es decir, que sea un shortcode tabName
        name: 'contenidoTab',
        label: 'Contenido Tab',
        widget: 'markdown'
      },
    ],
    fromBlock: function(match) {
      return {
        tabtotal: match[1],
        tabname: match[2],
        contenidotab: match[3]
      };
    },
    toBlock: function(data) {
      return `
      <tabs tabTotal="${data.tabtotal}">
        <tab tabName="${data.tabname}">
          ${data.contenidotab}
        </tab>
      </tabs>
      `;
    },
    toPreview: function(data) {
      return `
      <tabs tabTotal="${data.tabtotal}">
        <tab tabName="${data.tabname}">
          ${data.contenidotab}
        </tab>
      </tabs>
      `;
    }
});

// https://www.netlifycms.org/docs/beta-features/#registering-to-cms-events
CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    return entry.get('data').set('title', 'Torneo PadelMBA...');
  },
});