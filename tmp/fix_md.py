import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Match ![Alt](path)
    # Replace anything inside the parens that looks like /c:/Users... or C:/Users... with file:///C:/Users...
    
    # We can match `](/c:/Users/` or `](C:/Users/` or `](file:///C:/Users/` and normalize to `file:///C:/Users/`
    content = re.sub(r'\]\(/c:/Users/', r'](file:///C:/Users/', content)
    content = re.sub(r'\]\(c:/Users/', r'](file:///C:/Users/', content, flags=re.IGNORECASE)
    # if it doesn't have file:///, let's add it. But the re.sub above replaces `](c:/Users/` with `](file:///c:/Users/`. Wait, if it already had `file:///C:/`, the second sub won't match.

    with open(filepath, 'w') as f:
        f.write(content)

fix_file(r"c:\Users\WIN-11\.gemini\antigravity\brain\f8582625-7d15-4ea4-8bb2-9b701207a0ed\walkthrough.md")
