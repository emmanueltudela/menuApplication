class MenuApplication {
	constructor(menusList, defaultMenuName) {
		this.menusList = menus;
		this.currentMenu = this.menusList[defaultMenuName];

		this.changeMenu(defaultMenuName);
	}

	hideCurrentMenu() {
		this.currentMenu.menuHtmlElement.style.display = "none";
	}

	displayCurrentMenu() {
		this.currentMenu.menuHtmlElement.style.display = "block";
	}

	changeMenu(menuName) {
		const menu = this.menusList[menuName];

		this.hideCurrentMenu();
		this.currentMenu = menu;
		this.displayCurrentMenu(); 
	}
}