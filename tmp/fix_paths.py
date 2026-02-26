import re

filepath = r"c:\Users\WIN-11\.gemini\antigravity\brain\f8582625-7d15-4ea4-8bb2-9b701207a0ed\walkthrough.md"
with open(filepath, 'r') as f:
    content = f.read()

def replace_with_raw_windows(match):
    full_match = match.group(0) 
    path_part = full_match[0:-1].replace('](', '') # remove ]( and )
    filename = path_part.replace('\\', '/').split('/')[-1]
    
    # We must format it as an absolute path exactly matching the artifact directory
    proper_path = f"](c:\\Users\\WIN-11\\.gemini\\antigravity\\brain\\f8582625-7d15-4ea4-8bb2-9b701207a0ed\\{filename})"
    return proper_path

content = re.sub(r'\]\([^)]+\.png\)', replace_with_raw_windows, content)
content = re.sub(r'\]\([^)]+\.webp\)', replace_with_raw_windows, content)

with open(filepath, 'w') as f:
    f.write(content)

print("Fixed walkthrough paths to raw Windows absolute paths exactly matching artifact dir.")
