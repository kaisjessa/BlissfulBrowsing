// https://stackoverflow.com/questions/18784920/how-to-add-dom-element-script-to-head-section
load_script = function(src) {
    // Initialize scripts queue
    if( load_script.scripts === undefined ) {
        load_script.scripts = [];
        load_script.index = -1;
        load_script.loading = false;
        load_script.next = function() {
            if( load_script.loading ) return;

            // Load the next queue item
            load_script.loading = true;
            var item = load_script.scripts[++load_script.index];
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = item.src;
            // When complete, start next item in queue and resolve this item's promise
            script.onload = () => {
                load_script.loading = false;
                if( load_script.index < load_script.scripts.length - 1 ) load_script.next();
                item.resolve();
            };
            head.appendChild(script);
        };
    };

    // Adding a script to the queue
    if( src ) {
        // Check if already added
        for(var i=0; i < load_script.scripts.length; i++) {
            if( load_script.scripts[i].src == src ) return load_script.scripts[i].promise;
        }
        // Add to the queue
        var item = { src: src };
        item.promise = new Promise(resolve => {item.resolve = resolve;});
        load_script.scripts.push(item);
        load_script.next();
    }

    // Return the promise of the last queue item
    return load_script.scripts[ load_script.scripts.length - 1 ].promise;
};


["https://cdn.jsdelivr.net/npm/@tensorflow/tfjs",
 "https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity",
 "model.js",
].forEach(load_script);

