const fs = require('fs');
const path = require('path');

const dirClasses = [
    '\\bml-[a-z0-9\\.\\[\\]]+',
    '\\bmr-[a-z0-9\\.\\[\\]]+',
    '\\bpl-[a-z0-9\\.\\[\\]]+',
    '\\bpr-[a-z0-9\\.\\[\\]]+',
    '\\btext-left\\b',
    '\\btext-right\\b',
    '\\bleft-[a-z0-9\\.\\[\\]]+',
    '\\bright-[a-z0-9\\.\\[\\]]+',
    '\\bspace-x-[0-9\\.\\[\\]]+'
];
const regex = new RegExp('(' + dirClasses.join('|') + ')', 'g');

let count = 0;
let fileSet = new Set();
function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist') walk(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx')) {
            const content = fs.readFileSync(filePath, 'utf8');
            const matches = content.match(regex);
            if (matches) {
                count += matches.length;
                fileSet.add(filePath);
            }
        }
    }
}

walk(path.join(__dirname, '../src'));
console.log('Total files affected:', fileSet.size);
console.log('Total non-logical classes found:', count);
