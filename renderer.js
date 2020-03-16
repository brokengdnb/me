// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.




$(function() {
    window.onbeforeunload = function(){
        return 'Are you sure you want to leave?';
    };


    var externalPath = "";

    var holder = document.getElementById('editor');
    var textarea_editor = document.getElementById('textarea-editor');


    holder.ondragover = () => {
      return false;
    };

    holder.ondragleave = () => {
        return false;
    };

    holder.ondragend = () => {
        return false;
    };

    holder.ondrop = (e) => {
        e.preventDefault();

        for (let f of e.dataTransfer.files) {
            function readTextFile(file) {
                var rawFile = new XMLHttpRequest();
                rawFile.open("GET", file, false);
                rawFile.onreadystatechange = function () {
                    if(rawFile.readyState === 4) {
                        if(rawFile.status === 200 || rawFile.status == 0) {
                            var allText = rawFile.responseText;
                            //console.log(allText);
                            editor.insertValue(allText);
                            editor.focus();
                        }
                    }
                };
                rawFile.send(null);
            }
            externalPath = f.path;
            readTextFile(f.path);
        }
        return false;
    };


    $(document).keydown(function(e) {
        var key = undefined;
        var possible = [ e.key, e.keyIdentifier, e.keyCode, e.which ];

        while (key === undefined && possible.length > 0) {
            key = possible.pop();
        }

        if (key && (key == '115' || key == '83' ) && (e.ctrlKey || e.metaKey) && !(e.altKey)) {
            e.preventDefault();
            alert("Ctrl-s pressed");


            let content = "Some text to save into the file";

// You can obviously give a direct path without use the dialog (C:/Program Files/path/myfileexample.txt)
                window.openSaveWindow(content);

            return false;
        }
        return true;
    });

    var editor = editormd("editor", {
        width: "100vw",
        height: "100vw",
        // markdown: "xxxx",     // dynamic set Markdown text
        path : "./editor.md/lib/",  // Autoload modules mode, codemirror, marked... dependents libs path
        gotoLine: false,
        imageUpload: false,
        emoji:false,
        theme: "dark",
        previewTheme: "default",
        editorTheme: "lesser-dark",
        lang : {
            name : "en",
            description : "A minimal, simple, dark themed Markdown Editor bundled in cross-platform Electron App (OS X, Linux, Windows)",
            tocTitle    : "Table of Contents",
            toolbar : {
                undo             : "Undo(Ctrl+Z)",
                redo             : "Redo(Ctrl+Y)",
                bold             : "Bold",
                del              : "Strikethrough",
                italic           : "Italic",
                quote            : "Block quote",
                ucwords          : "Words first letter convert to uppercase",
                uppercase        : "Selection text convert to uppercase",
                lowercase        : "Selection text convert to lowercase",
                h1               : "Heading 1",
                h2               : "Heading 2",
                h3               : "Heading 3",
                h4               : "Heading 4",
                h5               : "Heading 5",
                h6               : "Heading 6",
                "list-ul"        : "Unordered list",
                "list-ol"        : "Ordered list",
                hr               : "Horizontal rule",
                link             : "Link",
                "reference-link" : "Reference link",
                image            : "Image",
                code             : "Code inline",
                "preformatted-text" : "Preformatted text / Code block (Tab indent)",
                "code-block"     : "Code block (Multi-languages)",
                table            : "Tables",
                datetime         : "Datetime",
                emoji            : "Emoji",
                "html-entities"  : "HTML Entities",
                pagebreak        : "Page break",
                watch            : "Unwatch",
                unwatch          : "Watch",
                preview          : "HTML Preview (Press Shift + ESC exit)",
                fullscreen       : "Fullscreen (Press ESC exit)",
                clear            : "Clear",
                search           : "Search",
                help             : "Help",
                info             : "About"
            },
            buttons : {
                enter  : "Enter",
                cancel : "Cancel",
                close  : "Close"
            },
            dialog : {
                link : {
                    title    : "Link",
                    url      : "Address",
                    urlTitle : "Title",
                    urlEmpty : "Error: Please fill in the link address."
                },
                referenceLink : {
                    title    : "Reference link",
                    name     : "Name",
                    url      : "Address",
                    urlId    : "ID",
                    urlTitle : "Title",
                    nameEmpty: "Error: Reference name can't be empty.",
                    idEmpty  : "Error: Please fill in reference link id.",
                    urlEmpty : "Error: Please fill in reference link url address."
                },
                image : {
                    title    : "Image",
                    url      : "Address",
                    link     : "Link",
                    alt      : "Title",
                    uploadButton     : "Upload",
                    imageURLEmpty    : "Error: picture url address can't be empty.",
                    uploadFileEmpty  : "Error: upload pictures cannot be empty!",
                    formatNotAllowed : "Error: only allows to upload pictures file, upload allowed image file format:"
                },
                preformattedText : {
                    title             : "Preformatted text / Codes",
                    emptyAlert        : "Error: Please fill in the Preformatted text or content of the codes."
                },
                codeBlock : {
                    title             : "Code block",
                    selectLabel       : "Languages: ",
                    selectDefaultText : "select a code language...",
                    otherLanguage     : "Other languages",
                    unselectedLanguageAlert : "Error: Please select the code language.",
                    codeEmptyAlert    : "Error: Please fill in the code content."
                },
                htmlEntities : {
                    title : "HTML Entities"
                },
                help : {
                    title : "Help"
                }
            }
        }
    });
});