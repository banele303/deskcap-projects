import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

os.makedirs('public/images/projects', exist_ok=True)

def create_electrical_image(filepath):
    width, height = 1200, 900
    img = Image.new('RGB', (width, height), color=(30, 32, 38))
    draw = ImageDraw.Draw(img)

    # Background wall texture
    for y in range(0, height, 40):
        draw.line([(0, y), (width, y)], fill=(38, 41, 48), width=1)
    for x in range(0, width, 60):
        draw.line([(x, 0), (x, height)], fill=(38, 41, 48), width=1)

    # Main DB Board Enclosure (Gray Metal Box)
    box_left, box_top, box_right, box_bottom = 300, 150, 900, 750
    draw.rectangle([box_left, box_top, box_right, box_bottom], fill=(210, 215, 222), outline=(140, 145, 155), width=8)
    draw.rectangle([box_left+15, box_top+15, box_right-15, box_bottom-15], fill=(45, 48, 55), outline=(100, 105, 115), width=4)

    # Wires coming in from top
    colors = [(220, 50, 50), (50, 120, 220), (220, 180, 40), (40, 180, 80), (180, 50, 180)]
    for idx, x in enumerate(range(350, 850, 45)):
        wire_color = colors[idx % len(colors)]
        draw.line([(x, box_top-100), (x, box_top+100)], fill=wire_color, width=6)

    # Circuit Breakers Rows
    for row_y in [250, 420, 590]:
        # Rail bar
        draw.rectangle([box_left+40, row_y, box_right-40, row_y+85], fill=(70, 75, 85), outline=(120, 125, 135), width=2)
        # Breaker Switches
        for sw_x in range(box_left+55, box_right-70, 35):
            switch_on = ((sw_x // 35) % 3 != 0)
            draw.rectangle([sw_x, row_y+5, sw_x+28, row_y+80], fill=(230, 235, 240), outline=(80, 85, 95), width=2)
            # Switch toggle
            toggle_y = row_y+15 if switch_on else row_y+50
            toggle_color = (200, 40, 40) if switch_on else (60, 60, 60)
            draw.rectangle([sw_x+4, toggle_y, sw_x+24, toggle_y+20], fill=toggle_color)

    # Add lighting glow indicator
    glow = Image.new('RGBA', (width, height), (0,0,0,0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([450, 350, 750, 650], fill=(232, 160, 78, 60))
    img.paste(glow, (0, 0), glow)

    # Overlay badge
    draw.rectangle([50, 50, 420, 110], fill=(184, 101, 27), outline=(232, 160, 78), width=2)
    try:
        font = ImageFont.truetype("arial.ttf", 26)
    except:
        font = ImageFont.load_default()
    draw.text((70, 68), "ELECTRICAL DB & WIRING", fill=(255, 255, 255), font=font)

    img.save(filepath, quality=95)
    print(f"Saved electrical image to {filepath}")

def create_drywalling_image(filepath):
    width, height = 1200, 900
    img = Image.new('RGB', (width, height), color=(240, 235, 225))
    draw = ImageDraw.Draw(img)

    # Steel Stud Grid Framework (Vertical Galvanised Studs)
    for x in range(100, width, 180):
        # Steel stud profile (silver/gray metallic)
        draw.rectangle([x, 0, x+40, height], fill=(180, 185, 195), outline=(130, 135, 145), width=3)
        draw.rectangle([x+10, 0, x+30, height], fill=(210, 215, 225))

    # Rhinoboard Gypsum Panels being installed (Ivory/Off-white)
    # Panel 1 (Left completed)
    draw.rectangle([0, 100, 460, height-100], fill=(225, 218, 205), outline=(170, 160, 145), width=4)
    # Taped joint line
    draw.rectangle([445, 100, 475, height-100], fill=(245, 242, 235), outline=(200, 195, 185), width=1)

    # Panel 2 (Center under installation)
    draw.rectangle([480, 150, 940, height-150], fill=(230, 222, 210), outline=(170, 160, 145), width=4)
    # Screws on panel
    for sy in range(200, height-150, 120):
        for sx in [500, 710, 920]:
            draw.ellipse([sx-4, sy-4, sx+4, sy+4], fill=(80, 85, 95))

    # Insulation cavity visible on right
    draw.rectangle([960, 50, width, height-50], fill=(215, 190, 120), outline=(180, 155, 90), width=2)
    for iy in range(60, height-50, 40):
        draw.line([(960, iy), (width, iy+20)], fill=(195, 170, 100), width=3)

    # Overlay badge
    draw.rectangle([50, 50, 440, 110], fill=(31, 22, 17), outline=(184, 101, 27), width=2)
    try:
        font = ImageFont.truetype("arial.ttf", 26)
    except:
        font = ImageFont.load_default()
    draw.text((70, 68), "DRYWALL & PARTITIONING", fill=(232, 160, 78), font=font)

    img.save(filepath, quality=95)
    print(f"Saved drywalling image to {filepath}")

create_electrical_image('public/images/projects/electrical-hd.jpeg')
create_drywalling_image('public/images/projects/drywalling-hd.jpeg')
