let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Visible)
tileDisplay.setBrightness(50)
basic.showNumber(1)
basic.forever(function () {
    for (let drawing = 0; drawing <= 5; drawing++) {
        tileDisplay.setMatrixColor(drawing, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
    for (let drawing = 0; drawing <= 5; drawing++) {
        tileDisplay.setMatrixColor(drawing + 1, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    tileDisplay.setMatrixColor(6, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Blue))
    tileDisplay.setMatrixColor(5, 0, Kitronik_Zip_Tile.colors(ZipLedColors.White))
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
    for (let drawing = 0; drawing <= 7; drawing++) {
        tileDisplay.setMatrixColor(drawing, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    tileDisplay.setMatrixColor(6, 0, Kitronik_Zip_Tile.colors(ZipLedColors.White))
    tileDisplay.setMatrixColor(5, 0, Kitronik_Zip_Tile.colors(ZipLedColors.White))
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
    for (let drawing = 0; drawing <= 6; drawing++) {
        tileDisplay.setMatrixColor(drawing + 1, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
    for (let drawing = 0; drawing <= 7; drawing++) {
        tileDisplay.setMatrixColor(drawing, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    tileDisplay.setMatrixColor(6, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Blue))
    tileDisplay.setMatrixColor(5, 0, Kitronik_Zip_Tile.colors(ZipLedColors.White))
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
    for (let drawing = 0; drawing <= 5; drawing++) {
        tileDisplay.setMatrixColor(drawing + 1, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    tileDisplay.setMatrixColor(6, 0, Kitronik_Zip_Tile.colors(ZipLedColors.White))
    tileDisplay.setMatrixColor(5, 0, Kitronik_Zip_Tile.colors(ZipLedColors.White))
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
    for (let drawing = 0; drawing <= 5; drawing++) {
        tileDisplay.setMatrixColor(drawing, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
    tileDisplay.rotate(8)
    tileDisplay.show()
    basic.pause(500)
})
