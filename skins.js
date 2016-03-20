image = new Image();
image.crossOrigin = 'anonymous';
image.src = 'http://i.imgur.com/5EJhgQS.jpg';
window.agar.hooks.cellSkin = function(cell, old_skin) {
	var skins1 = document.getElementById
    if (cell.name == 'octbots') return image;
    return old_skin;
}    



