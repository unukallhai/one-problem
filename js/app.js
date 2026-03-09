function ViewModel() {
    var self = this;

    self.tabs = [
        { name: "О нас",    tabindex: 1},
        { name: "Музыка",   tabindex: 2},
        { name: "Новости",  tabindex: 3},
        { name: "Концерты", tabindex: 4}
    ];

    self.social   = socialData;
    self.music    = musicData;
    self.news     = newsData;
    self.conserts = consertsData;

    self.currentTab = ko.observable(0);

    self.currentTabName = ko.computed(function () {
        return self.tabs[self.currentTab()].name;
    });


    self.selectTab = function (tab) {
        var index = self.tabs.indexOf(tab);
        self.currentTab(index);
    };

    self.isMobile = ko.computed(function() {
        var hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        var matchesMedia = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        return hasTouch && matchesMedia;
    });

    self.toggleAlbumDetails = function(album) {
        album.showDetails(!album.showDetails());
    };
}

ko.applyBindings(new ViewModel());