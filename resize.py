from PIL import Image
import os

root = "."  # current folder
max_width = 1600
quality = 75

for foldername, subfolders, filenames in os.walk(root):
    for filename in filenames:
        if filename.lower().endswith((".jpg", ".jpeg", ".png")):
            path = os.path.join(foldername, filename)
            try:
                img = Image.open(path)
                if img.width > max_width:
                    ratio = max_width / img.width
                    new_size = (max_width, int(img.height * ratio))
                    img = img.resize(new_size, Image.LANCZOS)
                img.save(path, quality=quality, optimize=True)
                print(f"Resized: {path}")
            except Exception as e:
                print(f"Skipped {path}: {e}")

print("Done!")