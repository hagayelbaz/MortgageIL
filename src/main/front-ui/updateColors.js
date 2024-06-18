const fs = require('fs');
const postcss = require('postcss');//
const customProperties = require('postcss-custom-properties');

// Path to your files
const cssFilePath = './src/shared.css';
const jsFilePath = './src/vars.js';

fs.readFile(cssFilePath, (err, css) => {
    if (err) {
        console.error('Failed to read CSS file:', err);
        return;
    }

    // Process CSS to extract custom properties
    postcss([
        customProperties()
    ])
        .process(css, { from: cssFilePath })
        .then(result => {
            const root = result.root;
            let vars = {};

            // Assuming all variables are defined under :root
            root.walkRules(':root', rule => {
                rule.walkDecls(decl => {
                    const propName = decl.prop.replace('--', '');
                    vars[propName] = decl.value;
                });
            });

            // Generate JS content
            let jsContent = 'export class Vars {\n';
            Object.keys(vars).forEach(key => {
                jsContent += `    static ${key.toUpperCase().replace(/-/g, '_')} = "${vars[key]}";\n`;
            });
            jsContent += '}\n';

            // Write to vars.js
            fs.writeFile(jsFilePath, jsContent, err => {
                if (err) {
                    console.error('Failed to write to JS file:', err);
                    return;
                }
                console.log('Updated vars.js with CSS variables.');
            });
        });
});
