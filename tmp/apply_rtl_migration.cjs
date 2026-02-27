const fs = require('fs');
const path = require('path');

// Safe regex patterns that match physical classes but explicitly ignore centering math (-1/2) and explicitly logical classes that already exist.
const replacements = [
    // Margins
    { regex: /([^a-zA-Z0-9_-])ml-(?!1\/2\b)(0|px|[0-9.]+|\[.*?\])/g, replace: '$1ms-$2' },
    { regex: /([^a-zA-Z0-9_-])mr-(?!1\/2\b)(0|px|[0-9.]+|\[.*?\])/g, replace: '$1me-$2' },

    // Paddings
    { regex: /([^a-zA-Z0-9_-])pl-(?!1\/2\b)(0|px|[0-9.]+|\[.*?\])/g, replace: '$1ps-$2' },
    { regex: /([^a-zA-Z0-9_-])pr-(?!1\/2\b)(0|px|[0-9.]+|\[.*?\])/g, replace: '$1pe-$2' },

    // Text Alignment
    { regex: /text-left\b/g, replace: 'text-start' },
    { regex: /text-right\b/g, replace: 'text-end' },

    // Absolute Positioning (ignore left-1/2 and right-1/2 centering tricks)
    { regex: /([^a-zA-Z0-9_-])left-(?!1\/2\b)(0|px|full|[0-9.]+|\[.*?\])/g, replace: '$1start-$2' },
    { regex: /([^a-zA-Z0-9_-])right-(?!1\/2\b)(0|px|full|[0-9.]+|\[.*?\])/g, replace: '$1end-$2' },

    // Borders
    { regex: /border-l(-[0-9\[a-zA-Z]+)?\b/g, replace: 'border-s$1' },
    { regex: /border-r(-[0-9\[a-zA-Z]+)?\b/g, replace: 'border-e$1' },

    // Rounded Corners (Left / Right to Start / End)
    { regex: /rounded-l(-[a-z]+)?\b/g, replace: 'rounded-s$1' },
    { regex: /rounded-r(-[a-z]+)?\b/g, replace: 'rounded-e$1' },
];

let filesModified = 0;
let totalReplacements = 0;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    replacements.forEach(rule => {
        content = content.replace(rule.regex, (match, p1, p2) => {
            // If the regex has capture groups, reconstruct. Else just replace the full match.
            if (p1 !== undefined && p2 !== undefined) {
                return rule.replace.replace('$1', p1).replace('$2', p2);
            }
            if (p1 !== undefined && p2 === undefined) {
                return rule.replace.replace('$1', p1);
            }
            return rule.replace;
        });
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        filesModified++;
        console.log(`Updated: ${filePath}`);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist') walk(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx')) {
            processFile(filePath);
        }
    }
}

walk(path.join(__dirname, '../src'));
console.log(`\nMigration Complete: Modified ${filesModified} files.`);
