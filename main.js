const menus = {
	"mainMenu" : new Menu("mainMenu", document.querySelector("#mainMenu")),
	"gameMenu" : new Menu("gameMenu", document.querySelector("#gameMenu")),
	"settingsMenu" : new Menu("settingsMenu", document.querySelector("#settingsMenu")),
	"creditsMenu" : new Menu("creditsMenu", document.querySelector("#creditsMenu"))
}

const windowManager = new MenuApplication(menus, "mainMenu");