from rembg import remove

input_path = "C:/Users/andre/Downloads/my projects/mumtaz/src/assets/01.png"
output_path = "C:/Users/andre/Downloads/my projects/mumtaz/src/assets/01_transparent.png"

try:
    with open(input_path, 'rb') as i:
        with open(output_path, 'wb') as o:
            input_data = i.read()
            # remove background
            output_data = remove(input_data)
            o.write(output_data)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
