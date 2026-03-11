from PIL import Image

def remove_bg(img_path, out_path, tolerance=15):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    
    data = img.getdata()
    
    # Analyze the background color from top-left pixel
    bg_color = data[0]
    
    new_data = []
    
    for item in data:
        # Check if the pixel is close to the background color
        if (abs(item[0] - bg_color[0]) < tolerance and
            abs(item[1] - bg_color[1]) < tolerance and
            abs(item[2] - bg_color[2]) < tolerance):
            # Soft transition for edge pixels (optional, keeping it simple for now -> fully transparent)
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(out_path, "PNG")

if __name__ == "__main__":
    remove_bg(
        "C:/Users/andre/Downloads/my projects/mumtaz/src/assets/mumtaz logo 2.png", 
        "C:/Users/andre/Downloads/my projects/mumtaz/src/assets/mumtaz_logo_white.png",
        tolerance=50
    )
