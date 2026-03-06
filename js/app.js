function About(aboutTitle, aboutText) {
    this.aboutTitle = aboutTitle;
    this.aboutText  = aboutText;
}

function Album(albumTitle, albumYear, albumType, albumCover) {
    this.albumTitle       = albumTitle;
    this.albumYear        = albumYear;
    this.albumType        = albumType;
    this.albumCover       = albumCover;
}

function News(newsTitle, newsText, newsDate, newsArchive) {
    this.newsTitle = newsTitle;
    this.newsText = newsText;
    this.newsDate = newsDate;
    this.newsArchive = newsArchive //BOOL
}

function Consert(consertTitle, consertDescription, consertDate) {
    this.consertTitle       = consertTitle;
    this.consertDescription = consertDescription;
    this.consertDate        = consertDate;
}

// Главная модель приложения
function ViewModel() {
    var self = this;

    // Список вкладок
    self.tabs = [
        { name: "О нас" },
        { name: "Музыка" },
        { name: "Новости" },
        { name: "Концерты" }
    ];

    self.currentTab = ko.observable(2);

    // Контент для каждой вкладки
    
    self.music = [
        new Album(
            "Вопреки",
            "2024",
            "Сингл",
            "images/albums/3.jpg"
        ),
        new Album(
            "Перегорели",
            "2023",
            "Сингл",
            "images/albums/2.jpg"
        ),
        new Album(
            "В движении - жизнь",
            "2023",
            "Сингл",
            "images/albums/1.jpg"
        )
    ];

    self.news = [
        new News(
            "В Бразилии попугаи пугают крокодилов",
            "\"Страшно, очень страшно\", — удалось узнать мнение о происходящем у очевидцев кровавых событий",
            "6/03/2026",
            true
        ),
        new News(
            "Итальянская пицца нападает на туристов",
            "\"Неаполитанская мафия отдыхает. Мы пришли за вкусом, а получили томатом в лицо\", — делятся впечатлениями пострадавшие в хлебобулочном конфликте",
            "17/02/2026",
            false
        ),
        new News(
            "С наступающим 2026 годом!",
            "Новый Год несёт любовь и счастье\nВсе мечты сбываются\nCoca-Cola в дом приносит праздник\nПусть он продолжается\n\nПраздник к нам приходит\nПраздник к нам приходит",
            "29/12/2025",
            false
        )
    ];
    self.conserts = [];


    // Название текущей вкладки
    self.currentTabName = ko.computed(function () {
        return self.tabs[self.currentTab()].name;
    });


    // Метод для выбора вкладки
    self.selectTab = function (tab) {
        // Находим индекс выбранной вкладки
        var index = self.tabs.indexOf(tab);
        self.currentTab(index);
    };
}

// Активируем Knockout
ko.applyBindings(new ViewModel());