function ViewModel() {
    var self = this;

    self.tabs = [
        { name: "О нас"},
        { name: "Музыка"},
        { name: "Новости"},
        { name: "Концерты"}
    ];

    self.currentTab = ko.observable(self.tabs[0]);

    self.isMobile = ko.computed(function() {
        var hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        var matchesMedia = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        return hasTouch && matchesMedia;
    });

    self.LoadMusicData = function () {
        musicData.forEach(i => i.showDetails = ko.observable(false));
        return musicData;
    };

    self.toggleAlbumDetails = function(album) {
        album.showDetails(!album.showDetails());
    };

    self.social   = socialData;
    self.music    = self.LoadMusicData()
    self.news     = newsData;
    self.conserts = consertsData;
    self.about    = aboutData;
}

// ko.applyBindings(new ViewModel());