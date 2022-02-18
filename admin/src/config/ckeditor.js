module.exports = {
  ////// CONFIGURATION TEMPLATE: uncomment desired lines to override default config.
  ////// While all lines are commented, config will not change anything.
  toolbar: {
    // items: [
    //     "heading",
    //     "|",
    //     "fontFamily",
    //     "fontSize",
    //     "fontColor",
    //     "highLight",
    //     "|",
    //     "bold",
    //     "italic",
    //     "underline",
    //     "strikethrough",
    //     "subscript",
    //     "superscript",
    //     "removeFormat",
    //     "code",
    //     "link",
    //     "bulletedList",
    //     "numberedList",
    //     "todoList",
    //     "insertImage",
    //     "strapiMediaLib",
    //     "|",
    //     "alignment",
    //     "indent",
    //     "outdent",
    //     "|",
    //     "specialCharacters",
    //     "blockQuote",
    //     "insertTable",
    //     "mediaEmbed",
    //     "htmlEmbed",
    //     "codeBlock",
    //     "horizontalLine",
    //     "|",
    //     "fullScreen",
    //     "undo",
    //     "redo",
    // ],
    // shouldNotGroupWhenFull: true
  },
  image: {
    // styles: [
    //     "alignLeft",
    //     "alignCenter",
    //     "alignRight",
    // ],
    // resizeOptions: [
    //     {
    //         name: "resizeImage:original",
    //         value: null,
    //         icon: "original"
    //     },
    //     {
    //         name: "resizeImage:50",
    //         value: "50",
    //         icon: "medium"
    //     },
    //     {
    //         name: "resizeImage:75",
    //         value: "75",
    //         icon: "large"
    //     }
    // ],
    // toolbar: [
    //     "imageStyle:alignLeft",
    //     "imageStyle:alignCenter",
    //     "imageStyle:alignRight",
    //     "|",
    //     "imageTextAlternative",
    //     "|",
    //     "resizeImage:50",
    //     "resizeImage:75",
    //     "resizeImage:original",
    //     "|",
    //     "linkImage",
    // ]
  },
  table: {
    // contentToolbar: [
    //     "tableColumn",
    //     "tableRow",
    //     "mergeTableCells",
    //     "tableProperties",
    //     "tableCellProperties",
    // ]
  },
  fontColor: {
    colors: [
       { color: "#73bd14", label: "Green" },
       { color: "#000000", label: "Black" },
       { color: "#3b2f2f", label: "Gray" },
       { color: "#cc0000", label: "Red" },
       { color: "#b50404", label: "Red - Level 0" },
       { color: "#ffa000", label: "Orange - Level 1" },
       { color: "#1d8ab5", label: "Blue - Level 2" },
       { color: "#1e8a21", label: "Green - Level 3" },
    ],
  },
  heading: {
    options: [
         { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
         { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
         { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
         { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
         { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" },
         { model: "heading5", view: "h5", title: "Heading 5", class: "ck-heading_heading5" },
         { model: "heading6", view: "h6", title: "Heading 6", class: "ck-heading_heading6" },
    ]
  },
  highLight: {
    // options: [
    //   {
    //     model: "yellowMarker",
    //     class: "marker-yellow",
    //     title: "Yellow marker",
    //     color: "var(--ck-highlight-marker-yellow)",
    //     type: "marker",
    //   },
    //   {
    //     model: "greenMarker",
    //     class: "marker-green",
    //     title: "Green marker",
    //     color: "var(--ck-highlight-marker-green)",
    //     type: "marker",
    //   },
    //   {
    //     model: "pinkMarker",
    //     class: "marker-pink",
    //     title: "Pink marker",
    //     color: "var(--ck-highlight-marker-pink)",
    //     type: "marker",
    //   },
    //   {
    //     model: "blueMarker",
    //     class: "marker-blue",
    //     title: "Blue marker",
    //     color: "var(--ck-highlight-marker-blue)",
    //     type: "marker",
    //   },
    //   {
    //     model: "redPen",
    //     class: "pen-red",
    //     title: "Red pen",
    //     color: "var(--ck-highlight-pen-red)",
    //     type: "pen",
    //   },
    //   {
    //     model: "greenPen",
    //     class: "pen-green",
    //     title: "Green pen",
    //     color: "var(--ck-highlight-pen-green)",
    //     type: "pen",
    //   },
    // ],
  },
  htmlEmbed: {
    // showPreviews: true,
  },
  fontFamily: {
    // options: [
    //   "default",
    //   "Arial, Helvetica, sans-serif",
    //   "Courier New, Courier, monospace",
    //   "Georgia, serif",
    //   "Lucida Sans Unicode, Lucida Grande, sans-serif",
    //   "Tahoma, Geneva, sans-serif",
    //   "Times New Roman, Times, serif",
    //   "Trebuchet MS, Helvetica, sans-serif",
    //   "Verdana, Geneva, sans-serif",
    //   "JetBrains Mono, monospace",
    //   "Lato, Inter, sans-serif",
    // ],
  },
  link: {
    // defaultProtocol: "http://",
    // decorators: [
    //   {
    //     mode: "manual",
    //     label: "Open in a new tab",
    //     defaultValue: true,
    //     attributes: {
    //       target: "_blank",
    //       rel: "noopener noreferrer",
    //     },
    //   },
    //   {
    //     mode: "manual",
    //     label: "Downloadable",
    //     attributes: {
    //       download: "download",
    //     },
    //   },
    // ],
  },
};
