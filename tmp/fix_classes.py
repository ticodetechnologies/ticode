import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    prefixes = ['finance', 'health', 'edu', 're', 'retail', 'sc', 'tr', 'mkt', 'ins', 'leg', 'fsh', 'spt']

    for prefix in prefixes:
        # replace the GSAP selector
        content = content.replace(f".from('.{prefix}-card',", f".from('.{prefix}-main',")
        
        # replace the main card's class
        content = content.replace(f'className="{prefix}-card absolute inset-4', f'className="{prefix}-main absolute inset-4')
        # Some are `absolute inset-4` with other things. Let's be safer.
        # Actually in all definitions I wrote: `className="<prefix>-card absolute inset-4` 
        # let's verify if there are spaces.
        content = content.replace(f'{prefix}-card absolute inset-4', f'{prefix}-main absolute inset-4')

    with open(filepath, 'w') as f:
        f.write(content)

fix_file(r"c:\Users\WIN-11\Downloads\ticode\src\components\industries\IndustryHeroVisual.tsx")
