import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Match ![Alt](file:///C:/Users/...) and replace with ![Alt](/C:/Users/...)
    content = re.sub(r'\]\(file:///[cC]:/Users/', r'](/C:/Users/', content)
    
    # Also fix any remaining file:///c:/
    content = re.sub(r'\]\(file:///c:/Users/', r'](/c:/Users/', content, flags=re.IGNORECASE)

    # Clean up any other variations like ](C:/Users/
    content = re.sub(r'\]\([cC]:/Users/', r'](/C:/Users/', content)

    with open(filepath, 'w') as f:
        f.write(content)

fix_file(r"c:\Users\WIN-11\.gemini\antigravity\brain\f8582625-7d15-4ea4-8bb2-9b701207a0ed\walkthrough.md")
